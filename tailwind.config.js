module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        header: ["Open Sans", "sans-serif"],
        footer: ["Open Sans", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        blue: "#025FA8",
        orange: "#CD4B12",
        yellow: "#FFEDBF",
        pink: "#FFC5F2",
        green: "#DDFFA6",
        "dark-green": "#5FC246",
        red: "#C24646",
        grey: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
