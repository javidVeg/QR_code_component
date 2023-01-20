/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      "15px": ['15px', {
        fontWeight: '700',
        lineHeight: '1.2rem'
      }],
      "11px": ['11px', {
        fontWeight: '400',
        lineHeight: '.8rem'
      }]
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif']
    },
   
    extend: { 
      colors: {
      'Grayish-blue': 'hsl(220, 15%, 55%)',
      'Dark-blue': 'hsl(218, 44%, 22%)'
    },},
  },
  plugins: [],
}