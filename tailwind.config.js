module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.json",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js",
    "./src/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#FE7743",
          background: "#EFEEEA",
          dark: "#273F4F",
          black: "#000000",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
