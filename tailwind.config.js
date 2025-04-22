/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#9D0D0D",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
      jomolhari: ["Jomolhari", "serif"],
      batang: ["Gowun Batang", "serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Chrome, Safari */,
        },
      });
    },
  ],
};
