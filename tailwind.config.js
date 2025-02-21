/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poly: ["Poly", "serif"],
      basis: ["Basic", "serif"],
      gt: ["Red Hat Display", "serif"],
    },
    extend: {
      colors: {
        "primary-blue": "#d3e8f1",
        "primary-black": "#3c3830",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
