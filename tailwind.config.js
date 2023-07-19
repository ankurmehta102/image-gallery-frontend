const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/renderer/**/*.{js,jsx,ts,tsx,ejs}',
    './src/components/**/*.{js,jsx,ts,tsx,ejs}',
    './src/pages/**/*.{js,jsx,ts,tsx,ejs}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        primary: colors.fuchsia[300],
        error: colors.rose[400],
      },
      width: {
        432: '27rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      screens: {
        mobile: '367px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
