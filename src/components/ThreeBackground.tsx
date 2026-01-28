"use client";

import React, { useRef, useMemo, Suspense } from "react";
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-expect-error - maath/random doesn't have types
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "next-themes";

function Stars() {
    const ref = useRef<THREE.Group>(null);
    const { theme } = useTheme();
    const { mouse } = useThree();

    const sphere = useMemo(() => {
        const count = 5000;
        const data = new Float32Array(count * 3);
        // Manual generation compatible with all browsers
        for (let i = 0; i < count; i++) {
            const r = 1.2 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            data[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            data[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            data[i * 3 + 2] = r * Math.cos(phi);
        }
        return data;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Constant rotation + Mouse influence
            ref.current.rotation.x -= delta / 15;
            ref.current.rotation.y -= delta / 20;

            // Subtle parallax
            ref.current.rotation.x += (mouse.y * 0.01);
            ref.current.rotation.y += (mouse.x * 0.01);
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Points positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color={theme === 'light' ? "#1F6F78" : "#3DFFC5"}
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

export function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-[-1] bg-background transition-colors duration-500 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: false, alpha: true }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
}
