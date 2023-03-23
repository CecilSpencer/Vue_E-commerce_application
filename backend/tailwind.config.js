/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "src/**/*.{vue,vuex,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
