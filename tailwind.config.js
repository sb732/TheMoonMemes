/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
});
