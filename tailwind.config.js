/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        paper: {
          50: "#fdfbfb",
          100: "#f9f2f2",
          200: "#f2e3e4",
          300: "#e6cfd1",
        },
        navy: {
          950: "#0b1119",
          900: "#111925",
          800: "#172231",
          700: "#20303f",
          600: "#2b3f4f",
        },
        crimson: {
          50: "#fdf2f3",
          200: "#f6c9cf",
          400: "#ef5b6d",
          500: "#dc3245",
          600: "#c11f38",
          700: "#9c172d",
          800: "#7a1425",
          900: "#591019",
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(15, 23, 42, 0.09)",
        "glass-sm": "0 4px 16px 0 rgba(15, 23, 42, 0.07)",
        "glow-crimson": "0 8px 28px -8px rgba(193, 31, 56, 0.45)",
      },
    },
  },
  plugins: [],
};
