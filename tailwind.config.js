/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './client/**/*.[tj]sx'],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-dotted-background'),
    require('tailwindcss-patterns'),
  ],
}
