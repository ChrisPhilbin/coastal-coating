const plugin = require("tailwindcss/plugin");

const customCardFlipClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "coastal-light-blue": "#59c2bb",
        "coastal-dark-blue": "#0d7ec0",
        "service-tile-front": "rgb(216, 180, 254, 0.4)",
        "service-tile-back": "rgb(22, 22, 22, 0.4)",
      },
      fontFamily: {
        "coastal-body": ["Nunito"],
        "coastal-montserrat": ["Montserrat"],
      },
      backgroundImage: {
        "home-background-desktop": "url('/img/home/corvette.jpg')",
        "home-background-mobile": "url('/img/home/corvette_mobile.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [customCardFlipClass],
};
