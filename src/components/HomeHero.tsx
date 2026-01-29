"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Hero3D } from "@/components/Hero3D";

interface HomeHeroProps {
    data?: any;
}

export function HomeHero({ data }: HomeHeroProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const stats = [
        { value: '250+', label: 'Projects' },
        { value: '600+', label: 'Clients' },
        { value: '340%', label: 'ROI Avg' },
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <section className="relative min-h-screen pt-40 pb-20 overflow-hidden flex items-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30"></div>

            {/* 3D Element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block pointer-events-none z-0">
                <Hero3D />
            </div>

            <div className="section-container relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-10 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Digital Excellence</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-3xl lg:text-4xl"
                        >
                            Business <br />
                            <span className="text-primary italic">Into Brand</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl max-w-xl"
                        >
                            {data?.hero?.description || "Transform your digital footprint with high-performance software and architecture-driven strategies that dominate the market."}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="grid grid-cols-3 gap-4 lg:gap-8"
                        >
                            {stats.map((stat, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="text-3xl md:text-4xl font-bold text-primary tracking-tighter">{stat.value}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="btn-premium h-14 px-10">
                                Start Your Journey
                            </button>
                            <button className="btn-outline-premium h-14 px-10">
                                View Portfolio
                            </button>
                        </motion.div>
                    </div>

                    {/* Form Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="lg:col-span-5 order-1 lg:order-2"
                    >
                        <div className="card-premium relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-500"></div>

                            <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Free Strategy Call</h3>
                            <p className="mb-8 text-sm">Let's build something extraordinary together.</p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-sm focus:border-primary outline-none transition-all"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-sm focus:border-primary outline-none transition-all"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full h-12 bg-background/50 border border-border rounded-xl px-4 text-sm focus:border-primary outline-none transition-all"
                                />
                                <textarea
                                    placeholder="Project details..."
                                    className="w-full h-32 bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-all resize-none"
                                />
                                <button type="submit" className="w-full btn-premium py-4 font-bold">
                                    Get Quote Now
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none hidden md:flex"
            >
                <div className="w-5 h-8 border-2 border-border/50 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-1.5 bg-primary rounded-full"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
}
