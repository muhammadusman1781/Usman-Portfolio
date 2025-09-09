/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "teal-50": "#ecfeff",
        "teal-100": "#ccfbf1",
        "teal-200": "#99f6e4",
        "teal-300": "#5eead4",
        "teal-400": "#2dd4bf",
        "teal-500": "#14b8a6",
        "teal-600": "#0d9488",
        "teal-700": "#0f766e",
        "teal-800": "#115e59",
        "teal-900": "#134e4a",
      }
    },
  },
  plugins: [],
}
