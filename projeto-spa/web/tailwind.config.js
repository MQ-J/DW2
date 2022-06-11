const colors  = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      zinc: colors.zinc,
      neutral: colors.neutral,
      brand: {
        500: "#8257e6"
      }
    }
  },
  plugins: [],
}
