import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f7f3eb",
        ink: "#16171a",
        muted: "#64615c",
        line: "#d9d1c4",
        night: "#102033",
        wine: "#7a1f2b",
        moss: "#53633f",
        brass: "#a6752a"
      },
      fontFamily: {
        serif: ["var(--font-news-serif)", "Georgia", "serif"],
        sans: ["var(--font-news-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        editorial: "0 24px 80px rgba(16, 32, 51, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
