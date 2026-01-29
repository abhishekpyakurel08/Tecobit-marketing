"use client";

import { PageTransition } from "@/components/PageTransition";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <PageTransition>
            <div className="bg-background min-h-screen overflow-hidden">
                {/* Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Floating Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="section-container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block border border-primary-500/30 bg-primary-500/5 px-6 py-2 rounded-full mb-8 backdrop-blur-sm"
                        >
                            <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">What We Do</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="h1 mb-8"
                        >
                            Our <span className="gradient-text">Expertise</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            Architecting comprehensive digital infrastructure tailored for explosive, scalable growth. We bridge the gap between vision and execution.
                        </motion.p>
                    </div>
                </section>

                <Services />

                <CallToAction />
            </div>
        </PageTransition>
    );
}
