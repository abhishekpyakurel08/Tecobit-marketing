/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Tecobit Master Brand Colors
                tecobit: {
                    blue: '#5C899E',
                    mint: '#3DFFC5',
                    green: '#39846D',
                    'soft-mint': '#C3F8E8',
                    'deep-teal': '#1F6F78',
                },
                // Tecobit Academy Colors
                academy: {
                    amber: '#FFC857',
                },
                // Tecobit Digital Marketing Colors
                marketing: {
                    coral: '#FF6B4A',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
