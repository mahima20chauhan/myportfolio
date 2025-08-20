/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode with 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Blue for buttons/links
          dark: '#1e40af',   // Darker shade of blue
        },
        background: {
          light: '#fffaf5',  // Light background
          dark: '#1c1c1c',   // Dark background
        },
        text: {
          primary: '#111827',   // Dark text for light mode
          secondary: '#374151', // Subtle text
          light: '#f9fafb',     // Light text for dark mode
        },
      },
    },
  },
  plugins: [],
};
