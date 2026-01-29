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

import { Typography } from "./ui/typography";

export function ServiceCard({ title, description, icon, href }: { title: string, description: string, icon: React.ReactNode, href?: string }) {
    return (
        <GlassCard hoverGlow className="p-8 h-full group cursor-pointer relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-tecobit-mint/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-tecobit-mint/10 flex items-center justify-center text-tecobit-mint mb-6 group-hover:bg-tecobit-mint group-hover:text-black transition-all duration-500 shadow-lg group-hover:shadow-tecobit-mint/50 ring-1 ring-tecobit-mint/20 group-hover:ring-0">
                    {icon}
                </div>

                <Typography variant="h3" className="mb-4 group-hover:text-tecobit-mint transition-colors tracking-tight">
                    {title}
                </Typography>

                <Typography variant="body-md" color="muted" className="mb-8 leading-relaxed">
                    {description}
                </Typography>

                {href && (
                    <div className="flex items-center gap-2">
                        <Typography variant="body-sm" weight="bold" className="uppercase tracking-[0.2em] text-tecobit-mint">
                            Explore
                        </Typography>
                        <span className="text-tecobit-mint transition-transform group-hover:translate-x-1">→</span>
                    </div>
                )}
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-tecobit-mint/10 blur-[50px] rounded-full group-hover:bg-tecobit-mint/20 transition-all duration-700 pointer-events-none" />
        </GlassCard>
    );
}
