module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af",
        secondary: "#9ca3af",
        accent: "#dc2626",
      },
    },
  },
  plugins: [],
};
