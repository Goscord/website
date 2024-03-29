import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {
    fontFamily: {
      "sans": ["var(--font-inter)"],
      "mono": ["var-(--font-roboto-mono)"]
    },

    colors: {
      "transparent": "transparent",

      "white": "#ffffff",
      "black": "#000000",

      "primary": {
        DEFAULT: "#5AA469",
        2: "#4a8c5a",
        3: "#EAFFF2"
      },

      "gray": {
        DEFAULT: "#23272a",
        2: "#8A8F98",
        3: "#D0D6E0"
      }
    },

    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["2rem", { lineHeight: "1" }]
    },

    screens: {
      "2xl": { "max": "1535px" },
      "xl": { "max": "1279px" },
      "lg": { "max": "1023px" },
      "md": { "max": "767px" },
      "sm": { "max": "639px" }
    },

    borderRadius: {
      none: "0",
      DEFAULT: "0.25rem",
      lg: "1.25rem",
      full: "9999px"
    },

    boxShadow: {
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
    },

    extend: {
      backgroundImage: {
        "setup-section": "url('/backgrounds/setup-section.svg')"
      },

      animation: {
        "from-top": "from-top 0.5s ease-out",
        "from-bottom": "from-bottom 0.5s ease-out"
      },
      keyframes: {
        "from-top": {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" }
        },
        "from-bottom": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
} satisfies Config;