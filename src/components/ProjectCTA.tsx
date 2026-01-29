"use client";

import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { RippleButton } from "./RippleButton";

export function ProjectCTA() {
    return (
        <section className="bg-background transition-colors duration-300 text-foreground py-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-tecobit-mint to-transparent opacity-50"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tighter mb-4 uppercase leading-none">
                        Scale Your <span className="text-tecobit-mint">Digital impact</span>
                    </h2>
                    <div className="w-24 h-1 bg-tecobit-mint mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Left Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl md:text-4xl font-bold italic text-tecobit-mint leading-tight">Ready to lead the market?</h3>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                                We specialize in high-growth digital infrastructure. From premium branding to performance SEO, we build the engines that drive your business forward.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-4 bg-white/5 rounded-full text-tecobit-mint">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-base text-muted-foreground uppercase tracking-widest font-bold">Email Us</p>
                                    <p className="text-xl font-bold">info@tecobit.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-4 bg-white/5 rounded-full text-tecobit-mint">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-base text-muted-foreground uppercase tracking-widest font-bold">Call Us</p>
                                    <p className="text-xl font-bold">+977 9863992047</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="p-4 bg-white/5 rounded-full text-tecobit-mint">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-base text-muted-foreground uppercase tracking-widest font-bold">Visit Us</p>
                                    <p className="text-xl font-bold">Kathmandu, Nepal</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="lg:col-span-7">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Business Name"
                                className="w-full bg-muted/20 border border-border focus:border-tecobit-mint/50 rounded-xl p-5 text-foreground placeholder-gray-500 outline-none transition-all hover:bg-muted/30"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-muted/20 border border-border focus:border-tecobit-mint/50 rounded-xl p-5 text-foreground placeholder-gray-500 outline-none transition-all hover:bg-muted/30"
                            />
                            <input
                                type="tel"
                                placeholder="Your Phone Number"
                                className="w-full bg-muted/20 border border-border focus:border-tecobit-mint/50 rounded-xl p-5 text-foreground placeholder-gray-500 outline-none transition-all hover:bg-muted/30"
                            />

                            <div className="relative">
                                <select className="w-full bg-muted/20 border border-border focus:border-tecobit-mint/50 rounded-xl p-5 text-foreground outline-none appearance-none cursor-pointer hover:bg-muted/30">
                                    <option className="bg-background">Service You Need</option>
                                    <option className="bg-background">SEO</option>
                                    <option className="bg-background">Social Media</option>
                                    <option className="bg-background">Web Development</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-tecobit-mint">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                                </div>
                            </div>

                            {/* Fake Captcha White */}
                            <div className="bg-muted/10 border border-border rounded-xl p-3 w-fit flex items-center space-x-4 md:col-span-2">
                                <input type="checkbox" className="w-5 h-5 rounded border-border bg-transparent text-tecobit-mint focus:ring-tecobit-mint" />
                                <span className="text-sm font-medium">I&apos;m not a robot</span>
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Recaptcha_Logo.svg/1200px-Recaptcha_Logo.svg.png"
                                    alt="captcha"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 opacity-50 ml-2"
                                />
                            </div>

                            <RippleButton
                                type="button"
                                size="lg"
                                className="md:col-span-2 w-full bg-tecobit-mint text-black font-bold py-6 rounded-2xl shadow-[0_0_40px_rgba(61,255,197,0.3)] uppercase tracking-[0.4em] transition-all hover:scale-[1.02] border-none"
                            >
                                Launch Your Project
                            </RippleButton>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
