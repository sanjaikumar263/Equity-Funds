/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      placeholderColor: {
        'white': '#ffffff',
      },borderColor:{
        'blue':'#55aeb7'
      },
      textColor:{
        'blue':'#55aeb7'
      }
    },
  },
  plugins: [],
}

