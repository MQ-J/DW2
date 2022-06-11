const colors  = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      zinc: colors.zinc,
      brand: {
        500: "#8257e6"
      }
    }
  },
  plugins: [],
}
