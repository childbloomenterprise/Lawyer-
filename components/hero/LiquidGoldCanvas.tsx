"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScreenQuad, Preload } from "@react-three/drei";
import * as THREE from "three";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uAspect;

  // --- value noise + fbm ---
  vec2 hash(vec2 p){
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }
  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash(i + vec2(0.0,0.0)), f - vec2(0.0,0.0)),
          dot(hash(i + vec2(1.0,0.0)), f - vec2(1.0,0.0)), u.x),
      mix(dot(hash(i + vec2(0.0,1.0)), f - vec2(0.0,1.0)),
          dot(hash(i + vec2(1.0,1.0)), f - vec2(1.0,1.0)), u.x), u.y);
  }
  float fbm(vec2 p){
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++){
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = uv - 0.5;
    p.x *= uAspect;

    float t = uTime * 0.045;
    vec2 m = uMouse * 0.35;

    // domain-warped flow → liquid feel
    float n1 = fbm(p * 2.1 + vec2(t, -t) + m);
    float n2 = fbm(p * 3.4 - vec2(t * 1.3, t) + n1 * 1.2);
    float v = 0.5 + 0.5 * (n1 * 0.6 + n2 * 0.4);

    vec3 black  = vec3(0.039, 0.039, 0.047);
    vec3 royal  = vec3(0.427, 0.290, 1.0);
    vec3 gold   = vec3(0.788, 0.635, 0.294);
    vec3 goldL  = vec3(0.910, 0.800, 0.510);

    vec3 col = black;
    col = mix(col, royal * 0.6,  smoothstep(0.15, 0.58, v) * 0.30);   // royal undertone
    col = mix(col, gold,  smoothstep(0.44, 0.80, v) * 0.9);           // gold veins
    col = mix(col, goldL, smoothstep(0.66, 0.93, v) * 0.95);          // highlights

    // soft mouse halo
    float halo = smoothstep(0.6, 0.0, length((uv - 0.5) * vec2(uAspect, 1.0) - uMouse * 0.5));
    col += goldL * halo * 0.10;

    // vignette toward edges so copy stays readable
    float vig = smoothstep(1.25, 0.25, length(uv - 0.5));
    col *= mix(0.45, 1.0, vig);

    // fine grain
    float g = fract(sin(dot(uv * uTime, vec2(12.9898, 78.233))) * 43758.5453);
    col += (g - 0.5) * 0.015;

    gl_FragColor = vec4(col, 1.0);
  }
`;

function FlowPlane() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  const mouse = useRef(new THREE.Vector2(0, 0));
  const target = useRef(new THREE.Vector2(0, 0));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uAspect: { value: size.width / size.height },
    }),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useFrame((state, delta) => {
    const m = matRef.current;
    if (!m) return;
    m.uniforms.uTime.value = state.clock.elapsedTime;
    m.uniforms.uAspect.value = state.size.width / state.size.height;
    // ease mouse toward target
    mouse.current.lerp(target.current, Math.min(1, delta * 3));
    m.uniforms.uMouse.value.copy(mouse.current);
  });

  // pointer in NDC-ish (-0.5..0.5)
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set(
        e.clientX / window.innerWidth - 0.5,
        -(e.clientY / window.innerHeight - 0.5)
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <ScreenQuad>
      <shaderMaterial
        ref={matRef}
        vertexShader={vertex}
        fragmentShader={fragment}
        uniforms={uniforms}
        depthTest={false}
        depthWrite={false}
      />
    </ScreenQuad>
  );
}

export default function LiquidGoldCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}
      frameloop="always"
      camera={{ position: [0, 0, 1] }}
    >
      <FlowPlane />
      <Preload all />
    </Canvas>
  );
}
