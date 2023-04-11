/** @type {import('tailwindcss').Config} */
// * Novagon UI 4 tailwindcss config
module.exports = {
  content: [
    "./**/**/*.{html,htm,js}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue:{
          primary: '#00B0F0',
          50: '#00E0FF',
        },
        gray:{
          secondary: '#404040',
          100: '#A8A8A8',
        },
      },
      fontFamily: {
        albertsans: "'Albert Sans', sans-serif"
      },
    },
  },
}