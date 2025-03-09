/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./*.js'],
  theme: {
    extend: {
      container: {
        center : true,
        padding :{
          DEFAULY : '1rem',
          sm: '2rem',
        },
      },
      colors: {
        first: "#818CF8", // Warna tambahan
        secondary: "#312E81",
        DarkThame: "#000126",
      },
      fontFamily: {
        londrina: ["Londrina Solid", "cursive"],
        inter: ["Inter", "serif"],
        pacifico: ["Pacifico"],
      },
      keyframes: {
        move: {
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        scaleAnimation: "move 3s linear infinite",
      },
      container: {
        center : true,
        padding :{
          DEFAULY : '1rem',
          sm: '2rem',
        },
      },
      zIndex: {
          'minus': '-10', // Tambahkan nilai sesuai kebutuhan
      },
    },
  },
  darkMode: 'selector',
  plugins: [],

}

