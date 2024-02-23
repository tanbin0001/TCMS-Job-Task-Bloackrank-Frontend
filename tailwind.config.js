/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native");
 

module.exports = {
  // content: ["./app/**/*.{js}", "./index.js"],
  content: [
    "./App.{js,jsx,ts,tsx}",
 
    // "./src/screens/**/*.{js,jsx,ts,tsx}",
    // ".src/components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [nativewind()],
};
