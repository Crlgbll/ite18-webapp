/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pf: ["Playfair Display", "serif"],
        sand: ["Quicksand", "sans-serif"],
        pops: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
