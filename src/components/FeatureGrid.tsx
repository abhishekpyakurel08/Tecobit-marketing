"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        title: "Attract Your Audience",
        description: "First impressions matter. We help you create a stunning visual presence that stops the scroll and captures attention instantly. Our data-driven approach ensures your brand reaches the right people at the right time.",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop",
        reverse: false
    },
    {
        title: "Engage Your Followers",
        description: "Building a community is about more than just likes. We foster meaningful conversations and create content that resonates deeply with your audience, turning passive followers into active brand advocates.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        reverse: true
    },
    {
        title: "Grow Your Leads",
        description: "Conversion is our middle name. We optimize every touchpoint of the user journey to ensure your social presence contributes directly to your bottom line through sophisticated lead generation tactics.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        reverse: false
    },
    {
        title: "Re-target Your Customers",
        description: "Don't let them forget you. We implement advanced retargeting strategies that keep your brand top-of-mind, bringing back interested prospects and maximizing the value of every visitor.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
        reverse: true
    }
];

export function FeatureGrid() {
    return (
        <section className="py-16 md:py-24 bg-transparent overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 space-y-20 md:space-y-32">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${feature.reverse ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 space-y-6"
                        >
                            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-foreground leading-[0.85] tracking-tighter uppercase">
                                {feature.title}
                            </h2>
                            <div className="w-24 h-2 bg-tecobit-mint rounded-full"></div>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                                {feature.description}
                            </p>
                            <button className="text-tecobit-mint font-bold text-lg flex items-center group tracking-[0.2em]">
                                DISCOVER MORE
                                <span className="ml-3 transform group-hover:translate-x-4 transition-transform text-2xl">→</span>
                            </button>
                        </motion.div>

                        {/* Image Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: feature.reverse ? -2 : 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative group"
                        >
                            <div className="absolute inset-0 bg-tecobit-mint rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform opacity-10"></div>
                            <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-2xl z-10">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
