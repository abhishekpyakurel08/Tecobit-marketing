"use client";

import { PageTransition } from "@/components/PageTransition";
import { PortfolioLogos } from "@/components/PortfolioLogos";
import { ProjectCTA } from "@/components/ProjectCTA";
import Image from "next/image";

export default function PortfolioPage() {
    return (
        <PageTransition>
            <div className="bg-background min-h-screen pt-20">
                <div className="container mx-auto px-6 text-center mb-20">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tighter mb-8 leading-[0.85]">
                        Our <span className="text-tecobit-mint italic">Work</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
                        Discover how we&apos;ve engineered market dominance for brands through precision-scaled digital infrastructure.
                    </p>
                </div>

                <div className="container mx-auto px-6 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="relative aspect-video bg-muted/10 rounded-3xl overflow-hidden group cursor-pointer border border-border">
                                <Image
                                    src={`https://images.unsplash.com/photo-${item === 1 ? '1460925895917-afdab827c52f' : item === 2 ? '1557838923-2985c318be48' : item === 3 ? '1551434678-e076c223a692' : '1552664730-d307ca884978'}?q=80&w=2000&auto=format&fit=crop`}
                                    alt="Portfolio Item"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-50"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">Project <span className="text-tecobit-mint">{item}</span></h3>
                                    <p className="text-tecobit-mint font-bold uppercase tracking-[0.3em] text-sm md:text-base translate-y-8 group-hover:translate-y-0 transition-transform duration-700 delay-100 italic">Advanced Scaling Architecture</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <PortfolioLogos />
                <ProjectCTA />
            </div>
        </PageTransition>
    );
}
