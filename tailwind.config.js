/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "red-ink": "#AE1E44",
        "magic-white": "#F4FFD3",
        "orange-ink": "#FF6807",
        "orange-ink-100": "#E49D4E",
        "magic-purple-base": "#3C31A7",
        "magic-purple-100": "#BD7DDB",
        "magic-purple-300": "#5971C7",
        "magic-purple-500": "#756DDE",
        "magic-purple-700": "#8157D2",
        "magic-purple-900": "#202057",
        "blue-caitlyn-hair": "#292347",
        "blue-jinx": "#1b6fa5",
        "vi-pink": "#cd4860",
        "golden-cait": "#dbb769",
        "golden-senna": "#f3e579"
      },
      backgroundImage: {
        "top-gradient":
          "linear-gradient(to right, #8157D2, #5971C7) 0% 0% / 100% 50%",
        "bottom-gradient":
          "linear-gradient(to right, #BD7DDB, #756DDE) 0% 50% / 100% 50%",
      },
      colors: {
        "magic-purple-base": "#3C31A7",
        "magic-purple-100": "#BD7DDB",
        "magic-purple-300": "#5971C7",
        "magic-purple-500": "#756DDE",
        "magic-purple-700": "#8157D2",
        "magic-purple-900": "#202057",
        "blue-caitlyn-hair": "#292347",
        "blue-jinx": "#1b6fa5",
        "vi-pink": "#cd4860",
        "golden-cait": "#dbb769",
        "golden-senna": "#f3e579"
      },
      textColor: {
        "red-ink": "#AE1E44",
        "magic-white": "#F4FFD3",
        "orange-ink": "#FF6807",
        "orange-ink-100": "#E49D4E",
        "magic-purple-base": "#3C31A7",
        "blue-caitlyn-hair": "#292347",
        "blue-jinx": "#1b6fa5",
        "vi-pink": "#cd4860",
        "golden-cait": "#dbb769",
        "golden-senna": "#f3e579"
      },
      borderColor: {
        "red-ink": "#AE1E44",
        "magic-white": "#F4FFD3",
        "orange-ink": "#FF6807",
        "orange-ink-100": "#E49D4E",
        "magic-purple-base": "#3C31A7",
        "magic-purple-900": "#202057",
        "blue-caitlyn-hair": "#292347",
        "blue-jinx": "#1b6fa5",
        "vi-pink": "#cd4860",
        "golden-cait": "#dbb769",
        "golden-senna": "#f3e579"
      },
    },
  },
  plugins: [],
};
