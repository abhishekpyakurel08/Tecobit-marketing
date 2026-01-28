import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: { "2xl": "1400px" },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // Preserved Tecobit Brand Colors
                tecobit: {
                    blue: '#5C899E',
                    mint: '#3DFFC5',
                    green: '#39846D',
                    'soft-mint': '#C3F8E8',
                    'deep-teal': '#1F6F78',
                },
                academy: {
                    amber: '#FFC857',
                },
                marketing: {
                    coral: '#FF6B4A',
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            fontSize: {
                // Display Typography
                'display-3xl': ['6rem', { lineHeight: '1', fontWeight: '900' }], // 96px
                'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
                'display-lg': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
                'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
                'display-sm': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],

                // Heading Typography
                'h1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
                'h2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
                'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
                'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
                'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
                'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }],

                // Body Typography
                'body-xl': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
                'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
                'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
                'body-base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // Alias
                'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
                'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }],
                'caption': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }], // Alias
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-anybody)', 'system-ui', 'sans-serif'],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.6s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
