/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  content: ["./App.tsx", "./presentation/**/*.{js,jsx,ts,tsx}"],
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
