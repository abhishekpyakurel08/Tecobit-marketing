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
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight">
                        Common <span className="text-tecobit-deep-teal dark:text-tecobit-mint">Questions</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-tecobit-mint mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-border rounded-2xl overflow-hidden shadow-sm bg-background dark:bg-white/5">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/5 transition-colors"
                            >
                                <span className="text-xl font-bold text-foreground">{faq.question}</span>
                                <ChevronDown
                                    className={`text-tecobit-mint transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    size={24}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
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
