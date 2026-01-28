"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
}

export function RippleButton({ children, className = "", variant = "primary", ...props }: RippleButtonProps) {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    useEffect(() => {
        const bounce = setTimeout(() => {
            if (ripples.length > 0) {
                setRipples([]);
            }
        }, 1000);
        return () => clearTimeout(bounce);
    }, [ripples]);

    const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setRipples([...ripples, { x, y, id: Date.now() }]);
    };

    const variants = {
        primary: "bg-tecobit-mint text-black hover:shadow-[0_0_30px_rgba(61,255,197,0.4)]",
        secondary: "bg-tecobit-deep-teal text-white hover:bg-teal-700",
        outline: "bg-transparent border-2 border-tecobit-mint text-tecobit-mint hover:bg-tecobit-mint/10",
        ghost: "bg-transparent text-foreground hover:bg-white/10"
    };

    return (
        <button
            className={`relative overflow-hidden px-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all active:scale-95 ${variants[variant]} ${className}`}
            onMouseDown={addRipple}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {ripples.map((ripple) => (
                <span
                    key={ripple.id}
                    className="absolute bg-white/30 rounded-full pointer-events-none animate-ripple"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 100,
                        height: 100,
                        marginLeft: -50,
                        marginTop: -50,
                    }}
                />
            ))}
        </button>
    );
}
