/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a1a1a',
        darkCard: '#333333',
        lightBackground: '#ffffff',
        lightCard: '#f9f9f9',
      },
    },
  },
  plugins: [],
}
