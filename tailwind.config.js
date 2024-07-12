/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "red-ink": "#AE1E44",
        "white-ink": "#FFFEF9",
        "orange-ink": "#FF6807",
      },
      colors: {},
      textColor: {
        "red-ink": "#AE1E44",
        "white-ink": "#FFFEF9",
        "orange-ink": "#FF6807",
      },
    },
  },
  plugins: [],
};
