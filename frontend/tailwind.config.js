/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: "#FF8D70",
        brown: "#664C43",
        tan: "#EFD2A9",
        customBlue: "#140576",
        customWhite: "#F957FO",
        customLiteBlue: "#7F96FF",
        aquamarine: "#CCF5E8"
      },
      boxShadow: {
        'tomato': '0 4px 8px 1px rgba(255, 99, 71, 0.5), 0 2px 10px -2px rgba(255, 99, 71, 0.3)',
      }
    },
  },
  plugins: [],
}

