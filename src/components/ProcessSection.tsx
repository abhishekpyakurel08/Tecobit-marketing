"use client";

import { motion } from "framer-motion";
import { Search, UserCheck, Layers, PenTool, BarChart3, Target } from "lucide-react";

const processes = [
    {
        title: "Social Media Audit",
        description: "We begin our service with a social media marketing audit of where you are, where your competition is.",
        icon: Search,
        color: "bg-blue-500"
    },
    {
        title: "Competitor Research",
        description: "Following the audit, we discover more about your target audience, identify and research your closest competitors.",
        icon: UserCheck,
        color: "bg-green-500"
    },
    {
        title: "Strategy Development",
        description: "Under social media channels to target your fans post-audit we align with your objectives.",
        icon: Target,
        color: "bg-emerald-500"
    },
    {
        title: "Content Development",
        description: "Graphic design and video production to maintain consistent branding across all platforms.",
        icon: PenTool,
        color: "bg-orange-500"
    },
    {
        title: "Social Advertising",
        description: "We customize ad campaigns with your unique strategy to make valuable posts even more valuable.",
        icon: Layers,
        color: "bg-cyan-500"
    },
    {
        title: "Reporting",
        description: "Monthly reports on our progress, monitoring your channels and audience engagement.",
        icon: BarChart3,
        color: "bg-yellow-500"
    }
];

export function ProcessSection() {
    return (
        <section className="py-24 bg-background transition-colors duration-300 text-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-tecobit-mint/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-tecobit-deep-teal/10 blur-[120px] rounded-full"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
                        Our Social Media <span className="text-tecobit-mint">Marketing Process</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-tecobit-mint mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {processes.map((proc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center space-y-6 group"
                        >
                            <div className={`w-28 h-28 ${proc.color} rounded-full mx-auto flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300 relative`}>
                                <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-inherit"></div>
                                <proc.icon size={48} className="text-white relative z-10" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-bold">{proc.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                                    {proc.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
