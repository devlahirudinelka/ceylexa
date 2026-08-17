"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * "Liquid Carbon" — ported from the Alcatraz / Rhodium 4k intro
 * by Jochen "Virgill" Feldkötter (pouet.net/prod.php?which=68239).
 *
 * Two-pass Shadertoy shader:
 *  - Buffer A: a raymarched, refractive "liquid metal" slab, rendered
 *    to an offscreen render target.
 *  - Image: a depth-of-field blur that reads Buffer A back and is what
 *    actually lands on screen.
 *
 * Ported to run inside a single react-three-fiber <Canvas>: Buffer A is
 * rendered into a WebGLRenderTarget via a portal-scene each frame, then
 * the Image pass (a normal Canvas child) samples it as iChannel0.
 *
 * Buffer A's color output (see the end of its mainImage) is repainted
 * onto a white void using the site's amber palette (--accent, --accent-2,
 * --accent-3, --muted, --border from app/globals.css) instead of the
 * original demo's glow-on-black, so it sits on this site's light theme.
 *
 * This file is the heavy, three.js-importing half of the background —
 * see LiquidCarbonBackground.tsx for the lightweight wrapper that decides
 * *whether* to load it at all (code-split via next/dynamic) and keeps
 * that decision free of any three.js/@react-three/fiber import cost.
 *
 * Perf notes (this is a per-pixel, two-pass, continuously-animated
 * shader — worth keeping cheap):
 *  - Loop iteration counts below are trimmed ~25-30% from the original
 *    demo values; they're plain tunables if you want to trade quality
 *    for speed (or back) — see castRayx/refr/softshadow/the glow loop,
 *    and the DOF sample count in the Image pass.
 *  - dpr is pinned to 1 (no retina supersampling) since the DOF blur
 *    already softens the result — supersampling here buys little and
 *    costs ~1.5-2x the pixel count on common retina displays.
 *  - The render loop is throttled to ~30fps (see TARGET_FRAME_INTERVAL
 *    below) via gl.preserveDrawingBuffer, which is safe to skip frames
 *    on: roughly halves sustained GPU cost with no visible difference
 *    for this kind of slow, ambient motion.
 */

const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Buffer A — the raymarched liquid-metal slab.
const bufferAFragmentShader = /* glsl */ `
  uniform float iTime;
  uniform vec2 iResolution;
  #define time iTime
  #define res iResolution

  // Site palette (app/globals.css) — the shader's foreground "ink" colors.
  const vec3 cAccent  = vec3(0.7059, 0.3255, 0.0353); // --accent  #b45309
  const vec3 cAccent2 = vec3(0.9176, 0.3451, 0.0471); // --accent-2 #ea580c
  const vec3 cAccent3 = vec3(0.5725, 0.2510, 0.0549); // --accent-3 #92400e
  const vec3 cMuted   = vec3(0.4196, 0.3569, 0.3020); // --muted   #6b5b4d
  const vec3 cBorder  = vec3(0.1412, 0.1020, 0.0471); // --border  rgb(36,26,12)

  float bounce;

  float sdBox(vec3 p, vec3 b) {
    vec3 d = abs(p) - b;
    return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0));
  }

  void pR(inout vec2 p, float a) {
    p = cos(a) * p + sin(a) * vec2(p.y, -p.x);
  }

  // 3D noise function (IQ)
  float noise(vec3 p) {
    vec3 ip = floor(p);
    p -= ip;
    vec3 s = vec3(7.0, 157.0, 113.0);
    vec4 h = vec4(0.0, s.yz, s.y + s.z) + dot(ip, s);
    p = p * p * (3.0 - 2.0 * p);
    h = mix(fract(sin(h) * 43758.5), fract(sin(h + s.x) * 43758.5), p.x);
    h.xy = mix(h.xz, h.yw, p.y);
    return mix(h.x, h.y, p.z);
  }

  float map(vec3 p) {
    p.z -= 1.0;
    p *= 0.9;
    pR(p.yz, bounce * 1.0 + 0.4 * p.x);
    return sdBox(p + vec3(0.0, sin(1.6 * time), 0.0), vec3(20.0, 0.05, 1.2)) - 0.4 * noise(8.0 * p + 3.0 * bounce);
  }

  vec3 calcNormal(vec3 pos) {
    float eps = 0.0001;
    float d = map(pos);
    return normalize(vec3(
      map(pos + vec3(eps, 0.0, 0.0)) - d,
      map(pos + vec3(0.0, eps, 0.0)) - d,
      map(pos + vec3(0.0, 0.0, eps)) - d
    ));
  }

  // standard sphere tracing inside and outside
  // (iteration cap trimmed 120 -> 90; the break-on-converge condition
  // means this is a worst-case cap, not a fixed cost)
  float castRayx(vec3 ro, vec3 rd) {
    float function_sign = (map(ro) < 0.0) ? -1.0 : 1.0;
    float precis = 0.0001;
    float h = precis * 2.0;
    float t = 0.0;
    for (int i = 0; i < 90; i++) {
      if (abs(h) < precis || t > 12.0) break;
      h = function_sign * map(ro + rd * t);
      t += h;
    }
    return t;
  }

  // refraction (iteration cap trimmed 50 -> 36)
  float refr(vec3 pos, vec3 lig, vec3 dir, vec3 nor, float angle, out float t2, out vec3 nor2) {
    float h = 0.0;
    t2 = 2.0;
    vec3 dir2 = refract(dir, nor, angle);
    for (int i = 0; i < 36; i++) {
      if (abs(h) > 3.0) break;
      h = map(pos + dir2 * t2);
      t2 -= h;
    }
    nor2 = calcNormal(pos + dir2 * t2);
    return (0.5 * clamp(dot(-lig, nor2), 0.0, 1.0) + pow(max(dot(reflect(dir2, nor2), lig), 0.0), 8.0));
  }

  // softshadow (iteration cap trimmed 22 -> 16)
  float softshadow(vec3 ro, vec3 rd) {
    float sh = 1.0;
    float t = 0.02;
    float h = 0.0;
    for (int i = 0; i < 16; i++) {
      if (t > 20.0) continue;
      h = map(ro + rd * t);
      sh = min(sh, 4.0 * h / t);
      t += h;
    }
    return sh;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    bounce = abs(fract(0.05 * time) - 0.5) * 20.0; // triangle function

    vec2 uv = gl_FragCoord.xy / res.xy;
    vec2 p = uv * 2.0 - 1.0;

    // bouncy cam every 10 seconds
    float wobble = (fract(0.1 * (time - 1.0)) >= 0.9) ? fract(-time) * 0.1 * sin(30.0 * time) : 0.0;

    // camera
    vec3 dir = normalize(vec3(2.0 * gl_FragCoord.xy - res.xy, res.y));
    vec3 org = vec3(0.0, 2.0 * wobble, -3.0);

    // standard sphere tracing:
    vec3 color2 = vec3(0.0);
    float t = castRayx(org, dir);
    vec3 pos = org + dir * t;
    vec3 nor = calcNormal(pos);
    // lighting:
    vec3 lig = normalize(vec3(0.2, 6.0, 0.5));
    // scene depth
    float depth = clamp((1.0 - 0.09 * t), 0.0, 1.0);

    vec3 nor2 = vec3(0.0);
    if (t < 12.0) {
      color2 = vec3(max(dot(lig, nor), 0.0) + pow(max(dot(reflect(dir, nor), lig), 0.0), 16.0));
      color2 *= clamp(softshadow(pos, lig), 0.0, 1.0); // shadow
      float t2;
      color2.rgb += refr(pos, lig, dir, nor, 0.9, t2, nor2) * depth;
      color2 -= clamp(0.1 * t2, 0.0, 1.0); // inner intensity loss
    }

    float tmp = 0.0;
    float T = 1.0;
    // animation of glow intensity (iteration cap trimmed 128 -> 90)
    float intensity = 0.1 * -sin(0.209 * time + 1.0) + 0.05;
    for (int i = 0; i < 90; i++) {
      float density = 0.0;
      float nebula = noise(org + bounce);
      density = intensity - map(org + 0.5 * nor2) * nebula;
      if (density > 0.0) {
        tmp = density / 90.0;
        T *= 1.0 - tmp * 100.0;
        if (T <= 0.0) break;
      }
      org += dir * 0.078;
    }
    T = clamp(T, 0.0, 1.5);
    float glowIntensity = exp(4.0 * (0.5 - T) - 0.8); // ember/glow density, unbounded above
    color2 *= depth;
    color2 += (1.0 - depth) * noise(6.0 * dir + 0.3 * time) * 0.1; // subtle mist

    // Paint onto a white void using the site palette instead of the
    // original glow-on-black look: white where nothing was hit, deepening
    // through the amber ink tones as surface shading and ember glow build
    // up. Blending toward fixed brand colors (rather than inverting the
    // raw lit color) keeps their hues true instead of flipping to their
    // complements.
    float surfIntensity = clamp((color2.r + color2.g + color2.b) / 3.0, 0.0, 1.0);
    float glowAmt = clamp(glowIntensity, 0.0, 1.0);

    vec3 rgb = vec3(1.0);
    rgb = mix(rgb, mix(cAccent, cAccent3, surfIntensity), clamp(surfIntensity * 0.95, 0.0, 1.0));
    rgb = mix(rgb, cAccent2, clamp(glowAmt * 0.55, 0.0, 1.0));
    rgb = mix(rgb, cMuted, clamp((1.0 - depth) * 0.08, 0.0, 1.0)); // ambient haze
    float edge = smoothstep(0.3, 1.6, length(p));
    rgb = mix(rgb, cBorder, edge * 0.08); // faint corner vignette

    // scene depth included in alpha channel
    fragColor = vec4(rgb, abs(0.67 - depth) * 2.0 + 4.0 * wobble);
  }

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
`;

// Image — depth-of-field blur reading Buffer A back.
const imageFragmentShader = /* glsl */ `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform sampler2D iChannel0;
  #define time iTime
  #define res iResolution

  const float GA = 2.399;

  // simplified version of Dave Hoskins' blur
  // (sample count trimmed 80 -> 56)
  vec3 dof(sampler2D tex, vec2 uv, float rad) {
    vec3 acc = vec3(0.0);
    mat2 rot = mat2(cos(GA), sin(GA), -sin(GA), cos(GA));
    vec2 pixel = vec2(0.002 * res.y / res.x, 0.002);
    vec2 angle = vec2(0.0, rad);
    rad = 1.0;
    for (int j = 0; j < 56; j++) {
      rad += 1.0 / rad;
      angle *= rot;
      vec4 col = texture2D(tex, uv + pixel * (rad - 1.0) * angle);
      acc += col.xyz;
    }
    return acc / 56.0;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = gl_FragCoord.xy / res.xy;
    fragColor = vec4(dof(iChannel0, uv, texture2D(iChannel0, uv).w), 1.0);
  }

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
`;

// Sustained render cost is roughly halved by capping to ~30fps: the
// motion here is slow and ambient, so the difference from 60fps is not
// perceptible. Skipping a tick relies on gl.preserveDrawingBuffer (set
// on the Canvas below) so the browser doesn't clear the canvas between
// the frames we don't redraw.
const TARGET_FRAME_INTERVAL = 1 / 30;

function LiquidCarbonScene() {
  const { gl, size, scene, camera } = useThree();

  // Stable, once-constructed objects for the offscreen Buffer-A pass.
  // useState's lazy initializer (not a ref mutated during render) is the
  // React-idiomatic way to create these singletons once.
  const [bufferScene] = useState(() => new THREE.Scene());
  const [bufferCamera] = useState(() => {
    const cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 2);
    cam.position.set(0, 0, 1);
    return cam;
  });
  const [renderTarget] = useState(
    () =>
      new THREE.WebGLRenderTarget(1, 1, {
        type: THREE.HalfFloatType,
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
        depthBuffer: false,
        stencilBuffer: false,
      })
  );

  useEffect(() => {
    return () => {
      renderTarget.dispose();
    };
  }, [renderTarget]);

  const bufferMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const imageMaterialRef = useRef<THREE.ShaderMaterial>(null);
  const lastRenderTimeRef = useRef(0);
  const hasRenderedRef = useRef(false);

  // Render priority !== 0 hands us manual control of the frame: R3F no
  // longer auto-renders the visible scene, so we render Buffer A into
  // the offscreen target, then render the visible (Image pass) scene
  // to the canvas ourselves, in that order.
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // The frame-rate cap below skips ticks that are too close together,
    // but it must never skip the very first one — state.clock.elapsedTime
    // starts near 0, so comparing straight against lastRenderTimeRef
    // (also 0) would skip frame 1 and leave the canvas showing whatever
    // an undrawn WebGL buffer defaults to (opaque black, since alpha is
    // false) until the next real draw. hasRenderedRef forces that first
    // draw through regardless of elapsed time.
    if (hasRenderedRef.current && t - lastRenderTimeRef.current < TARGET_FRAME_INTERVAL) {
      return; // frame-rate cap: reuse the previously-drawn pixels
    }
    hasRenderedRef.current = true;
    lastRenderTimeRef.current = t;

    const dpr = gl.getPixelRatio();
    const w = Math.max(1, Math.floor(size.width * dpr));
    const h = Math.max(1, Math.floor(size.height * dpr));
    if (renderTarget.width !== w || renderTarget.height !== h) {
      renderTarget.setSize(w, h);
    }

    if (bufferMaterialRef.current) {
      bufferMaterialRef.current.uniforms.iTime.value = t;
      bufferMaterialRef.current.uniforms.iResolution.value.set(w, h);
    }
    if (imageMaterialRef.current) {
      imageMaterialRef.current.uniforms.iTime.value = t;
      imageMaterialRef.current.uniforms.iResolution.value.set(w, h);
      imageMaterialRef.current.uniforms.iChannel0.value = renderTarget.texture;
    }

    gl.setRenderTarget(renderTarget);
    gl.render(bufferScene, bufferCamera);
    gl.setRenderTarget(null);
    gl.render(scene, camera);
  }, -1);

  return (
    <>
      {createPortal(
        <mesh frustumCulled={false}>
          <planeGeometry args={[2, 2]} />
          <shaderMaterial
            ref={bufferMaterialRef}
            vertexShader={vertexShader}
            fragmentShader={bufferAFragmentShader}
            uniforms={{
              iTime: { value: 0 },
              iResolution: { value: new THREE.Vector2(1, 1) },
            }}
          />
        </mesh>,
        bufferScene
      )}
      <mesh frustumCulled={false}>
        <planeGeometry args={[2, 2]} />
        <shaderMaterial
          ref={imageMaterialRef}
          vertexShader={vertexShader}
          fragmentShader={imageFragmentShader}
          uniforms={{
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(1, 1) },
            iChannel0: { value: null },
          }}
        />
      </mesh>
    </>
  );
}

export default function LiquidCarbonCanvas({ inView }: { inView: boolean }) {
  return (
    <Canvas
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: false,
        preserveDrawingBuffer: true,
      }}
      dpr={1}
      frameloop={inView ? "always" : "never"}
      camera={{ position: [0, 0, 1] }}
      // Safety net: paint the buffer white the instant the context exists,
      // before the first real shader frame runs. Without this the raw
      // WebGL buffer defaults to opaque black (alpha is false above), so
      // any delay before that first draw — a slow GPU, a context restore
      // after tab-switch, a stutter on the main thread — would otherwise
      // flash black instead of the site's own background color.
      onCreated={({ gl }) => {
        gl.setClearColor(0xffffff, 1);
        gl.clear();
      }}
    >
      <LiquidCarbonScene />
    </Canvas>
  );
}
