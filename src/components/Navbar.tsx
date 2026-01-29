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
    const logoUrl = typeof data?.logo === 'object' && data.logo !== null ? (data.logo as any).url : '/tecobit-logo.png';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "h-16 md:h-20 bg-[hsl(var(--nav-bg))] backdrop-blur-xl shadow-lg border-b border-border/40"
                : "h-20 md:h-24 lg:h-28 bg-transparent"
                }`}
        >
            <div className="section-container !py-0 h-full flex items-center justify-between">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center group">
                    <div className="relative h-12 md:h-16 lg:h-20 w-auto flex items-center justify-start transition-transform group-hover:scale-105">
                        <img
                            src="/tecobit-logo.png?v=5"
                            alt="Tecobit Technology"
                            className="h-full w-auto object-contain dark:brightness-110"
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link || "#"}
                            className="nav-link"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="flex items-center gap-6 pl-6 border-l border-border/40">
                        <ThemeToggle />

                        <RippleButton
                            variant="primary"
                            className="btn-premium h-11 px-6 text-[11px]"
                            onClick={() => window.location.href = `tel:${data?.phoneNumber || '+9779745697694'}`}
                        >
                            <div className="flex items-center space-x-2">
                                <Phone size={14} />
                                <span className="font-bold">{data?.phoneNumber || '+977 974-5697694'}</span>
                            </div>
                        </RippleButton>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                        className="p-2 text-foreground hover:text-primary transition-colors"
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden fixed left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-border shadow-2xl z-40"
                        style={{ top: scrolled ? '64px' : '80px' }}
                    >
                        <div className="p-8 space-y-4">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link || "#"}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-primary/10 transition-all text-sm font-bold uppercase tracking-widest group"
                                >
                                    <span className="text-primary group-hover:scale-110 transition-transform">→</span>
                                    <span>{item.label}</span>
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-border">
                                <RippleButton
                                    variant="primary"
                                    className="w-full btn-premium py-5"
                                    onClick={() => window.location.href = "tel:+9779745697694"}
                                >
                                    <div className="flex items-center justify-center space-x-3">
                                        <Phone size={18} />
                                        <span>CALL US NOW</span>
                                    </div>
                                </RippleButton>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
