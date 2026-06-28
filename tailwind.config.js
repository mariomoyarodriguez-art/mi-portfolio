/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores oscuros estilo terminal/hacker elegante
        background: '#0f1115', // Un gris/azul súper oscuro
        surface: '#16191f',    // Un tono más claro para las tarjetas
        primary: '#f43f5e',    // Un acento rojo/rosa (como la línea de la captura)
        textMain: '#f8fafc',   // Texto principal blanco invierno
        textMuted: '#94a3b8',  // Texto secundario grisáceo
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Letra limpia para descripciones
        serif: ['Merriweather', 'serif'], // Letra elegante para títulos grandes
      }
    },
  },
  plugins: [],
}
