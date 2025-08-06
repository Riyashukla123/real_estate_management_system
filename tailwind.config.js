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
      boxShadow: {
        'custom-glow': '0 40px 30px rgba(0, 0, 0, 0.4)',  
      },
      animation: {
        'spin': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
}

