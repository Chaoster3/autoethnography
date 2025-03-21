/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7e5f',     // Coral/Salmon
        secondary: '#8a5082',   // Purple
        accent: '#feb47b',      // Peach
        background: '#fef9f0',  // Cream/off-white
        text: '#2d2d2d',        // Dark gray
        highlight: '#ff5757',   // Bright coral
        softgreen: '#c3d4c5',   // Soft sage
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
        display: ['Comfortaa', 'cursive'],
        handwritten: ['Caveat', 'cursive'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'bubble': '0 8px 15px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
} 