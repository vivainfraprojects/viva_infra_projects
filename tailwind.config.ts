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
        brand: {
          // New Theme: Construction Gold / Industrial Safety Amber + Deep Charcoal Black
          yellow: "#F8C02E",
          "yellow-hover": "#E5A81C",
          "yellow-light": "#FFF9EB",
          "yellow-muted": "#FEF3C7",
          dark: "#111111",
          "dark-secondary": "#181818",
          charcoal: "#1F2421",
          "charcoal-light": "#2E3330",
          light: "#F9F9F8",
          border: "#E5E7EB",
          muted: "#52525B",

          // Harmonized Aliases matching reference layouts
          forest: "#111111",
          "forest-dark": "#0B0B0B",
          "forest-light": "#1E1E1E",
          lime: "#F8C02E",
          "lime-hover": "#E5A81C",
          sage: "#E5E7EB",
          "sage-light": "#FFF9EB",
        },
      },
      fontFamily: {
        heading: ["Poppins", "var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["Inter", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(17, 17, 17, 0.06), 0 2px 6px -1px rgba(17, 17, 17, 0.04)",
        "card-hover": "0 12px 30px -4px rgba(248, 192, 46, 0.15), 0 4px 12px -2px rgba(17, 17, 17, 0.08)",
        dropdown: "0 10px 30px -5px rgba(17, 17, 17, 0.18)",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
