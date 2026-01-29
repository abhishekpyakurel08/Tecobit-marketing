"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Home,
    Briefcase,
    Users,
    Mail,
    Globe,
    Search,
    Settings,
    Sparkles,
    Info
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
    { name: "Home", icon: <Home size={22} />, href: "/" },
    { name: "AI Studio", icon: <Sparkles size={22} />, href: "/ai-studio" },
    { name: "Services", icon: <Briefcase size={22} />, href: "/services" },
    { name: "Portfolio", icon: <Globe size={22} />, href: "/portfolio" },
    { name: "Clients", icon: <Users size={22} />, href: "/clients" },
    { name: "About", icon: <Info size={22} />, href: "/about" },
    { name: "Contact", icon: <Mail size={22} />, href: "/contact" },
];

export function SidebarNavigation() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const pathname = usePathname();

    return (
        <aside
            className={`fixed left-0 top-0 h-screen z-[100] transition-all duration-500 ease-in-out bg-background/80 backdrop-blur-2xl border-r border-border hidden lg:flex flex-col ${isCollapsed ? "w-24" : "w-72"}`}
            onMouseEnter={() => setIsCollapsed(false)}
            onMouseLeave={() => setIsCollapsed(true)}
        >
            {/* Logo Section */}
            <div className="p-6 h-32 flex items-center mb-4">
                <div className="relative h-20 lg:h-24 w-auto flex-shrink-0">
                    <img
                        src="/tecobit-logo.png?v=4"
                        alt="Tecobit Technology"
                        className="h-full w-auto object-contain max-w-full"
                    />
                </div>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 px-4 space-y-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center h-14 rounded-2xl transition-all duration-300 group relative ${isActive ? 'bg-tecobit-mint text-black shadow-[0_0_20px_rgba(61,255,197,0.3)]' : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'}`}
                        >
                            <div className="w-16 h-full flex items-center justify-center flex-shrink-0">
                                {item.icon}
                            </div>

                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        className="font-bold uppercase tracking-widest text-xs"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {/* Hover Tooltip when collapsed */}
                            {isCollapsed && (
                                <div className="absolute left-full ml-4 px-3 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-2xl">
                                    {item.name}
                                </div>
                            )}

                            {isActive && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="absolute right-2 w-1.5 h-6 bg-black rounded-full"
                                />
                            )}
                        </Link>
                    )
                })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-border space-y-4">
                <div className={`flex items-center h-14 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all cursor-pointer group relative`}>
                    <div className="w-16 h-full flex items-center justify-center flex-shrink-0">
                        <Settings size={22} />
                    </div>
                    {!isCollapsed && <span className="font-bold uppercase tracking-widest text-xs">Settings</span>}
                    {isCollapsed && (
                        <div className="absolute left-full ml-4 px-3 py-2 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            Settings
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
}
