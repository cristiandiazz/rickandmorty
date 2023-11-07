/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js}', './public/index.html'], // Specify the content that Tailwind should analyze
  theme: {
    extend: {
      colors: {
        primary: 'blue', // Define a custom primary color
      },
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'], // Define custom font families
      },
      // Add more styling options as needed
    },
  },
  plugins: [],
}
