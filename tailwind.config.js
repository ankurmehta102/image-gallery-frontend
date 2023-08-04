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
        line: '#202020',
        sidebar: '#070707',
        'images-container': '#171717',
        'custom-slate': '#f5f5f5',
        'card-one': '#DBA5B7',
        'card-two': '#fcc699',
        'card-three': '#ffd155',
        'card-four': '#C1CCC5',
      },
      gridTemplateColumns: {
        five: 'repeat(5, minmax(0, 200px))',
        four: 'repeat(4, minmax(0, 200px))',
        three: 'repeat(3, minmax(0, 200px))',
        two: 'repeat(2, minmax(0, 200px))',
        one: 'repeat(1, minmax(0, 200px))',
      },
      width: {
        432: '27rem',
      },
      borderWidth: {
        0.5: '0.5px',
      },
      screens: {
        mobile: '367px',
        navbar: '622px',
      },
      keyframes: {
        fade: {
          '0%': {
            transform: 'translateY(5%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
      },
      animation: {
        fade: 'fade 0.5s ',
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
