/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './client/**/*.[tj]sx'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary-yellow': '#FFE81F',
    },
    extend: {
      fontFamily: {
        '8bit': ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [
    require('tailwindcss-dotted-background'),
    require('tailwindcss-patterns'),
  ],
}
