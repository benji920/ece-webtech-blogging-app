/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color50: "var(--color-50)",
        color100: "var(--color-100)",
        color200: "var(--color-200)",
        color300: "var(--color-300)",
        color400: "var(--color-400)",
        color500: "var(--color-500)",
        color600: "var(--color-600)",
        color700: "var(--color-700)",
        color800: "var(--color-800)",
        color900: "var(--color-900)",
      },
    },
  },
  plugins: [
    require('tailwindcss-font-inter'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
