"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { RippleButton } from "./RippleButton";
import { HeaderData } from "@/types/globals";
import {
    Briefcase,
    Search,
    Users,
    Home,
    Mail,
    Info,
    Phone,
    Globe,
    Menu,
    X,
    Bell
} from "lucide-react";

interface NavbarProps {
    data?: HeaderData;
}

const iconMap: Record<string, any> = {
    Home: Home,
    Briefcase: Briefcase,
    Search: Search,
    Users: Users,
    Mail: Mail,
    Info: Info,
    Globe: Globe
};

export function Navbar({ data }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = data?.navItems || [];
    const logoUrl = typeof data?.logo === 'object' && data.logo !== null ? (data.logo as any).url : '/logo.png';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10 dark:border-white/5 supports-[backdrop-filter]:bg-background/60"
                : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-xl overflow-hidden shadow-lg transition-all group-hover:scale-105 group-hover:shadow-tecobit-mint/20 border border-white/10 bg-white/50 flex items-center justify-center">
                        <Image
                            src={logoUrl}
                            alt="Tecobit Logo"
                            fill
                            className="object-contain p-1"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl md:text-4xl font-black tracking-tighter text-foreground leading-[0.75] mb-1.5 transition-all group-hover:text-tecobit-mint">TECOBIT</span>
                        <span className="text-[11px] md:text-[13px] font-black tracking-[0.5em] text-tecobit-mint/80 uppercase">Marketing</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item, index) => {
                        const Icon = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Briefcase;
                        return (
                            <Link
                                key={index}
                                href={item.link || "#"}
                                className="text-foreground/80 hover:text-tecobit-mint font-black text-sm md:text-base uppercase tracking-[0.2em] transition-all hover:tracking-[0.3em] relative group/link"
                            >
                                <span>{item.label}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tecobit-mint transition-all group-hover/link:w-full"></span>
                            </Link>
                        );
                    })}

                    <div className="flex items-center space-x-6 pl-4 border-l border-border">
                        <ThemeToggle />

                        <RippleButton
                            variant="primary"
                            className="px-8 py-3.5 rounded-full shadow-lg shadow-tecobit-mint/10"
                            onClick={() => window.location.href = `tel:${data?.phoneNumber || '+9779863992047'}`}
                        >
                            <div className="flex items-center space-x-3">
                                <Phone size={18} fill="black" />
                                <span className="text-base font-black tracking-widest">{data?.phoneNumber || '+977-9863992047'}</span>
                            </div>
                        </RippleButton>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                        className="p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-background border-t border-border overflow-hidden shadow-2xl"
                    >
                        <div className="p-6 space-y-4">
                            {navItems.map((item, index) => {
                                const Icon = item.icon && iconMap[item.icon] ? iconMap[item.icon] : Briefcase;
                                return (
                                    <Link
                                        key={index}
                                        href={item.link || "#"}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center space-x-6 p-5 rounded-2xl hover:bg-tecobit-mint/10 transition-all text-2xl font-black uppercase tracking-tighter group"
                                    >
                                        <span className="text-tecobit-mint group-hover:scale-125 transition-transform"><Icon size={28} /></span>
                                        <span className="group-hover:translate-x-2 transition-transform">{item.label}</span>
                                    </Link>
                                );
                            })}
                            <div className="pt-6 border-t border-border">
                                <RippleButton
                                    variant="primary"
                                    size="lg"
                                    className="w-full flex items-center justify-center space-x-4 py-6 rounded-2xl shadow-xl shadow-tecobit-mint/20"
                                    onClick={() => window.location.href = "tel:+9779863992047"}
                                >
                                    <Phone size={24} fill="black" />
                                    <span className="font-black tracking-widest">CALL US NOW</span>
                                </RippleButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
