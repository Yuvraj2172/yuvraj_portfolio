"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

export function Hero3D() {
  return (
    <div className="h-56 w-56" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 3, 3]} intensity={1.3} />
        <directionalLight position={[-3, -2, -3]} intensity={0.4} color="#38bdf8" />
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.1} floatIntensity={1.6}>
            <mesh>
              <icosahedronGeometry args={[1.4, 5]} />
              <MeshDistortMaterial
                color="#0ea5e9"
                distort={0.4}
                speed={2}
                roughness={0.15}
                metalness={0.5}
              />
            </mesh>
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
