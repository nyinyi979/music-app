/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        1.5: "0.3fr 0.7fr",
      },
      boxShadow: {
        popup: "0 0 40px 2px #0000001e",
        portion: "0 10px 40px 2px #0000003e",
        btmPortion: "0 -10px 40px 2px #0000001e",
      },
    },
  },
  plugins: [],
};
