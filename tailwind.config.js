/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 6px rgba(235, 235, 236, 1)',
      },
    },
  },
  plugins: [require('daisyui')],
}
