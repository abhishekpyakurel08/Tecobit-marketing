"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function LocationSection() {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-primary/5 blur-[120px] -translate-y-1/2 pointer-events-none"></div>

            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-4 space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-block mb-4"
                            >
                                <span className="text-[10px] font-bold tracking-widest text-primary uppercase border border-primary/30 px-3 py-1 rounded-full bg-primary/5">
                                    LOCATIONS
                                </span>
                            </motion.div>
                            <h2 className="h2 mb-6">
                                Visit Our <br /> <span className="gradient-text">Headquarters</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Come visit our state-of-the-art office in the heart of Kathmandu. We're always open for a cup of coffee and a chat about your next big project.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Office Address</h4>
                                    <p className="text-sm text-muted-foreground">Pragatinagar Marga, Sankhamul-31,<br />Kathmandu, Nepal</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Phone Number</h4>
                                    <p className="text-sm text-muted-foreground">+977 974-5697694</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground mb-1">Working Hours</h4>
                                    <p className="text-sm text-muted-foreground">Sun - Fri: 10:00 AM - 6:00 PM<br />Sat: Closed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-8"
                    >
                        <div className="card-premium p-2 relative group overflow-hidden h-[500px]">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

                            <iframe
                                src="https://maps.google.com/maps?q=Tecobit%20Technology%20Pvt.%20Ltd.%20Kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: '12px', filter: 'grayscale(100%) invert(0%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>

                            <div className="absolute bottom-6 left-6 z-20">
                                <a
                                    href="https://maps.google.com/maps?q=Tecobit%20Technology%20Pvt.%20Ltd.%20Kathmandu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-premium px-6 py-3 text-xs flex items-center gap-2"
                                >
                                    <MapPin size={16} />
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
