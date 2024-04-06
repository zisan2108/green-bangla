/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        baseColor: '#114220',
        baseColor2: '#091242',
      }
    },
  },
  plugins: [require("daisyui")],
}

