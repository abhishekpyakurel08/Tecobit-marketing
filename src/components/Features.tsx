'use client'

import { motion } from 'framer-motion'

export default function Features() {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Social Media Audit',
            description: 'Comprehensive analysis of your social presence with actionable insights and competitive benchmarking.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Community Integration',
            description: 'Build and nurture engaged communities across all your digital platforms and touchpoints.'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Strategic Planning',
            description: 'Data-driven marketing strategies tailored to your business goals and target audience.'
        },
    ]

    const metrics = [
        { value: '5x', label: 'Faster Growth' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '24/7', label: 'Support' },
        { value: '150+', label: 'Industry Awards' },
    ]

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

            <div className="section-container relative z-10">
                {/* The Growth Blueprint */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="h2 mb-4">
                        THE GROWTH <span className="gradient-text">BLUEPRINT</span>
                    </h2>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="card-premium text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-foreground">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Market Influence */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="h2 mb-4">
                        MARKET <span className="gradient-text">INFLUENCE</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="stat-card text-center"
                            >
                                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                                    {metric.value}
                                </div>
                                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                                    {metric.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Critical Intels */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="h2 mb-8">
                        CRITICAL <span className="gradient-text">INTELS</span>
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                question: "WHAT'S SOCIAL MEDIA MARKETING SERVICE?",
                                answer: "Strategic planning, content creation, community management, and analytics to build your brand presence across all major social platforms."
                            },
                            {
                                question: "WHAT IS A TARGET AUDIENCE?",
                                answer: "Your ideal customers defined by demographics, behaviors, interests, and pain points—the people most likely to benefit from your products or services."
                            },
                            {
                                question: "HOW LONG DOES IT TAKE TO SEE RESULTS?",
                                answer: "Most clients see initial improvements within 30-60 days, with significant growth typically occurring within 3-6 months of consistent strategy execution."
                            },
                            {
                                question: "WHY WAIT BEFORE IMPROVING YOUR COMPANY'S IMAGE?",
                                answer: "Every day without a strong digital presence is a missed opportunity. Your competitors are already investing in their brand—start building yours today."
                            },
                            {
                                question: "DO I NEED BRANDING OR JUST MARKETING?",
                                answer: "Both work together. Branding defines who you are, while marketing communicates that identity to your audience. We integrate both for maximum impact."
                            },
                        ].map((item, index) => (
                            <motion.details
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card-premium text-left group cursor-pointer"
                            >
                                <summary className="font-bold text-sm list-none flex justify-between items-center text-foreground">
                                    <span>{item.question}</span>
                                    <svg
                                        className="w-5 h-5 text-primary transform group-open:rotate-180 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </p>
                            </motion.details>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
