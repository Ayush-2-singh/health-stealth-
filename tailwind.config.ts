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
          "display-xl": ["clamp(2.75rem,7vw,5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
          "display-lg": ["clamp(2.25rem,5vw,4rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
          "display-md": ["clamp(1.75rem,3.5vw,2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        },
        spacing: {
          section: "7rem",
          "section-sm": "5rem",
        },
        borderRadius: {
          card: "12px",
          "card-lg": "16px",
        },
        animation: {
          float: "float 8s ease-in-out infinite",
          radar: "radar 8s linear infinite",
          "fade-up": "fadeUp 0.5s ease forwards",
        },
        keyframes: {
          float: {
            "0%,100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-6px)" },
          },
          radar: {
            from: { transform: "rotate(0deg)" },
            to: { transform: "rotate(360deg)" },
          },
          fadeUp: {
            from: { opacity: "0", transform: "translateY(16px)" },
            to: { opacity: "1", transform: "translateY(0)" },
          },
        },
        backgroundImage: {
          hero: "linear-gradient(160deg,#FFFFFF 0%,#F8FAFC 60%,#EFF6FF 100%)",
          section: "linear-gradient(180deg,#FFFFFF 0%,#F8FAFC 100%)",
          "section-alt": "linear-gradient(180deg,#F8FAFC 0%,#FFFFFF 100%)",
        },
        boxShadow: {
          xs: "0 1px 2px rgba(0,0,0,.04)",
          soft: "0 1px 3px rgba(0,0,0,.04), 0 4px 12px rgba(0,0,0,.04)",
          card: "0 1px 4px rgba(10,35,66,.04), 0 6px 20px rgba(10,35,66,.05)",
          "card-hover": "0 2px 8px rgba(10,35,66,.06), 0 12px 32px rgba(10,35,66,.08)",
          navy: "0 4px 16px rgba(10,35,66,.12)",
          blue: "0 4px 16px rgba(37,99,235,.16)",
        },
      },
    },
    plugins: [],
  };
  export default config;
  