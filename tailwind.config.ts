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
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        jungle: {
          DEFAULT: "#1a2e1a",
          50: "#f0f7f0",
          100: "#ddeedd",
          200: "#bfddbf",
          300: "#94c494",
          400: "#62a462",
          500: "#3d853d",
          600: "#2d682d",
          700: "#255325",
          800: "#1f431f",
          900: "#1a2e1a",
          950: "#0d170d",
        },
        cream: {
          DEFAULT: "#fefbf5",
          50: "#fefbf5",
          100: "#fef7e8",
          200: "#fcefd0",
          300: "#f9e0a8",
          400: "#f5ca75",
          500: "#f0b341",
          600: "#e19a1a",
          700: "#ba7a13",
          800: "#976116",
          900: "#7a5016",
          950: "#422809",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;


