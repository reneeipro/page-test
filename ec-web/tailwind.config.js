const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html',
    ]
  },
  theme: {
    extend: {
      colors: {
        'sfz-brand': {
          50: '#cadbf1',
          100: '#66778d',
          200: '#526379',
          300: '#3e4f65',
          400: '#2a3b51',
          500: '#16273D',
          600: '#111D2E',
          700: '#021329',
          800: '#00091a',
          900: '#000006'
        },
        "blue-gray": colors.blueGray,
        "true-gray": colors.trueGray,
        "warm-gray": colors.warmGray,
        "amber": colors.amber,
        "lime": colors.lime,
        "emerald": colors.emerald,
        "cyan": colors.cyan,
        "light-blue": colors.lightBlue,
        "violet": colors.violet,
        "fuchsia": colors.fuchsia,
        "rose": colors.rose,
      }
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    },
  },
  darkMode: "class",
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
    require('@tailwindcss/ui'),
  ]
}
