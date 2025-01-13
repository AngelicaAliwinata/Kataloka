/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        creme: "#FFF2E2",
        "dark-green": "#115246",
        "light-green": "#638666",
        pink: "#EE4362",
        brown:  "#543B2F"
      },
    },
  },
  plugins: [],
};
