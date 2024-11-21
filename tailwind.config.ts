import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#f7f7f8",
        "custom-gray2": "#eeeff2",
        "custom-gray3": "#dee3e8",
        "letter-blue": "#00285a",
        "real-green": "#0ccca2",
        "real-green2": "#0bb48f",
        "fake-black": "#38414d",
      },
      fontFamily: {
        gotham: [
          "GothamSSm-Book",
          "Helvetica Neue",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
