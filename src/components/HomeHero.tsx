"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { RippleButton } from "./RippleButton";

interface HomeHeroProps {
    data?: {
        hero?: {
            titlePrefix?: string;
            title?: string;
            description?: string;
            backgroundImage?: { url?: string };
            buttons?: Array<{ label: string; link: string; style: string }>;
        }
    };
}

import { useState } from "react";
import { submitContact } from "@/actions/submitContact";
import { toast } from "react-toastify";

export function HomeHero({ data }: HomeHeroProps) {
    const hero = data?.hero;
    const { theme } = useTheme();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        const result = await submitContact(formData);
        setIsSubmitting(false);
        if (result.success) {
            setIsSuccess(true);
            toast.success("Message sent successfully!");
        } else {
            toast.error(result.message || "Something went wrong.");
        }
    }

    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-transparent transition-colors duration-500">
            {/* Gradient Overlay for Text Readability without hiding Stars */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-background/90 via-background/50 to-background/20"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left pt-10 lg:pt-0"
                    >
                        <div className="space-y-2 md:space-y-4">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="text-xl md:text-3xl font-medium tracking-wide text-tecobit-mint dark:text-tecobit-mint text-tecobit-deep-teal"
                            >
                                {hero?.titlePrefix || "Let us Turn Your"}
                            </motion.h2>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight drop-shadow-2xl text-foreground"
                            >
                                {hero?.title?.split(' ').slice(0, -2).join(' ') || "Business"}
                                <span className="block mt-2">
                                    {hero?.title?.split(' ').slice(-2).join(' ') || "Into Brand"}
                                </span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <RippleButton variant="secondary" className="py-4 md:py-5 px-8 md:px-10 rounded-full shadow-[0_0_20px_rgba(61,255,197,0.3)] hover:shadow-[0_0_30px_rgba(61,255,197,0.5)] transform hover:-translate-y-1 text-sm md:text-base">
                                SEE OUR PORTFOLIO
                            </RippleButton>
                            <RippleButton variant="outline" className="py-4 md:py-5 px-8 md:px-10 rounded-full backdrop-blur-sm text-sm md:text-base">
                                CONTACT US
                            </RippleButton>
                        </motion.div>
                    </motion.div>

                    {/* Right Consultation Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="lg:col-span-5 perspective-1000 w-full"
                    >
                        <div className="bg-background/60 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/10 relative overflow-hidden group">
                            <div className="flex justify-center mb-6 md:mb-8">
                                <div className="relative h-16 w-32 md:h-20 md:w-40 transition-all hover:scale-105">
                                    <Image
                                        src="/logo.png"
                                        alt="Tecobit"
                                        fill
                                        className="object-contain drop-shadow-xl"
                                    />
                                </div>
                            </div>
                            <h3 className="text-foreground text-2xl md:text-3xl font-black mb-8 text-center uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-foreground via-tecobit-mint to-foreground">
                                FREE DIGITAL CONSULTATION
                            </h3>

                            {isSuccess ? (
                                <div className="text-center py-10 space-y-4">
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-tecobit-mint/20 rounded-full flex items-center justify-center mx-auto text-tecobit-mint">
                                        <ChevronDown size={32} className="transform rotate-180" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">Thank You!</h3>
                                    <p className="text-muted-foreground text-sm">We have received your request and will contact you shortly.</p>
                                    <RippleButton variant="outline" onClick={() => setIsSuccess(false)}>
                                        Send Another
                                    </RippleButton>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 relative z-10">
                                    <input
                                        name="businessName"
                                        type="text"
                                        required
                                        placeholder="Your Business Name"
                                        className="w-full bg-muted/40 border border-white/10 rounded-xl p-4 md:p-5 text-foreground placeholder-muted-foreground/60 focus:ring-2 focus:ring-tecobit-mint outline-none transition-all hover:bg-muted/60"
                                    />
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="Your Email"
                                        className="w-full bg-muted/40 border border-white/10 rounded-xl p-4 md:p-5 text-foreground placeholder-muted-foreground/60 focus:ring-2 focus:ring-tecobit-mint outline-none transition-all hover:bg-muted/60"
                                    />
                                    <input
                                        name="phone"
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        className="w-full bg-muted/40 border border-white/10 rounded-xl p-4 md:p-5 text-foreground placeholder-muted-foreground/60 focus:ring-2 focus:ring-tecobit-mint outline-none transition-all hover:bg-muted/60"
                                    />

                                    <div className="relative">
                                        <select name="service" className="w-full bg-muted/40 border border-white/10 rounded-xl p-4 md:p-5 text-foreground outline-none appearance-none cursor-pointer hover:bg-muted/60">
                                            <option value="" className="bg-background">Service You Need</option>
                                            <option value="seo" className="bg-background">SEO Services</option>
                                            <option value="social-media" className="bg-background">Social Media Marketing</option>
                                            <option value="web-design" className="bg-background">Web Design & Development</option>
                                            <option value="branding" className="bg-background">Branding & Creative</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <ChevronDown className="text-tecobit-mint" size={24} />
                                        </div>
                                    </div>

                                    {/* Recaptcha Placeholder */}
                                    <div className="bg-muted/10 border border-border rounded-xl p-3 md:p-4 flex items-center justify-between shadow-inner">
                                        <div className="flex items-center space-x-3">
                                            <input type="checkbox" required className="w-5 h-5 md:w-6 md:h-6 rounded border-border bg-transparent text-tecobit-mint focus:ring-tecobit-mint" />
                                            <span className="text-xs md:text-sm font-medium text-muted-foreground">I&apos;m not a robot</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Recaptcha_Logo.svg/1200px-Recaptcha_Logo.svg.png"
                                                alt="reCAPTCHA"
                                                width={24}
                                                height={24}
                                                className="w-5 h-5 md:w-6 md:h-6 opacity-60"
                                            />
                                            <span className="text-[8px] text-gray-400">reCAPTCHA</span>
                                        </div>
                                    </div>

                                    <RippleButton
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-tecobit-deep-teal to-tecobit-green text-white font-black py-4 md:py-5 rounded-xl shadow-2xl uppercase tracking-[0.3em] transition-all hover:brightness-110 disabled:opacity-50 text-sm md:text-base"
                                    >
                                        {isSubmitting ? "SUBMITTING..." : "SUBMIT NOW"}
                                    </RippleButton>
                                </form>
                            )}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
            >
                <ChevronDown className="text-tecobit-mint opacity-80" size={40} />
            </motion.div>
        </section>
    );
}
