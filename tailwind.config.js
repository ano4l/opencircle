/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1e3a8a',
        'soft-green': '#a7f3d0',
        'warm-beige': '#f5f5dc',
        'muted-gold': '#d4af37',
        'dark-gray': '#1f2937',
        'light-gray': '#f3f4f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      }
    },
  },
  plugins: [],
}
