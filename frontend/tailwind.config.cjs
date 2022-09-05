/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
    },
    colors: {
      background: '#F7FAFC',
      gradient: {
        blue: '#1482FC',
        purple: '#9513FB'
      },
      white: '#FFF',
      black: '#000',
      shades: {
        100: '#E7F0FD',
        600: '#425466',
        700: '#32323C',
        800: '#27272E',
        900: '#1A202C'
      },
      red: '#FC395C',
      blue: {
        100: '#D1DAFA',
        200: '#E1E8FF',
        300: '#1F80B7',
        400: '#4C6FFF',
        500: '#3962FC',
        700: '#384FA1',
      },
      purple: '#9A39FC'

    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xsm: '.625rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2.5rem'
    }
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' })
  ],
}
