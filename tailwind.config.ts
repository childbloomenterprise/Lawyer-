import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B", // deep black
          900: "#0A0A0B",
          800: "#121214",
          700: "#1A1A1E",
          600: "#26262C",
        },
        gold: {
          DEFAULT: "#C9A24B", // luxury gold
          light: "#E4C97E",
          deep: "#A07E2E",
          50: "#FBF6E9",
        },
        royal: {
          DEFAULT: "#6D4AFF", // royal purple (sparingly)
          deep: "#4B2FD6",
          glow: "#8B6BFF",
        },
        paper: "#FAFAF7", // warm off-white
        mist: "#F2F1EC",
      },
      fontFamily: {
        display: ["var(--font-display)", "Satoshi", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "var(--font-display)", "sans-serif"],
      },
      fontSize: {
        "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "9xl": ["8rem", { lineHeight: "0.95", letterSpacing: "-0.04em" }],
        "10xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
        kicker: "0.28em",
      },
      maxWidth: {
        container: "1240px",
        wide: "1440px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
        smooth: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      keyframes: {
        "gold-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        "shimmer": {
          "100%": { transform: "translateX(100%)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        "drift": {
          "0%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.06)" },
          "66%": { transform: "translate(-30px,24px) scale(0.96)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
      },
      animation: {
        "gold-flow": "gold-flow 8s linear infinite",
        "marquee": "marquee 40s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "float-y": "float-y 9s ease-in-out infinite",
        "drift": "drift 24s ease-in-out infinite",
        "drift-slow": "drift 38s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
