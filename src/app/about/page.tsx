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
                <section className="relative pt-24 pb-12 px-6">
                    <div className="container mx-auto text-center z-10 relative">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]"
                        >
                            We Are <span className="text-tecobit-mint italic">Tecobit</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
                        >
                            Nepal&apos;s premier digital growth powerhouse. We architect high-performance brands that dominate their market through creative artistry and deep data science.
                        </motion.p>
                    </div>
                </section>

                {/* Our Story Grid */}
                <section className="py-12 md:py-20 px-6">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
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
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85]">Redefining Digital Marketing in Kathmandu</h2>
                            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium">
                                What started as a small team of passionate developers has grown into a full-service digital powerhouse. We saw a gap in the market: businesses needed more than just a website—they needed a comprehensive digital strategy.
                            </p>
                            <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium">
                                Today, Tecobit stands at the forefront of digital innovation, helping over 500+ businesses transform their online presence. Our philosophy is simple: <strong className="text-tecobit-mint">Data drives decisions, design drives desire.</strong>
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div className="p-8 bg-muted/20 rounded-3xl border border-border">
                                    <h4 className="text-5xl md:text-7xl font-black text-tecobit-mint mb-2 leading-none">500+</h4>
                                    <p className="font-extrabold text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">Projects Delivered</p>
                                </div>
                                <div className="p-8 bg-muted/20 rounded-3xl border border-border">
                                    <h4 className="text-5xl md:text-7xl font-black text-tecobit-mint mb-2 leading-none">98%</h4>
                                    <p className="font-extrabold text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">Client Retention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-16 md:py-24 bg-muted/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-5">
                        <Target size={400} />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-20 text-center leading-none">
                            The <span className="text-tecobit-mint">Core DNA</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Innovation", icon: <Zap size={40} />, desc: "We don't follow trends; we set them. We constantly explore new technologies to keep our clients ahead." },
                                { title: "Transparency", icon: <Search size={40} />, desc: "No hidden fees, no jargon. Just clear results and open communication every step of the way." },
                                { title: "Collaboration", icon: <Users size={40} />, desc: "We view ourselves as an extension of your team, working together to achieve your business goals." }
                            ].map((value, idx) => (
                                <div key={idx} className="bg-background/40 backdrop-blur-md border border-border p-12 rounded-[2.5rem] hover:border-tecobit-mint transition-all hover:scale-[1.02] group">
                                    <div className="mb-8 text-tecobit-mint group-hover:scale-125 transition-transform origin-left">{value.icon}</div>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{value.title}</h3>
                                    <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 md:py-28 px-6 text-center">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">
                        Ready to Build <br /> <span className="text-tecobit-mint">The Future?</span>
                    </h2>
                    <RippleButton
                        variant="primary"
                        size="lg"
                        className="px-16 py-8 rounded-full text-xl font-black shadow-[0_0_60px_rgba(61,255,197,0.3)] transition-all hover:scale-110"
                        onClick={() => window.location.href = '/contact'}
                    >
                        Start Your Project <ArrowRight className="ml-4" size={24} />
                    </RippleButton>
                </section>
            </div>
        </PageTransition>
    );
}
