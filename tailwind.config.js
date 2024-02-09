/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#585959",
        primaryContent: "#D9D9D9",
        primarySubContent: "#A6A6A6",
        primaryBase: "#8C8C8C",
        primaryAccent: "#D9D9D9",
        primaryBackground: "#0D0D0D",
      }
    },
  },
  plugins: [],
}

