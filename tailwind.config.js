/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"], // Make sure to include a fallback font
      },
      colors: {
        blackBlue: "#282938",
        blueBox: "#1C1E53",
      },
    },
  },
  plugins: [],
};
