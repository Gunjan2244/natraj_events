import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "secondary-yellow": "var(--secondary-yellow)",
                "secondary-pink": "var(--secondary-pink)",
                accent: "var(--accent)",
            },
            fontFamily: {
                header: ["var(--font-montserrat)"],
                sans: ["var(--font-dm-sans)"],
            },
        },
    },
    plugins: [],
};
export default config;
