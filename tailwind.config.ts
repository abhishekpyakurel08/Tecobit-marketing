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
                    // User provided primary palette mapped to 'brand' or used as extended scale if needed
                    50: '#E6FFFA',
                    100: '#B2F5EA',
                    200: '#81E6D9',
                    300: '#4FD1C5',
                    400: '#38B2AC',
                    500: '#00D9C0',
                    600: '#00A896',
                    700: '#008578',
                    800: '#00635A',
                    900: '#004A43',
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
                // User provided dark palette
                dark: {
                    50: '#F7FAFC',
                    100: '#EDF2F7',
                    200: '#E2E8F0',
                    300: '#CBD5E0',
                    400: '#A0AEC0',
                    500: '#718096',
                    600: '#4A5568',
                    700: '#2D3748',
                    800: '#1A202C',
                    900: '#0D1320',
                    950: '#0A0E1A',
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
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '100': '25rem',
                '112': '28rem',
                '128': '32rem',
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                '4xl': '2rem',
            },
            fontSize: {
                // UI Typography Scale - Display
                'display-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 56px
                'display-lg': ['3rem', { lineHeight: '1.1', fontWeight: '700' }], // 48px
                'display-md': ['2.5rem', { lineHeight: '1.15', fontWeight: '600' }], // 40px

                // UI Typography Scale - Headings
                'h1': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }], // 36px
                'h2': ['1.875rem', { lineHeight: '1.25', fontWeight: '600' }], // 30px
                'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
                'h4': ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }], // 20px
                'h5': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }], // 18px
                'h6': ['1rem', { lineHeight: '1.45', fontWeight: '600' }], // 16px

                // UI Typography Scale - Body
                'lg': ['1.125rem', { lineHeight: '1.65', fontWeight: '400' }], // Body LG - 18px
                'base': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // Body Base - 16px
                'sm': ['0.875rem', { lineHeight: '1.55', fontWeight: '400' }], // Body SM - 14px

                // UI Typography Scale - Meta
                'xs': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }], // Caption - 12px
                'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
                'helper': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
                'overline': ['0.75rem', { lineHeight: '1', fontWeight: '500', letterSpacing: '0.05em' }],

                // UI Typography Scale - Controls
                'btn': ['0.875rem', { lineHeight: '1.2', fontWeight: '500' }],
                'label': ['0.875rem', { lineHeight: '1.4', fontWeight: '500' }],
                'input': ['1rem', { lineHeight: '1.4', fontWeight: '400' }],

                // Standard Tailwind mapping to new Scale
                'xl': ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }], // Matches H4
                '2xl': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // Matches H3
                '3xl': ['1.875rem', { lineHeight: '1.25', fontWeight: '600' }], // Matches H2
                '4xl': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }], // Matches H1
                '5xl': ['2.5rem', { lineHeight: '1.15', fontWeight: '600' }], // Matches Display MD
                '6xl': ['3rem', { lineHeight: '1.1', fontWeight: '700' }], // Matches Display LG
                '7xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }], // Matches Display XL
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                display: ['var(--font-anybody)', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 20px rgba(0, 217, 192, 0.3)',
                'glow-lg': '0 0 40px rgba(0, 217, 192, 0.4)',
                'premium': '0 20px 40px rgba(0, 0, 0, 0.3)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.6s ease-out",
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 8s linear infinite',
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
