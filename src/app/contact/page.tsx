"use client";

import { PageTransition } from "@/components/PageTransition";
import CallToAction from "@/components/CallToAction";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const contactInfo = [
        {
            title: "Chat with us",
            info: "info@tecobit.com",
            icon: <Mail size={24} />,
            link: "mailto:info@tecobit.com"
        },
        {
            title: "Phone",
            info: "+977 9863992047",
            icon: <Phone size={24} />,
            link: "tel:+9779863992047"
        },
        {
            title: "Office",
            info: "Kathmandu, Nepal",
            icon: <MapPin size={24} />,
            link: "#"
        },
        {
            title: "Hours",
            info: "Sun-Fri: 9am - 6pm",
            icon: <Clock size={24} />,
            link: "#"
        }
    ];

    return (
        <PageTransition>
            <div className="bg-background min-h-screen overflow-hidden">
                {/* Hero */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Floating Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                        <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px]"></div>
                    </div>

                    <div className="section-container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block border border-primary-500/30 bg-primary-500/5 px-6 py-2 rounded-full mb-8 backdrop-blur-sm"
                        >
                            <span className="text-xs font-bold tracking-[0.2em] text-primary-500 uppercase">Contact Us</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="h1 mb-8"
                        >
                            Get In <span className="gradient-text">Touch</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed"
                        >
                            Whether you have a critical scaling question, pricing inquiry, or need a high-performance demo, our architectural team is ready to respond.
                        </motion.p>
                    </div>
                </section>

                {/* Contact Cards */}
                <section className="pb-20">
                    <div className="section-container !pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.link}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card-premium text-center group hover:border-primary-500/50 block"
                                >
                                    <div className="w-16 h-16 bg-primary-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 group-hover:-translate-y-2 shadow-lg shadow-primary-500/5">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-lg font-medium group-hover:text-primary-500 transition-colors">{item.info}</p>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </section>

                <CallToAction />
            </div>
        </PageTransition>
    );
}
