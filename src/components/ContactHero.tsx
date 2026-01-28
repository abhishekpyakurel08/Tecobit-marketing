"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function ContactHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tecobit-mint/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <nav className="flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                            <Link href="/" className="hover:text-tecobit-mint">Home</Link>
                            <span>/</span>
                            <span className="text-tecobit-mint">Contact</span>
                        </nav>

                        <h1 className="text-6xl md:text-8xl font-black text-foreground leading-[0.9]">
                            LET&apos;S <span className="text-tecobit-mint">CONNECT</span> <br />
                            AND GROW
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                            Ready to take your digital presence to the next level? Our team of experts is standing by to help you scale your business with data-driven strategies.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom border line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </section>
    );
}
