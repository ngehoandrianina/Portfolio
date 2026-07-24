/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
          primary: "var(--primary)",
          secondary: "var(--secondary)",
          Tersary: "var(--tersary)",
          light: "var(--light)",
          dark: "var(--dark)",
          background: 'var(--background)',
          foreground: 'var(--foreground)',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'archivo': ['Archivo', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'], 
        'arimo':['Arimo','sans-serif']
      },
    },
  },
  plugins: [],
}

