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
                <Link href="/" className="flex items-center space-x-4 group">
                    <div className="relative h-14 w-14 rounded-xl overflow-hidden shadow-2xl transition-all group-hover:scale-110 group-hover:shadow-tecobit-mint/20 border border-white/10">
                        <Image
                            src={logoUrl}
                            alt="Tecobit Logo"
                            fill
                            className="object-contain transition-all"
                            priority
                        />
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-foreground leading-none">TECOBIT</span>
                        <span className="text-[10px] font-bold tracking-[0.3em] text-tecobit-mint uppercase">Marketing</span>
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
                                className="text-foreground/80 hover:text-tecobit-mint font-bold text-sm uppercase tracking-widest transition-colors flex items-center space-x-2"
                            >
                                {/* <span><Icon size={16} /></span> */}
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}

                    <div className="flex items-center space-x-6 pl-4 border-l border-border">
                        <ThemeToggle />

                        <RippleButton
                            variant="primary"
                            className="px-6 py-3 rounded-full"
                            onClick={() => window.location.href = `tel:${data?.phoneNumber || '+9779863992047'}`}
                        >
                            <Phone size={16} fill="black" />
                            <span className="text-xs font-black">{data?.phoneNumber || '+977-9863992047'}</span>
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
                                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white/5 transition-all text-lg font-bold"
                                    >
                                        <span className="text-tecobit-mint"><Icon size={24} /></span>
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                            <div className="pt-6 border-t border-border">
                                <RippleButton
                                    variant="primary"
                                    className="w-full flex items-center justify-center space-x-3"
                                    onClick={() => window.location.href = "tel:+9779863992047"}
                                >
                                    <Phone size={20} fill="black" />
                                    <span>CALL US NOW</span>
                                </RippleButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
