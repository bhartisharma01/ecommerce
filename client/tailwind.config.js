/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#2b3a8d',
        'orange':'#fc8c26',
      },
    },
  },
  plugins: [],
}