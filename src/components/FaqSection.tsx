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
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 uppercase tracking-tighter leading-[0.85]">
                        Critical <span className="text-tecobit-mint">Intels</span>
                    </h2>
                    <div className="w-32 h-2 bg-tecobit-mint mx-auto rounded-full"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-border rounded-2xl overflow-hidden shadow-sm bg-background dark:bg-white/5">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-8 text-left flex items-center justify-between hover:bg-muted/5 transition-all group"
                            >
                                <span className="text-2xl font-black uppercase tracking-tighter text-foreground group-hover:text-tecobit-mint transition-colors">{faq.question}</span>
                                <ChevronDown
                                    className={`text-tecobit-mint transition-transform duration-500 ${openIndex === index ? 'rotate-180 scale-125' : 'group-hover:translate-y-1'}`}
                                    size={32}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                    >
                                        <div className="p-8 pt-0 text-xl text-muted-foreground leading-relaxed font-medium">
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
