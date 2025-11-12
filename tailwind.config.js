/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#B80D2E",     // rojo DonaSonrisas
          yellow: "#FFC93C",  // amarillo DonaSonrisas
          dark: "#1E1E1E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      borderRadius: { xl2: "1rem" }
    },
  },
  plugins: [],
};
