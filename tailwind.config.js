/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blur.png)',
        screen: 'url(/src/assets/wellcome.png)'
      },
      colors: {
        purple: '#6400B3'
      },
      fontFamily: {
        sans: "Roboto, sans serif"
      }
    },
  },
  plugins: [],
}
