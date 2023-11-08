/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        wynkPurple: {
          100: '#211E8A',
        },
        fvtGrey: '#E0E0E0',
      }
    },
  },
  plugins: [],
}

