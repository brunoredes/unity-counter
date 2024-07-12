/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "red-ink": "#AE1E44",
        "white-ink": "#FFFEF9",
        "orange-ink": "#FF6807",
        'orange-ink-100': '#E49D4E'
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
