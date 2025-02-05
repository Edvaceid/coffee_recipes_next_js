import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(20, 30%, 16%)",
        input: "hsl(20, 30%, 16%)",
        ring: "hsl(43, 96%, 48%)",
        background: "hsl(20, 30%, 8%)",
        foreground: "hsl(43, 96%, 98%)",
        primary: {
          DEFAULT: "hsl(43, 96%, 48%)",
          foreground: "hsl(43, 96%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(20, 30%, 16%)",
          foreground: "hsl(43, 96%, 98%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 62.8%, 30.6%)",
          foreground: "hsl(43, 96%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(20, 30%, 16%)",
          foreground: "hsl(43, 30%, 70%)",
        },
        accent: {
          DEFAULT: "hsl(20, 30%, 16%)",
          foreground: "hsl(43, 96%, 98%)",
        },
        popover: {
          DEFAULT: "hsl(20, 30%, 8%)",
          foreground: "hsl(43, 96%, 98%)",
        },
        card: {
          DEFAULT: "hsl(20, 30%, 8%)",
          foreground: "hsl(43, 96%, 98%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}

export default config