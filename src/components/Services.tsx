'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
    const services = [
        {
            title: 'ATTRACT YOUR AUDIENCE',
            description: 'Strategic content marketing and SEO optimization to bring qualified leads to your business. We create compelling narratives that resonate with your target audience.',
            icon: <Target size={24} />,
            color: 'bg-primary-500/10'
        },
        {
            title: 'ENGAGE YOUR CUSTOMERS',
            description: 'Build meaningful relationships through social media management, email campaigns, and interactive content that keeps your audience engaged and coming back.',
            icon: <Share2 size={24} />,
            color: 'bg-primary-500/20'
        },
        {
            title: 'GROW YOUR LEADS',
            description: 'Convert visitors into customers with conversion rate optimization, landing page design, and automated nurture campaigns that guide prospects through your funnel.',
            icon: <BarChart3 size={24} />,
            color: 'bg-primary-500/10'
        },
        {
            title: 'RE-TARGET YOUR CUSTOMERS',
            description: 'Stay top-of-mind with strategic retargeting campaigns, personalized recommendations, and loyalty programs that bring customers back repeatedly.',
            icon: <RefreshCcw size={24} />,
            color: 'bg-primary-500/20'
        },
    ]

    return (
        <section id="services" className="relative py-24 overflow-hidden">
            <div className="section-container relative z-10">
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase border border-primary/30 px-3 py-1 rounded-full bg-primary/5">
                            OUR APPROACH
                        </span>
                    </motion.div>
                    <h2 className="h2 mb-4 uppercase">
                        The Growth <span className="gradient-text">Engine</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-[15px]">
                        A systematic architecture designed to accelerate your growth at every digital stage
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card-premium group"
                        >
                            <div className="flex flex-col sm:flex-row gap-6 items-start">
                                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/5`}>
                                    {service.icon}
                                </div>
                                <div className="space-y-3 flex-1">
                                    <h3 className="text-lg font-bold text-foreground tracking-tight">{service.title}</h3>
                                    <p className="text-[13px] md:text-[14px] text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="pt-2">
                                        <button className="text-[11px] font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:gap-3 transition-all">
                                            Architecture Details <span>→</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { Target, Share2, BarChart3, RefreshCcw } from 'lucide-react'
