/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "notion-bg": "#ffffff",
        "notion-bg-dark": "#191919",
        "notion-text": "#37352f",
        "notion-text-dark": "#ffffff",
        "notion-gray": "#787774",
        "notion-gray-dark": "#9b9a97",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
