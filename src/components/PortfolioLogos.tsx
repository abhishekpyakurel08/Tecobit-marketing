"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const logos = [
    { name: "ANOVA", url: "https://digitalterai.com/wp-content/uploads/2021/08/anova-logo.png" },
    { name: "TANSEN", url: "https://digitalterai.com/wp-content/uploads/2021/08/tansen-logo.png" },
    { name: "BETTER", url: "https://digitalterai.com/wp-content/uploads/2021/08/better-logo.png" },
    { name: "TRIPFINN", url: "https://digitalterai.com/wp-content/uploads/2021/08/tripfinn-logo.png" },
    { name: "LOGO 5", url: "https://digitalterai.com/wp-content/uploads/2021/08/anova-logo.png" },
    { name: "LOGO 6", url: "https://digitalterai.com/wp-content/uploads/2021/08/tansen-logo.png" },
    { name: "LOGO 7", url: "https://digitalterai.com/wp-content/uploads/2021/08/better-logo.png" },
    { name: "LOGO 8", url: "https://digitalterai.com/wp-content/uploads/2021/08/tripfinn-logo.png" },
];

export function PortfolioLogos() {
    return (
        <section className="py-24 bg-muted/10 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 uppercase tracking-tighter leading-[0.85]">
                        Market <span className="text-tecobit-mint">Influence</span>
                    </h2>
                    <div className="w-32 h-2 bg-tecobit-mint mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {logos.map((logo, index) => (
                        <LogoItem key={index} logo={logo} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function LogoItem({ logo, index }: { logo: any, index: number }) {
    const [error, setError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="bg-background-secondary dark:bg-white/5 border border-border p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all h-32 flex items-center justify-center group"
        >
            {error ? (
                <span className="font-bold text-muted-foreground">{logo.name}</span>
            ) : (
                <Image
                    src={logo.url}
                    alt={logo.name}
                    width={160}
                    height={80}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                    onError={() => setError(true)}
                />
            )}
        </motion.div>
    );
}
