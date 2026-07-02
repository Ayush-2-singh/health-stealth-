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
    background: "#F7F9FC",
    surface: "#FFFFFF",
    card: "#FFFFFF",

    border: "#D6DCE5",

    text: "#10233E",
    heading: "#081B33",

    primary: {
      DEFAULT: "#0F4C81",
      light: "#2D6EA3",
      dark: "#082D52",
    },

    secondary: {
      DEFAULT: "#5B7F5A",
      light: "#7DA77C",
      dark: "#3F5D3F",
    },

    accent: "#5A86B8",

    muted: "#64748B",

    success: "#2E8B57",

    warning: "#C68A2D",
  },

  fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
    display: ["Inter", "system-ui", "sans-serif"],
  },

  fontSize: {
    "display-xl": [
      "clamp(3rem,8vw,6.5rem)",
      {
        lineHeight: "1",
        letterSpacing: "-0.04em",
      },
    ],

    "display-lg": [
      "clamp(2.5rem,6vw,5rem)",
      {
        lineHeight: "1.1",
        letterSpacing: "-0.03em",
      },
    ],

    "display-md": [
      "clamp(2rem,4vw,3rem)",
      {
        lineHeight: "1.15",
      },
    ],
  },

  animation: {
    float: "float 8s ease-in-out infinite",
    glow: "glow 5s ease-in-out infinite",
    radar: "radar 8s linear infinite",
  },

  keyframes: {
    float: {
      "0%,100%": {
        transform: "translateY(0px)",
      },
      "50%": {
        transform: "translateY(-8px)",
      },
    },

    glow: {
      "0%,100%": {
        opacity: ".4",
      },
      "50%": {
        opacity: ".9",
      },
    },

    radar: {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  },

  backgroundImage: {
    hero:
      "linear-gradient(135deg,#0A1B32 0%,#143A62 40%,#1F5A96 100%)",

    section:
      "linear-gradient(180deg,#F7F9FC 0%,#EDF2F7 100%)",

    radar:
      "radial-gradient(circle at center, rgba(15,76,129,.08), transparent 70%)",
  },

  boxShadow: {
    soft: "0 10px 30px rgba(0,0,0,.08)",

    card: "0 15px 40px rgba(16,35,62,.08)",

    navy: "0 20px 50px rgba(15,76,129,.15)",

    green: "0 20px 40px rgba(91,127,90,.12)",
  },
},
  },
  plugins: [],
};
export default config;
