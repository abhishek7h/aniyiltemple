/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        malayalam: ["Gayathri", "sans-serif"], // or 'Uroob'
      },
    },
  },
  plugins: [],
};
