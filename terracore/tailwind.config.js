/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        burnt: '#CC4400',
        matte: '#121212',
        ash: '#888888'
      },
      backgroundImage: {
        topography: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Cpath fill='none' stroke='%23888888' stroke-width='0.5' d='M0 0 L100 0 L100 100 L0 100 Z M10 10 C40 20 60 30 90 40 M0 80 C30 70 70 60 100 50'/%3E%3C/svg%3E")
      }
    }
  },
  plugins: []
}
