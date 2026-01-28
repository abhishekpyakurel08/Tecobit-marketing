"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverGlow?: boolean;
}

export function GlassCard({ children, className = "", hoverGlow = false }: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverGlow ? {
                y: -5,
                boxShadow: "0 0 30px rgba(61,255,197,0.2)",
                borderColor: "rgba(61,255,197,0.4)"
            } : {}}
            className={`rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
}

export function ServiceCard({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href?: string }) {
    return (
        <GlassCard hoverGlow className="p-8 group cursor-pointer">
            <div className="w-16 h-16 rounded-xl bg-tecobit-mint/10 flex items-center justify-center text-tecobit-mint mb-6 group-hover:bg-tecobit-mint group-hover:text-black transition-all duration-500">
                {icon}
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-foreground group-hover:text-tecobit-mint transition-colors">
                {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
                {description}
            </p>
            {href && (
                <div className="mt-6 flex items-center text-xs font-black tracking-[0.2em] text-tecobit-mint opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 uppercase">
                    Learn More
                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
            )}

            {/* Hover Glow Effect */}
            <div className="absolute -inset-24 bg-tecobit-mint/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </GlassCard>
    );
}
