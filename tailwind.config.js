const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-green': {
          DEFAULT: '#006D77',
          'hover': '#085860'
        },
        'light-gray': {
          DEFAULT: '#EDF6F9'
        },
      },
    },
  },
  plugins: [],
};
