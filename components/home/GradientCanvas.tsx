"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 0.55;
    for (int i = 0; i < 5; i++) {
      value += amp * noise(p);
      p *= 2.02;
      amp *= 0.55;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 p = (uv - 0.5) * vec2(aspect, 1.0) * 2.2;
    vec2 mouse = (uMouse - 0.5) * vec2(aspect, 1.0) * 2.2;

    float t = uTime * 0.05;
    vec2 q = vec2(fbm(p + t), fbm(p - t));
    float n = fbm(p + q * 1.2);

    vec3 colorDeep = vec3(0.02, 0.02, 0.045);
    vec3 colorViolet = vec3(0.26, 0.17, 0.52);
    vec3 colorCyan = vec3(0.04, 0.3, 0.4);

    vec3 nebula = mix(colorViolet, colorCyan, clamp(uv.y + (n - 0.5) * 0.5, 0.0, 1.0));
    float intensity = smoothstep(0.25, 0.9, n);
    vec3 col = mix(colorDeep, nebula, intensity * 0.6);

    float distToMouse = length(p - mouse);
    float glow = smoothstep(1.0, 0.0, distToMouse);
    col += glow * vec3(0.5, 0.42, 1.0) * 0.4;

    float ring = smoothstep(0.03, 0.0, abs(distToMouse - (0.5 + 0.06 * sin(uTime * 0.6))));
    col += ring * vec3(0.4, 0.85, 1.0) * 0.3;

    float vignette = smoothstep(1.1, 0.2, distance(uv, vec2(0.5, 0.45)));
    col *= mix(0.45, 1.0, vignette);

    float grain = (hash(uv * uResolution.xy + uTime) - 0.5) * 0.025;
    col += grain;

    col = clamp(col, 0.0, 1.0);
    gl_FragColor = vec4(col, 1.0);
  }
`;

function GradientPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const smoothMouse = useRef(new THREE.Vector2(0.5, 0.42));
  const { size, pointer } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.42) },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- uniforms object is created once; resolution is kept in sync via useFrame below
    []
  );

  useFrame((state, delta) => {
    const material = materialRef.current;
    if (!material) return;

    material.uniforms.uTime.value = state.clock.elapsedTime;

    const targetX = (pointer.x + 1) / 2;
    const targetY = (pointer.y + 1) / 2;
    const ease = 1 - Math.pow(0.001, delta);
    smoothMouse.current.x += (targetX - smoothMouse.current.x) * ease;
    smoothMouse.current.y += (targetY - smoothMouse.current.y) * ease;

    material.uniforms.uMouse.value.set(
      smoothMouse.current.x,
      smoothMouse.current.y
    );
    material.uniforms.uResolution.value.set(size.width, size.height);
  });

  return (
    <mesh>
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

export default function GradientCanvas({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <Canvas
        className="!pointer-events-auto"
        gl={{ antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 1] }}
      >
        <GradientPlane />
      </Canvas>
      <div className="noise-overlay" />
    </div>
  );
}
