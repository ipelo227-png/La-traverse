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
        paper: "#f4eee2",
        ink: "#17131b",
        muted: "#625d64",
        line: "#d7c7ad",
        night: "#07143f",
        wine: "#8f213d",
        moss: "#3f6657",
        brass: "#b97828",
        lake: "#0b4ea2",
        glacier: "#a9bfdb",
        mauve: "#77549a",
        ochre: "#d99a31"
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
