/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './client/**/*.[tj]sx'],
  theme: {
    extend: {
      fontFamily: {
        '8bit': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-dotted-background'),
    require('tailwindcss-patterns'),
  ],
}
