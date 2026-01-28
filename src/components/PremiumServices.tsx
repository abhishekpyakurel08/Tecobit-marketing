"use client";

import React from "react";
import { ServiceCard } from "./PremiumCards";
import {
    Search,
    Share2,
    Monitor,
    PenTool,
    BarChart3,
    Target
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "SEO Optimization",
        description: "Dominate search results with our advanced keyword strategies and technical SEO audits. We ensure your business ranks where it matters most.",
        icon: <Search size={32} />
    },
    {
        title: "Social Mastery",
        description: "Transform your social presence with thumb-stopping content and community-building strategies that turn followers into brand advocates.",
        icon: <Share2 size={32} />
    },
    {
        title: "Web Architecture",
        description: "High-performance, conversion-optimized websites built with the latest technologies like Next.js and Payload CMS.",
        icon: <Monitor size={32} />
    },
    {
        title: "Content Lab",
        description: "AI-enhanced content creation that maintains your brand's unique voice while scaling production and engagement.",
        icon: <PenTool size={32} />
    },
    {
        title: "Growth Analytics",
        description: "Data-driven insights that help you understand user behavior and optimize your marketing spend for maximum ROI.",
        icon: <BarChart3 size={32} />
    },
    {
        title: "Digital Strategy",
        description: "Tailored roadmaps that align your digital presence with your business goals, ensuring long-term sustainable growth.",
        icon: <Target size={32} />
    }
];

export function PremiumServices() {
    return (
        <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tecobit-mint/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-tecobit-deep-teal/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 text-tecobit-mint mb-4"
                    >
                        <div className="h-px w-12 bg-tecobit-mint" />
                        <span className="font-black tracking-[0.4em] text-xs uppercase">Our Expertise</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85]"
                    >
                        Elite <span className="text-tecobit-mint">Solutions</span> <br />
                        Built For <span className="text-tecobit-soft-mint transition-colors hover:text-tecobit-mint">Market Dominance</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
