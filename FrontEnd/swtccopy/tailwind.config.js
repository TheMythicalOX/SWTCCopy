/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "foot-link": "#fff",
        "foot-text": "#c3c3c3",
        "foot-lower-bg": "#222",
        "foot-bg": "#333",
        "news-bg": "#004b8d",
        "header-bg": "#00498F",
        "campus-bg": "#002950",
      },
    },
  },
  plugins: [],
};
