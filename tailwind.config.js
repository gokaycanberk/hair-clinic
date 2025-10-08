/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1e2c4f",
          light: "#2a3b64",
          dark: "#162039",
        },
        golden: {
          DEFAULT: "#f7aa38",
          light: "#f9bc64",
          dark: "#e59520",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
