/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        'fit-content': 'fit-content',
        '750': '750px',
      },
      colors: {
        accents: {
          0: "#2D2D2D",
          1: "#484848",
          2: "#2f3336",
          3: "#444",
        },
        customBlue: '#3B82F6',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
