/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ui':{
          100: '#262626',
          200: '#1E1E1E',
          300: '#191919',
          400:'#333333',
          500:'#b8b8b8'
        }
      },
    },
  },
  plugins: [],
}