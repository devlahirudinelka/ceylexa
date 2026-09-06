"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float iTime;
  varying vec2 vUv;

  #define PI 3.14159265359

  // Pure light cream/alabaster palette (no dark tones)
  const vec3 cCream     = vec3(0.988, 0.984, 0.968); // #FCFAF7 - Pure alabaster base
  const vec3 cIvory     = vec3(0.976, 0.958, 0.920); // #F9F4EB - Soft warm ivory
  const vec3 cSoftLinen = vec3(0.955, 0.925, 0.865); // #F3EBDD - Gentle champagne/linen
  const vec3 cHighlight = vec3(1.000, 0.996, 0.990); // #FFFEFC - Pearlescent white

  vec3 bandedGradient(float val) {
    float t = clamp(val, 0.0, 1.0);

    if (t < 0.184) return mix(cCream, cIvory, t / 0.184);
    if (t < 0.225) return mix(cIvory, cHighlight, (t - 0.184) / (0.225 - 0.184));
    if (t < 0.260) return mix(cHighlight, cSoftLinen, (t - 0.225) / (0.260 - 0.225));
    if (t < 0.290) return mix(cSoftLinen, cIvory, (t - 0.260) / (0.290 - 0.260));
    if (t < 0.310) return mix(cIvory, cCream, (t - 0.290) / (0.310 - 0.290));
    if (t < 0.349) return mix(cCream, cHighlight, (t - 0.310) / (0.349 - 0.310));
    if (t < 0.494) return mix(cHighlight, cSoftLinen, (t - 0.349) / (0.494 - 0.349));
    if (t < 0.619) return mix(cSoftLinen, cIvory, (t - 0.494) / (0.619 - 0.494));
    if (t < 0.760) return mix(cIvory, cCream, (t - 0.619) / (0.760 - 0.619));
    if (t < 0.912) return mix(cCream, cHighlight, (t - 0.760) / (0.912 - 0.760));
    return mix(cHighlight, cCream, (t - 0.912) / (1.0 - 0.912));
  }

  vec3 rectangleGradient(vec2 uv, float angle) {
    float t = fract(cos(angle) * uv.x + sin(angle) * uv.y);
    return bandedGradient(t);
  }

  void main() {
    vec2 uv = vUv;
    
    // Dynamic background wave
    float bgTime = iTime * 0.15;
    vec3 bg = bandedGradient(fract((uv.x + uv.y) * 0.5 + sin(bgTime) * 0.1));

    // Noticeable, graceful ribbon 1 motion
    float t1 = iTime * 0.22;
    float angle1 = -59.3288 * PI / 180.0 + sin(t1 * 0.6) * 0.25;
    vec2 uv1 = uv - vec2(sin(t1 * 0.8) * 0.3, cos(t1 * 0.5) * 0.25 + 0.1);
    vec3 rect1 = rectangleGradient(uv1, angle1);

    // Noticeable, graceful ribbon 2 motion
    float t2 = iTime * 0.18;
    float angle2 = -101.773 * PI / 180.0 + cos(t2 * 0.5) * 0.3;
    vec2 uv2 = uv - vec2(cos(t2 * 0.7) * 0.35 + 0.4, sin(t2 * 0.6) * 0.3 + 0.8);
    vec3 rect2 = rectangleGradient(uv2, angle2);

    // Layer and blend
    vec3 color = bg;
    color = mix(color, rect1, 0.42);
    color = mix(color, rect2, 0.42);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function CreamGradientPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Keep uniforms stable between renders
  const uniforms = useMemo(
    () => ({
      iTime: { value: 0 },
    }),
    [],
  );

  // Continuously ticks the animation
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function CreamGradientCanvas({ inView }: { inView: boolean }) {
  return (
    <div className="w-full h-full relative">
      <Canvas
        gl={{ antialias: false, powerPreference: "low-power", alpha: false }}
        dpr={[1, 1.5]}
        frameloop={inView ? "always" : "never"}
        orthographic
        camera={{ position: [0, 0, 1] }}
        onCreated={({ gl }) => {
          gl.setClearColor(0xfcfaf7, 1);
          gl.clear();
        }}
      >
        <CreamGradientPlane />
      </Canvas>
    </div>
  );
}
