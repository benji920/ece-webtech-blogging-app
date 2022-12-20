/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'malibu': {
        '50': '#f1fafe',
        '100': '#e2f3fc',
        '200': '#bee8f9',
        '300': '#68cdf2',
        '400': '#43c2ed',
        '500': '#1babdc',
        '600': '#0e89bb',
        '700': '#0c6e98',
        '800': '#0e5d7e',
        '900': '#124d68',
      },
    },
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
