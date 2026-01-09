/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandYellow: '#FFD700', // Amarelo da logo
        brandBlack: '#000000',
      },
    },
  },
  plugins: [],
}