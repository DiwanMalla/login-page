/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6666ff",
        login: "#33d6ff",
      },
    },
  },
  plugins: [],
};
