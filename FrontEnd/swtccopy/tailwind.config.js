/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "foot-link": "rgb(255 255 255 / var(--tw-bg-opacity, 1))",
        "foot-text": "rgb(200 200 200 / var(--tw-bg-opacity, 1))",
      },
    },
  },
  plugins: [],
};
