/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        lusso: ['"Playfair Display"', 'serif'],
        slab: ['"Alfa Slab One"', 'cursive'],
        archivo: ['"Archivo Black"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

