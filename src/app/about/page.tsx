"use client";

import { PageTransition } from "@/components/PageTransition";
import { RippleButton } from "@/components/RippleButton";
import { ArrowRight, Target, Users, Zap, Search, Globe, Award } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    const stats = [
        { label: "Projects Delivered", value: "500+" },
        { label: "Client Retention", value: "98%" },
        { label: "Years Experience", value: "12+" },
        { label: "Team Experts", value: "45+" },
    ]

    const values = [
        { title: "Innovation", icon: <Zap size={32} />, desc: "We don't follow trends; we set them. We constantly explore new technologies to keep our clients ahead." },
        { title: "Transparency", icon: <Search size={32} />, desc: "No hidden fees, no jargon. Just clear results and open communication every step of the way." },
        { title: "Collaboration", icon: <Users size={32} />, desc: "We view ourselves as an extension of your team, working together to achieve your business goals." },
        { title: "Excellence", icon: <Award size={32} />, desc: "We strive for perfection in every pixel and line of code, ensuring world-class quality." }
    ]

    return (
        <PageTransition>
            <div className="bg-background min-h-screen overflow-hidden">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Floating Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
                    </div>

                    <div className="section-container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block border border-primary-500/30 bg-primary-500/5 px-6 py-2 rounded-full mb-8 backdrop-blur-sm"
                        >
                            <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Who We Are</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="h1 mb-8"
                        >
                            We Are <span className="gradient-text">TECOBIT</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            Nepal&apos;s premier digital growth powerhouse. We architect high-performance brands that dominate their market through creative artistry and deep data science.
                        </motion.p>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
                    <div className="section-container !py-0">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary-500">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Story Grid */}
                <section className="py-20 md:py-32 relative">
                    <div className="section-container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl group border border-white/10"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team collaboration"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-10">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center space-x-2 text-primary-500 font-bold uppercase tracking-widest mb-2 text-sm">
                                            <Globe size={16} />
                                            <span>Our Origin</span>
                                        </div>
                                        <h3 className="text-3xl text-white font-bold">Founded in 2013</h3>
                                        <p className="text-gray-300 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                                            Starting from a small garage in Kathmandu, we've grown into a global team delivering excellence across borders.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
                                    Redefining Digital <br /><span className="gradient-text">Excellence</span>
                                </h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    What started as a small team of passionate developers has grown into a full-service digital powerhouse. We saw a gap in the market: businesses needed more than just a website—they needed a comprehensive digital strategy.
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Today, TECOBIT stands at the forefront of digital innovation, helping over 500+ businesses transform their online presence. Our philosophy is simple: <strong className="text-white">Data drives decisions, design drives desire.</strong>
                                </p>

                                <div className="pt-8">
                                    <RippleButton
                                        variant="outline"
                                        className="border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-all"
                                    >
                                        Meet The Team
                                    </RippleButton>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 md:py-32 bg-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-[0.03]">
                        <Target size={600} />
                    </div>
                    <div className="section-container relative z-10">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="h-[1px] w-12 bg-primary-500"></span>
                                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary-500">Our Principles</span>
                                <span className="h-[1px] w-12 bg-primary-500"></span>
                            </div>
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter leading-none">
                                The <span className="text-white">Core DNA</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="card-premium group hover:-translate-y-2 h-full"
                                >
                                    <div className="mb-6 w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-500 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{value.title}</h3>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 md:py-32 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-900/10 pointer-events-none"></div>
                    <div className="section-container relative z-10">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-12 leading-[0.85]">
                            Ready to Build <br /> <span className="gradient-text">The Future?</span>
                        </h2>
                        <RippleButton
                            variant="primary"
                            size="lg"
                            className="px-12 py-6 rounded-full text-lg font-bold shadow-lg shadow-primary-500/20 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white transition-all hover:scale-105"
                            onClick={() => window.location.href = '/contact'}
                        >
                            <span className="flex items-center gap-3">
                                Start Your Project <ArrowRight size={20} />
                            </span>
                        </RippleButton>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
}
