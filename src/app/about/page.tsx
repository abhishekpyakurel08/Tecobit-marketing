"use client";

import { PageTransition } from "@/components/PageTransition";
import { RippleButton } from "@/components/RippleButton";
import { ArrowRight, Target, Users, Zap, Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <PageTransition>
            <div className="bg-transparent min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6">
                    <div className="container mx-auto text-center z-10 relative">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6"
                        >
                            We Are <span className="text-tecobit-mint">Tecobit</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        >
                            Nepal&apos;s premier digital growth agency. We blend creative artistry with data science to build brands that dominate their market.
                        </motion.p>
                    </div>
                </section>

                {/* Our Story Grid */}
                <section className="py-20 px-6">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team collaboration"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-10">
                                <div>
                                    <p className="text-tecobit-mint font-bold uppercase tracking-widest mb-2">Our Origin</p>
                                    <h3 className="text-3xl text-white font-black">Founded in 2013</h3>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black uppercase tracking-tight">Redefining Digital Marketing in Kathmandu</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                What started as a small team of passionate developers has grown into a full-service digital powerhouse. We saw a gap in the market: businesses needed more than just a website—they needed a comprehensive digital strategy.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Today, Tecobit stands at the forefront of digital innovation, helping over 500+ businesses transform their online presence. Our philosophy is simple: <strong>Data drives decisions, design drives desire.</strong>
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="p-6 bg-muted/20 rounded-2xl border border-border">
                                    <h4 className="text-4xl font-black text-tecobit-mint mb-2">500+</h4>
                                    <p className="font-bold text-xs uppercase tracking-widest">Projects Delivered</p>
                                </div>
                                <div className="p-6 bg-muted/20 rounded-2xl border border-border">
                                    <h4 className="text-4xl font-black text-tecobit-mint mb-2">98%</h4>
                                    <p className="font-bold text-xs uppercase tracking-widest">Client Retention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-24 bg-muted/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-5">
                        <Target size={400} />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <h2 className="text-4xl font-black uppercase tracking-tight mb-16 text-center">Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Innovation", icon: <Zap size={40} />, desc: "We don't follow trends; we set them. We constantly explore new technologies to keep our clients ahead." },
                                { title: "Transparency", icon: <Search size={40} />, desc: "No hidden fees, no jargon. Just clear results and open communication every step of the way." },
                                { title: "Collaboration", icon: <Users size={40} />, desc: "We view ourselves as an extension of your team, working together to achieve your business goals." }
                            ].map((value, idx) => (
                                <div key={idx} className="bg-background/40 backdrop-blur-md border border-border p-10 rounded-3xl hover:border-tecobit-mint transition-colors group">
                                    <div className="mb-6 text-tecobit-mint group-hover:scale-110 transition-transform origin-left">{value.icon}</div>
                                    <h3 className="text-2xl font-black uppercase mb-4">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                        Ready to Build the <br /> Future?
                    </h2>
                    <RippleButton
                        variant="primary"
                        className="px-12 py-6 rounded-full text-lg shadow-[0_0_40px_rgba(61,255,197,0.3)]"
                        onClick={() => window.location.href = '/contact'}
                    >
                        Start Your Project <ArrowRight className="ml-3" />
                    </RippleButton>
                </section>
            </div>
        </PageTransition>
    );
}
