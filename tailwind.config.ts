import type { Config } from "tailwindcss";

const config: Config = {
  // 1. UPDATED PATHS: Removed "/src" so Tailwind sees your files
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  // 2. UPDATED DARK MODE: Using the array syntax for Next 15 compatibility
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#050505", // Matched to your minimal footer
        "slate-850": "#1c2127",
        "slate-950": "#0a0f14",
      },
      fontFamily: {
        "display": ["var(--font-geist-sans)", "sans-serif"], // Link to your layout font
        "mono": ["var(--font-geist-mono)", "monospace"],
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px",
      },
      animation: {
        "marquee": "marquee 60s linear infinite",
        "marquee-reverse": "marquee-reverse 60s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        marquee: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), 
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography")
  ],
};

export default config;