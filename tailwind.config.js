import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
    },
    colors: {
      transparent: colors.transparent,
      gray: {
        0: "#f8f9fa",
        1: "#f1f3f5",
        8: "#343a40",
        9: "#212529",
      },
      blue: {
        7: "#1c7ed6",
      },
      green: {
        5: "#51cf66",
      },
    },
    extend: {},
  },
  plugins: [],
};
