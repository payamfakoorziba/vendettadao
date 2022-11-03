module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
      },
      center: true
    },
    extend: {
      fontFamily: {
        "serif": ["Rye", "serif"],
        "sans": ["Roboto", "sans-serif"],
        // "stinky": ["Times New Roman", "cursive"]
      },
      colors: {
        accent: {
          "50": "rgba(254 138 53 / <alpha-value>)",

          "100": "rgba(244 128 43 / <alpha-value>)",

          "200": "rgba(234 118 33 / <alpha-value>)",

          "300": "rgba(224 108 23 / <alpha-value>)",

          "400": "rgba(214 98 13 / <alpha-value>)",

          "500": "rgba(204 88 3 / <alpha-value>)",

          "600": "rgba(194 78 0 / <alpha-value>)",

          "700": "rgba(184 68 0 / <alpha-value>)",

          "800": "rgba(174 58 0 / <alpha-value>)",
          "900": "rgba(164 48 0 / <alpha-value>)"

        }
      },
      screens: {
        "2md": "866px",
      }
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio")
  ],
};
