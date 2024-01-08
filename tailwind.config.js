/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
    screens: {
      'sm': '320px',
      'md': '600px',
      'lg': '830px',
      'xl': '1080px',
      '2xl': '1430px',
    }
  },
  plugins: [],
}

