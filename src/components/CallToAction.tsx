'use client'

import { motion } from 'framer-motion'

export default function CallToAction() {
    const benefits = [
        'Free Initial Consultation',
        'Custom Strategy Blueprint',
        'ROI-Focused Approach',
        'Transparent Reporting',
    ]

    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            <div className="section-container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="h2 mb-6">
                        SCALE YOUR <span className="gradient-text">DIGITAL IMPACT</span>
                    </h2>
                    <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        Ready to transform your business? Let's create a custom strategy that drives real results.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="card-premium !p-8 md:!p-12 border-primary/10">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            {/* Left Side - Copy */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                                        REDEFINING YOUR <br /><span className="text-primary">DIGITAL PRESENCE.</span>
                                    </h3>
                                    <p className="text-[14px] text-muted-foreground leading-relaxed max-w-sm">
                                        Join hundreds of forward-thinking businesses that have architectural dominance in their markets.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-[12px] font-medium text-muted-foreground">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-border/50 flex items-center space-x-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted"></div>
                                        ))}
                                    </div>
                                    <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold">
                                        Avg response: <span className="text-primary">90 mins</span>
                                    </p>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="space-y-4 bg-muted/30 p-6 md:p-8 rounded-2xl border border-border">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="h-10 bg-background border border-border rounded-lg px-4 text-[13px] focus:border-primary focus:ring-0 transition-all placeholder:text-muted-foreground text-foreground"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="h-10 bg-background border border-border rounded-lg px-4 text-[13px] focus:border-primary focus:ring-0 transition-all placeholder:text-muted-foreground text-foreground"
                                    />
                                </div>

                                <input
                                    type="email"
                                    placeholder="Business Email"
                                    className="w-full h-10 bg-background border border-border rounded-lg px-4 text-[13px] focus:border-primary focus:ring-0 transition-all placeholder:text-muted-foreground text-foreground"
                                />

                                <select className="w-full h-10 bg-background border border-border rounded-lg px-4 text-[13px] focus:border-primary focus:ring-0 transition-all text-muted-foreground appearance-none">
                                    <option value="">Select Interest</option>
                                    <option value="seo">SEO</option>
                                    <option value="social">SMM</option>
                                    <option value="web">Web</option>
                                </select>

                                <textarea
                                    placeholder="Brief project details..."
                                    rows={3}
                                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-[13px] focus:border-primary focus:ring-0 transition-all placeholder:text-muted-foreground text-foreground resize-none"
                                />

                                <button className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-[13px] rounded-lg transition-all duration-200 shadow-lg shadow-primary/10 active:scale-[0.98]">
                                    SECURE YOUR STRATEGY
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { icon: '🏆', text: 'Industry Leader' },
                        { icon: '🔒', text: 'Data Secure' },
                        { icon: '⚡', text: 'Fast Results' },
                        { icon: '💯', text: 'Satisfaction Guarantee' },
                    ].map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl mb-2">{item.icon}</div>
                            <div className="text-xs text-muted-foreground">{item.text}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
