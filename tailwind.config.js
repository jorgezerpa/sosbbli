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
          '0%': {transform: 'scale(0)', opacity:0},
          '100%': {transform: 'scale(1)', opacity:1},
        },
        heightUp: {
          '0%': {transform: 'scaleY(0)'},
          '100%': {transform: 'scaleY(1)'},
        },
        fadeIn: {
          '0%': {opacity:0},
          '100%': {opacity:1},
        },
        slideLeft: {
          '0%': {opacity:0, transform:'translateX(-100px)'},
          '100%': {opacity:1, transform:'translateX(0px)'},
        },
        slideRight: {
          '0%': {opacity:0, transform:'translateX(100px)'},
          '100%': {opacity:1, transform:'translateX(0px)'},
        },
      },
      animation: {
        zoomIn: 'zoomIn .5s ease-in-out forwards 1.5s',
        steps: 'steps .5s linear forwards',
        heightUp: 'heightUp .5s linear forwards',
        fadeIn: 'fadeIn .5s linear forwards',
        slideLeft: 'slideLeft .5s ease forwards',
        slideRight: 'slideRight .5s ease forwards',
      }
    },

  },
  plugins: [],
}
