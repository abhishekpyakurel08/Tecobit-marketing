"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { RippleButton } from "./RippleButton";
import { useState } from "react";
import { submitContact } from "@/actions/submitContact";
import { toast } from "react-toastify";

interface HomeHeroProps {
    data?: {
        hero?: {
            titlePrefix?: string;
            title?: string;
        };
    };
}

export function HomeHero({ data }: HomeHeroProps) {
    const hero = data?.hero;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        const result = await submitContact(new FormData(e.currentTarget));
        setIsSubmitting(false);

        result.success
            ? (setIsSuccess(true), toast.success("Message sent successfully"))
            : toast.error(result.message || "Something went wrong");
    }

    return (
        <section className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/30" />

            <div className="container mx-auto max-w-[1320px] px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 text-center lg:text-left space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-tecobit-mint/10 border border-tecobit-mint/20 mx-auto lg:mx-0 shadow-lg shadow-tecobit-mint/5">
                            <span className="text-base">🚀</span>
                            <span className="text-sm font-black tracking-[0.25em] uppercase text-tecobit-mint">
                                {hero?.titlePrefix || "Full-Service Digital Agency"}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="font-black italic tracking-tighter leading-[0.9]
              text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem]">
                            {hero?.title?.split(" ").slice(0, -2).join(" ") || "Scaling"}
                            <span className="block text-tecobit-mint">
                                {hero?.title?.split(" ").slice(-2).join(" ") || "Your Vision"}
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                            We architect high-performance digital experiences that convert.
                            Clean code, bold design, and data-driven growth strategies.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                            <RippleButton size="lg" className="px-10 py-5 font-black uppercase tracking-wider rounded-full bg-tecobit-mint text-tecobit-deep-teal shadow-2xl shadow-tecobit-mint/30">
                                Explore Services →
                            </RippleButton>

                            <RippleButton
                                size="lg"
                                variant="outline"
                                className="px-10 py-5 font-black uppercase tracking-wider rounded-full border-white/20 hover:bg-white/5"
                            >
                                Book Consultation
                            </RippleButton>
                        </div>

                        {/* Services */}
                        <div className="pt-8 flex flex-wrap gap-x-8 gap-y-4 text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/60 justify-center lg:justify-start">
                            {["Strategy", "UI/UX Architecture", "SEO Elite", "Growth Marketing"].map((tag) => (
                                <span key={tag} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-tecobit-mint rounded-full" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT FORM */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 max-w-md mx-auto w-full"
                    >
                        <div className="bg-white/90 dark:bg-background/85 backdrop-blur-xl
              rounded-2xl p-5 md:p-6 border border-gray-200 dark:border-white/10 shadow-xl">

                            {/* Logo */}
                            <div className="flex justify-center mb-4">
                                <div className="relative w-28 h-14">
                                    <Image src="/logo.png" alt="Tecobit" fill className="object-contain" />
                                </div>
                            </div>

                            <h3 className="text-center text-lg font-black uppercase tracking-[0.3em] mb-8 text-tecobit-mint">
                                Free Consultation
                            </h3>

                            {isSuccess ? (
                                <div className="text-center py-8 space-y-3">
                                    <p className="text-sm font-semibold">Thank you!</p>
                                    <RippleButton size="sm" onClick={() => setIsSuccess(false)}>
                                        Send Another
                                    </RippleButton>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <div className="space-y-4">
                                        <input
                                            name="businessName"
                                            required
                                            placeholder="Your Business Name"
                                            className="w-full p-4 rounded-xl text-base bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-tecobit-mint outline-none transition-all"
                                        />
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="Direct Email Address"
                                            className="w-full p-4 rounded-xl text-base bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-tecobit-mint outline-none transition-all"
                                        />
                                        <input
                                            name="phone"
                                            placeholder="WhatsApp or Phone Number"
                                            className="w-full p-4 rounded-xl text-base bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-tecobit-mint outline-none transition-all"
                                        />
                                    </div>

                                    <RippleButton
                                        type="submit"
                                        disabled={isSubmitting}
                                        size="lg"
                                        className="w-full py-5 font-black uppercase tracking-[0.2em] rounded-xl
                                            bg-gradient-to-r from-tecobit-deep-teal to-tecobit-green text-white shadow-xl shadow-tecobit-green/20 mt-6"
                                    >
                                        {isSubmitting ? "Processing..." : "Secure Consultation"}
                                    </RippleButton>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ChevronDown size={28} className="text-tecobit-mint opacity-70" />
            </motion.div>
        </section>
    );
}
