/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'tall-sm': { 'raw': '(min-height: 800px)' },
        'tall-xl': { 'raw': '(min-height: 1080)' },
        // => @media (min-height: 800px) { ... }
      },
      padding: {
          '21': '84px'
      },
      backgroundImage:{
        'mobile-front' : "url(../../public/img/frontPage.jpeg)",
        'desktop-front' : "url(../../public/img/playerTennis.jpg)",
        'desktop-player': "url(../../public/img/playerWinn.png)",
      },
      
    },
  },
  plugins: [],
}