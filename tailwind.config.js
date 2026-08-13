/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        paper: {
          50: "#fbfcfd",
          100: "#f3f6f8",
          200: "#e8edf1",
          300: "#d9e1e7",
        },
        navy: {
          950: "#0b1119",
          900: "#111925",
          800: "#172231",
          700: "#20303f",
          600: "#2b3f4f",
        },
        teal: {
          400: "#2dd4c8",
          500: "#14b8a6",
          600: "#0d9488",
        },
        gold: {
          300: "#e9c877",
          400: "#d9ae52",
          500: "#c69a3a",
          600: "#a67c2e",
          700: "#8a6624",
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.09)",
        "glass-sm": "0 4px 16px 0 rgba(15, 23, 42, 0.07)",
        "glow-teal": "0 0 34px -10px rgba(13, 148, 136, 0.35)",
        "glow-gold": "0 0 34px -10px rgba(166, 124, 46, 0.28)",
      },
      backdropBlur: {
        xs: "3px",
      },
      animation: {
        aurora: "aurora 22s ease-in-out infinite",
        "aurora-slow": "aurora 32s ease-in-out infinite reverse",
        "aurora-slower": "aurora 40s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease forwards",
        shimmer: "shimmer 3s linear infinite",
        "ekg-scroll": "ekg-scroll linear infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(6%, -8%) scale(1.08)" },
          "66%": { transform: "translate(-5%, 6%) scale(0.96)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          from: { opacity: 0, transform: "translateY(24px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "ekg-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-600px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(45,212,200,0.55)" },
          "70%": { boxShadow: "0 0 0 8px rgba(45,212,200,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(45,212,200,0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.55, transform: "scale(0.94)" },
        },
      },
    },
  },
  plugins: [],
};
