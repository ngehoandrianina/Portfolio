/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DFCBB2",     // couleur personnalisée
        secondary: "#DFD3C3",
        Tersary: "#953B00",
        light: "#DFD3C3",
        dark: "#0A0D14",
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'], 
      },
    },
  },
  plugins: [],
}

