"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export function ContactForm() {
    return (
        <section className="py-24 bg-background transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold uppercase tracking-tighter">Send us a message</h2>
                            <p className="text-muted-foreground">We usually respond within 2-4 hours during business hours.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-muted/20 border border-border p-5 rounded-2xl focus:border-tecobit-mint outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                                    <input type="email" placeholder="john@company.com" className="w-full bg-muted/20 border border-border p-5 rounded-2xl focus:border-tecobit-mint outline-none transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Service</label>
                                <select className="w-full bg-muted/20 border border-border p-5 rounded-2xl focus:border-tecobit-mint outline-none transition-all appearance-none cursor-pointer">
                                    <option>Social Media Marketing</option>
                                    <option>SEO Strategy</option>
                                    <option>Web Development</option>
                                    <option>Creative Design</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                                <textarea rows={5} placeholder="Tell us about your project goals..." className="w-full bg-muted/20 border border-border p-5 rounded-2xl focus:border-tecobit-mint outline-none transition-all resize-none"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full py-5 bg-foreground text-background font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-tecobit-mint hover:text-black transition-all shadow-xl"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:pl-10 space-y-12"
                    >
                        <div className="glass p-10 rounded-3xl space-y-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-5">
                                <MessageSquare size={200} />
                            </div>

                            <div className="space-y-4 relative z-10">
                                <h3 className="text-2xl font-bold uppercase">Contact Information</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Prefer to talk? Reach out to us directly through any of the channels below.
                                </p>
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start space-x-6">
                                    <div className="p-4 bg-tecobit-mint text-black rounded-2xl">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Us</p>
                                        <a href="mailto:info@tecobit.com" className="text-xl font-bold hover:text-tecobit-mint transition-colors">info@tecobit.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="p-4 bg-tecobit-mint text-black rounded-2xl">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Call Us</p>
                                        <a href="tel:+9779863992047" className="text-xl font-bold hover:text-tecobit-mint transition-colors">+977-9863992047</a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-6">
                                    <div className="p-4 bg-tecobit-mint text-black rounded-2xl">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Find Us</p>
                                        <p className="text-xl font-bold">Kathmandu, Nepal</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-10 border-t border-border/50 relative z-10">
                                <p className="text-sm font-bold text-muted-foreground mb-4 italic">&quot;Your growth is our only metric of success.&quot;</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
