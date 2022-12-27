/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,,tsx,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  corePlugins: {
    backgroundOpacity: false,
  },
  plugins: [],
};
