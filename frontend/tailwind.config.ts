import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        panel: "#0b1120",
        line: "rgba(255,255,255,0.12)",
        neon: {
          cyan: "#47f5ff",
          purple: "#7c3aed",
          blue: "#60a5fa",
          pink: "#ff4fd8"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(71,245,255,0.18), 0 0 32px rgba(71,245,255,0.18)",
        purple: "0 0 40px rgba(124,58,237,0.22)",
        card: "0 20px 80px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 5s linear infinite",
        spinSlow: "spin 18s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      }
    }
  },
  plugins: []
};

export default config;
