/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 2px 8px rgba(0, 0, 0, 0.6)',
        'nav': '0px 3px 16px 0px rgba(0,0,0,0.1)',
        'contact':'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.3);'
      },
      textShadow: {
        'black': '2px 2px 4px rgba(0, 0, 0, 0.75)',
        'red': '1px 1px 2px rgba(0, 0, 0, 0.75)',
      },
      colors: {
        customGray: '#f8f9fa',
      },
    },
    fontFamily: {
      'nav': 'Mulish',
      'header': 'Poppins'
    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

