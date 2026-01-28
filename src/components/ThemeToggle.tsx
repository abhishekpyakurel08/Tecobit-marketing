"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="p-3 w-10 h-10" />;
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-3 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-tecobit-mint hover:bg-white/20 transition-all focus:outline-none"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? (
                <Sun size={20} className="transition-all" />
            ) : (
                <Moon size={20} className="text-tecobit-deep-teal transition-all" />
            )}
        </motion.button>
    );
}
