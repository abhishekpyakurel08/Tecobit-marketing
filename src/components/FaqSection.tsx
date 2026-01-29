"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is Social Media Marketing Service?",
        answer: "Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic."
    },
    {
        question: "How long does it take to see results?",
        answer: "While some results like engagement can be seen almost immediately, significant growth in followers and conversions typically takes 3-6 months of consistent effort."
    },
    {
        question: "Which platforms should my business be on?",
        answer: "This depends on your target audience. We research where your potential customers spend their time—whether it's Facebook, Instagram, LinkedIn, or TikTok."
    },
    {
        question: "Do you provide custom packages?",
        answer: "Yes, we tailor our social media marketing packages to fit the specific needs and goals of your business, ensuring you get the best ROI."
    }
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-background transition-colors duration-300">
            <div className="section-container relative z-10 max-w-4xl">
                <div className="text-center mb-16 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase border border-primary/30 px-3 py-1 rounded-full bg-primary/5">
                            SUPPORT
                        </span>
                    </motion.div>
                    <h2 className="h2 mb-4">
                        Critical <span className="gradient-text">Intels</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
                        Common questions answered by our architecture team
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="card-premium !p-0 overflow-hidden border-border hover:border-primary/30 transition-colors">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-all group"
                            >
                                <span className={`text-[15px] md:text-[16px] font-bold transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`text-primary transition-transform duration-500 ${openIndex === index ? 'rotate-180 scale-110' : 'group-hover:translate-y-1'}`}
                                    size={20}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-[13px] md:text-[14px] text-muted-foreground leading-relaxed max-w-3xl">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
