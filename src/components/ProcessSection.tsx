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
        <section className="py-16 md:py-24 bg-transparent transition-colors duration-300 text-foreground overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-tecobit-mint/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-tecobit-deep-teal/10 blur-[120px] rounded-full"></div>

            <div className="section-container relative z-10 w-full">
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase border border-primary/30 px-3 py-1 rounded-full bg-primary/5">
                            OUR PROCESS
                        </span>
                    </motion.div>
                    <h2 className="h2 mb-4">
                        The Growth <span className="gradient-text">Blueprint</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                        A systematic approach to scaling your brand presence
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {processes.map((proc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="card-premium group flex flex-col items-center text-center"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                <proc.icon size={28} />
                            </div>

                            <h3 className="text-lg font-bold mb-3 text-foreground">{proc.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {proc.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
