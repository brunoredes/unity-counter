/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "red-ink": "#AE1E44",
        "white-ink": "#F4FFD3",
        "orange-ink": "#FF6807",
        "orange-ink-100": "#E49D4E",
        "magic-purple-base": "#3C31A7",
        "magic-purple-100": "#BD7DDB",
        "magic-purple-300": "#5971C7",
        "magic-purple-500": "#756DDE",
        "magic-purple-700": "#8157D2",
        "magic-purple-900": "#202057",
        "magic-blue-900": "#202057",
      },
      colors: {},
      textColor: {
        "red-ink": "#AE1E44",
        "white-ink": "#F4FFD3",
        "orange-ink": "#FF6807",
        "orange-ink-100": "#E49D4E",
        "magic-purple-base": "#3C31A7",
      },
      borderColor: {
        "red-ink": "#AE1E44",
        "white-ink": "#F4FFD3",
        "orange-ink": "#FF6807",
        "orange-ink-100": "#E49D4E",
        "magic-purple-base": "#3C31A7",
        "magic-purple-900": "#202057",
        "magic-blue-900": "#202057",
      },
    },
  },
  plugins: [],
};
