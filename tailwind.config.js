/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'benspink':'#f9a8d4',
        'bensgreen':'#00b09b',
        'bensdarkergreen':'#00a896',
        'bensdarkestgreen':'#009688',
      }
    },
  },
  plugins: [],
}