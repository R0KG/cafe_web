/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'manrove': 'Manrope'
      },
      backgroundImage : {
        'gradient-primary': "linear-gradient(270deg, #166534 0%, #84cc16 100%)",
        'gradient-secondary': "linear-gradient(180deg, #F4F4F4 0%, rgba(244, 244, 244, 0.00) 100%)",
        'gradient-1': 'linear-gradient(270deg, #166534 0%, #84cc16 100%)',
        'gradient-2': 'rgba(132, 204, 22, 0.10)',
        'gradient-3':'rgba(22, 101, 52, 0.10)',
        'gradient-4': 'linear-gradient(90deg, #D9D9D9 0%, rgba(255, 255, 255, 0.00) 100%)',
        'footer-bg':'linear-gradient(270deg, rgba(22, 101, 52, 0.10) 0%, rgba(132, 204, 22, 0.10) 100%)'
      },
      colors : {
        'brand-dark': '#166534',
        'brand-light': '#84cc16'
      }
    },
  },
  daisyui: {
    themes: [],
  },

  plugins: [require("daisyui")],
}

