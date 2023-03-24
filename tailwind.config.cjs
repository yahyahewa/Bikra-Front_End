/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "big-stone": {
          50: "#f3f7fc",
          100: "#e6eff8",
          200: "#c7ddf0",
          300: "#95c1e4",
          400: "#5c9fd4",
          500: "#3783c0",
          600: "#2768a2",
          700: "#215383",
          800: "#1f486d",
          900: "#112233",
        },
      },
    },
  },
  plugins: [],
};
