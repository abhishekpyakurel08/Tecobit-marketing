"use client";

import { motion } from "framer-motion";

const items = [
    "DATA-DRIVEN STRATEGY",
    "•",
    "PREMIUM APP DEVELOPMENT",
    "•",
    "SEO MASTERY",
    "•",
    "BRAND IDENTITY DESIGN",
    "•",
    "SOCIAL MEDIA GROWTH",
    "•",
    "ENTERPRISE SOLUTIONS",
    "•",
];

export function MarqueeBanner() {
    return (
        <section className="bg-tecobit-mint py-8 overflow-hidden relative z-30 shadow-[0_0_50px_rgba(61,255,197,0.3)] border-y border-teal-900/10">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex space-x-12 px-6"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...items, ...items, ...items, ...items].map((item, index) => (
                        <span key={index} className="text-tecobit-deep-teal font-black uppercase tracking-[0.4em] text-xl md:text-3xl italic">
                            {item}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    className="flex space-x-12 px-6"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    aria-hidden="true"
                >
                    {[...items, ...items, ...items, ...items].map((item, index) => (
                        <span key={index} className="text-tecobit-deep-teal font-black uppercase tracking-[0.4em] text-xl md:text-3xl italic">
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
