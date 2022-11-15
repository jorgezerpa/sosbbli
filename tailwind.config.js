/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/commons/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm:'500px'
      },
      keyframes:{
        zoomIn: {
          '0%': {transform: 'scale(0)', opacity:0},
          '100%': {transform: 'scale(1)', opacity:1},
        },
        steps: {
          '0%': {transfrom: 'scale(0)', opacity:0},
          '100%': {transfrom: 'scale(1)', opacity:1},
        }
      },
      animation: {
        zoomIn: 'zoomIn .5s ease-in-out forwards 1.5s',
        steps: 'steps .5s linear forwards'
      }
    },

  },
  plugins: [],
}
