/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#131313",
        "secondary": "#222222",
        "light-grey": "#A3A3A3",
        "dark-grey": "#595959",
      }
    },
  },
  plugins: [],
}