/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        errorBg: "url('/images/error.png')",
      },
      backgroundColor: {
        darkBg: "#012622",
      },
    },
  },
  daisyui: {
    themes: [
      "bumblebee",      
      "night",
    ],
  },
  plugins: [require("daisyui")],
};

