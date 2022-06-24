const colors  = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      zinc: colors.zinc,
      neutral: colors.neutral,
      brand: {
        500: "#8257e6"
      }
    }
  },
  plugins: [],
}
