/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        abhaya: ["Abhaya Libre", "serif"],
      },
      screens: {
        laptop2xl: "1440px",
        laptop: "1024px",
        tablet: "768px",
        mobiles: "325px",
        mobilem: "375px",
        mobilel: "425px",

        "1000px": "1000px",
        "1052px": "1052px",
        "1152px": "1152px",
        "864px": "864px",
        "576px": "576px",
        "1400px":"1400px",
        "1406px":"1406px",
        "1440px": "1440px",
        
        "farAway":"1200px",
      },
    },
  },
  plugins: [],
};
