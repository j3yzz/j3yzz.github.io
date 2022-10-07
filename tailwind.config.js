/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto']
      },
      backgroundImage: {
        'pattern': "url('/assets/img/bg.svg')"
      }
    },
  },
  plugins: [],
}
