"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    if (!mounted) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-tecobit-mint pointer-events-none z-[9999] hidden lg:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-tecobit-mint rounded-full pointer-events-none z-[9999] hidden lg:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    transform: "translate(12px, 12px)"
                }}
            />
        </>
    );
}
