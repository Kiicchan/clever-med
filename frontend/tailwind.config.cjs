/** @type {import('tailwindcss').Config} */
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
        300: '#1F80B7',
        500: '#3962FC',
        700: '#384FA1',
      },
      purple: '#9A39FC'

    }
  },
  plugins: [],
}
