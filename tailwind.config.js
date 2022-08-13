/** @type {import('tailwindcss').Config} */

// tailwind component
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
    },
    extend: {
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  enabled: process.env.NODE_ENV === 'production',
}