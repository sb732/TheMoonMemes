/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blinker: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blinker: "blinker 1s linear infinite",
      },
    },
  },
  plugins: [],
};
