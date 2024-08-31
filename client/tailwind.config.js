module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      // => @media (max-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/components/Landing/images/bg_1.png')",
      },
      fontFamily: {
        alfaSlab: ["Alfa Slab One", "cursive"],
        Maven: ["Maven Pro", "sans-serif"],
        BigShoulders: ["Big Shoulders Display", "sans-serif"],
      },
      colors: {
        lofiPurple: "#9D31E4",
        lofiPink: "#F9A3C6",
        lofiRed: "#DA4167",
        lofiMagenta: "#700650",
        lofiMaroon: "#700650",
        myTourniBlack: "#2C363F",
        dullGold: "#BBA14F",
        purpleTest: "#31005A",
        blackTest: "#1F0236",
      },
    },
  },
  plugins: [],
};
