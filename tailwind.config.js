/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#2F80ED",
        secondry:{
          100:"#BDBDBD",
          200:"#828282", 
          300:"#333333",
        },
        dangerRed:"#EB5757",
      },
      fontFamily:{
        body:['Raleway', 'sans-serif'],
        el:['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

