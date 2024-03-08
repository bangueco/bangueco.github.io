/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide_left: {
          from: {left: '100px'},
          to: {left: '0px'}
        },
      },
      animation: {
        'sliding-left': 'slide_left 2s ease normal'
      }
    },
  },
  plugins: [],
}

