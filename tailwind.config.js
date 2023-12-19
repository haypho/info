/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#e4e3e3",
        dark: "#0e142c",
        primary: "#76bc4e",
        secondary: "#447e3a",
        accent: "#d8b346",
      },
      fontFamily: {
        title: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
