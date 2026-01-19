/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        avo: {
          dark: "#386641", // Deep Forest Green
          main: "#6a994e", // Fresh Avocado Green
          light: "#a7c957", // Light Green
          cream: "#f2e8cf", // Organic Cream
          red: "#bc4749", // Accent Red (for CTA/Alerts)
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"], // Use for premium headings
      },
    },
  },
  plugins: [],
};
