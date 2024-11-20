import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "opacity-0",
    "opacity-100",
    "hidden",
    "block",
    "z-0",
    "z-10",
    "z-50",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background, #000000)", // Чёрный фон
        foreground: "var(--foreground, #00ff00)", // Зелёный текст
      },
      transitionDuration: {
        DEFAULT: "0ms", // Отключает плавные переходы
      },
    },
  },
  plugins: [],
} satisfies Config;
