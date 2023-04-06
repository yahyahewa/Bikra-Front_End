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
        "azure-radiance": {
          50: "#edfaff",
          100: "#d6f3ff",
          200: "#b5ecff",
          300: "#83e3ff",
          400: "#48d0ff",
          500: "#1eb3ff",
          600: "#0696ff",
          700: "#0082ff",
          800: "#0863c5",
          900: "#0d559b",
          950: "#0e345d",
        },

        "cus-white": {
          50: "#fefefe",
        },
      },
    },
  },
  plugins: [],
};
