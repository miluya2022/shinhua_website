/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#f2f9f1',
          100: '#e1f1de',
          200: '#c5e3be',
          300: '#9ecc93',
          400: '#71ae63',
          500: '#529145',
          600: '#3f7535',
          700: '#335d2c',
          800: '#2b4a26',
          900: '#243e21',
          950: '#11210f',
        },
      },
    },
  },
  plugins: [],
}
