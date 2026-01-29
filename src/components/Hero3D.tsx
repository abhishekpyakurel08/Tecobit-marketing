"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function FloatingShape() {
    const meshRef = useRef<THREE.Mesh>(null);
    const { theme } = useTheme();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} scale={1.8}>
                <icosahedronGeometry args={[1, 0]} /> {/* Low poly look */}
                <MeshDistortMaterial
                    color={theme === 'light' ? "#00D9C0" : "#3DFFC5"}
                    attach="material"
                    distort={0.4}
                    speed={2}
                    wireframe={true}
                    roughness={0}
                    metalness={0.5}
                />
            </mesh>
        </Float>
    );
}

export function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <FloatingShape />
            </Canvas>
        </div>
    );
}
