const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Muli',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    }
  }
}