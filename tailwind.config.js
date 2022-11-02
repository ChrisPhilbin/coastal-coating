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
  plugins: [],
};
