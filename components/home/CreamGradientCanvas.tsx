"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * "Cream Ribbons" — a lightweight, single-pass gradient shader: two soft,
 * slowly-rotating banded-gradient rectangles drifting over a cream base.
 * Ported from a Shadertoy-style vanilla three.js sketch (see the
 * reference in app/hero-cream-gradient (1).html) into this project's
 * react-three-fiber conventions.
 *
 * Colors are pulled from the site palette (app/globals.css) instead of
 * the reference's literal values, so the canvas blends into the page
 * background (--background) at rest and only warms toward gold where the
 * bands cross.
 *
 * Much cheaper than LiquidCarbonCanvas.tsx (no raymarching, no offscreen
 * render-target pass) — a handful of mix()/branch ops per pixel — so it
 * renders at the Canvas's default framerate/dpr without that shader's
 * frame-capping or portal-scene machinery. See CreamGradientBackground.tsx
 * for the lightweight wrapper that decides whether to load this chunk at
 * all (reduced-motion / WebGL / coarse-pointer gating, idle-time mount).
 */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

// Note: the reference sketch computed `uv = (vUv * iResolution) / iResolution`
// before using it — a no-op round trip through the canvas resolution that
// cancels out. The gradient math below is resolution-independent, so we
// use vUv directly and skip carrying an iResolution uniform at all.
const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float iTime;
  varying vec2 vUv;

  #define PI 3.14159265359

  // Site palette (app/globals.css): --background (#faf8f2) <-> a soft
  // warm gold in the --accent family, so the effect reads as an ambient
  // extension of the page rather than a separate "canvas".
  const vec3 cCream = vec3(0.9804, 0.9725, 0.9490); // --background #faf8f2
  const vec3 cGold   = vec3(0.9255, 0.8745, 0.6863); // warm gold

  // 12-stop piecewise gradient alternating cream/gold, at the reference
  // sketch's hand-tuned stop positions (denser near the middle so the
  // bands read as soft ribbons rather than a hard-edged stripe).
  vec3 bandedGradient(float t) {
    if (t < 0.184058) return mix(cCream, cGold, t / 0.184058);
    if (t < 0.225)    return mix(cGold, cCream, (t - 0.184058) / (0.225 - 0.184058));
    if (t < 0.26)     return mix(cCream, cGold, (t - 0.225) / (0.26 - 0.225));
    if (t < 0.29)     return mix(cGold, cCream, (t - 0.26) / (0.29 - 0.26));
    if (t < 0.31)     return mix(cCream, cGold, (t - 0.29) / (0.31 - 0.29));
    if (t < 0.349108) return mix(cGold, cCream, (t - 0.31) / (0.349108 - 0.31));
    if (t < 0.494224) return mix(cCream, cGold, (t - 0.349108) / (0.494224 - 0.349108));
    if (t < 0.619507) return mix(cGold, cCream, (t - 0.494224) / (0.619507 - 0.494224));
    if (t < 0.759898) return mix(cCream, cGold, (t - 0.619507) / (0.759898 - 0.619507));
    if (t < 0.911597) return mix(cGold, cCream, (t - 0.759898) / (0.911597 - 0.759898));
    return mix(cCream, cGold, (t - 0.911597) / (0.975 - 0.911597));
  }

  vec3 rectangleGradient(vec2 uv, float angle) {
    float t = cos(angle) * uv.x + sin(angle) * uv.y;
    return bandedGradient(t);
  }

  void main() {
    vec2 uv = vUv;
    vec3 bg = bandedGradient(uv.x + uv.y);

    float angle1 = -59.3288 * PI / 180.0 + sin(iTime * 0.05) * 0.2;
    vec2 uv1 = uv - vec2(sin(iTime * 0.07) * 0.3, cos(iTime * 0.5) * 0.2 + 0.1);
    vec3 rect1 = rectangleGradient(uv1, angle1);

    float angle2 = -101.773 * PI / 180.0 + cos(iTime * 0.04) * 0.9;
    vec2 uv2 = uv - vec2(cos(iTime * 0.06) * 0.4 + 0.5, sin(iTime * 0.08) * 0.3 + 1.0);
    vec3 rect2 = rectangleGradient(uv2, angle2);

    vec3 color = bg;
    color = mix(color, rect1, 0.5);
    color = mix(color, rect2, 0.5);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function CreamGradientPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{ iTime: { value: 0 } }}
      />
    </mesh>
  );
}

export default function CreamGradientCanvas({ inView }: { inView: boolean }) {
  return (
    <Canvas
      gl={{ antialias: false, powerPreference: "low-power", alpha: false }}
      dpr={[1, 1.5]}
      frameloop={inView ? "always" : "never"}
      orthographic
      camera={{ position: [0, 0, 1] }}
      // Safety net: paint cream the instant the context exists, before the
      // first real shader frame runs, so a slow first draw never flashes
      // opaque black (alpha is false above).
      onCreated={({ gl }) => {
        gl.setClearColor(0xfaf8f2, 1);
        gl.clear();
      }}
    >
      <CreamGradientPlane />
    </Canvas>
  );
}
