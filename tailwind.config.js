/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#415AF7",     // couleur personnalisée
        secondary: "#7D3FF9",
        Tersary: "#C620FE",
        light: "#F1F3F4",
        dark: "#150404",
      },
    },
  },
  plugins: [],
}

