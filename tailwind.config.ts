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
          background: "#FFFFFF",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E5E7EB",
          text: "#111827",
          heading: "#0A2342",
          primary: {
            DEFAULT: "#0A2342",
            light: "#0D2D52",
            dark: "#071929",
          },
          secondary: {
            DEFAULT: "#2563EB",
            light: "#3B82F6",
            dark: "#1D4ED8",
          },
          accent: "#2563EB",
          muted: "#6B7280",
          success: "#059669",
          warning: "#D97706",
        },
        fontFamily: {
          sans: ["Inter", "system-ui", "sans-serif"],
          display: ["Inter", "system-ui", "sans-serif"],
        },
        fontSize: {
          "display-xl": ["clamp(3rem,8vw,6.5rem)", { lineHeight: "1", letterSpacing: "-0.04em" }],
          "display-lg": ["clamp(2.5rem,6vw,5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
          "display-md": ["clamp(2rem,4vw,3rem)", { lineHeight: "1.15" }],
        },
        animation: {
          float: "float 8s ease-in-out infinite",
          glow: "glow 5s ease-in-out infinite",
          radar: "radar 8s linear infinite",
        },
        keyframes: {
          float: { "0%,100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } },
          glow: { "0%,100%": { opacity: ".4" }, "50%": { opacity: ".9" } },
          radar: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        },
        backgroundImage: {
          hero: "linear-gradient(135deg,#FFFFFF 0%,#F8FAFC 40%,#EFF6FF 100%)",
          section: "linear-gradient(180deg,#FFFFFF 0%,#F8FAFC 100%)",
          radar: "radial-gradient(circle at center, rgba(10,35,66,.04), transparent 70%)",
        },
        boxShadow: {
          soft: "0 4px 20px rgba(0,0,0,.06)",
          card: "0 4px 24px rgba(10,35,66,.07)",
          navy: "0 8px 30px rgba(10,35,66,.12)",
          blue: "0 8px 30px rgba(37,99,235,.18)",
        },
      },
    },
    plugins: [],
  };
  export default config;
  