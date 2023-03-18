/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      "sans": ["Yantramanav", "sans-serif"]
    },

    colors: {
      "transparent": "transparent",

      "white": "#ffffff",
      "black": "#000000",

      "primary": {
        DEFAULT: "#5AA469",
        1: "#4a8c5a"
      },

      "gray": {
        DEFAULT: "#23272a",
        1: "#2c2f33"
      }
    },

    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["2rem", { lineHeight: 1 }]
    },

    screens: {
      "2xl": { "max": "1535px" },
      "xl": { "max": "1279px" },
      "lg": { "max": "1023px" },
      "md": { "max": "767px" },
      "sm": { "max": "639px" }
    },

    borderRadius: {
      DEFAULT: "0.25rem",
      none: "0",
      full: "9999px"
    },

    boxShadow: {
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
    },

    extend: {}
  },
  plugins: []
};