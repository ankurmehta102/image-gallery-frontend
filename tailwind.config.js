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
        navbar: colors.neutral[800],
        sidebar: colors.neutral[950],
        'custom-slate': colors.slate[300],
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
