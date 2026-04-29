/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          pet: '#0d6e6e',
          dark: '#0a5454',
          light: '#1a8a8a',
        },
        amber: {
          pet: '#f5a623',
          dark: '#d4891a',
        }
      },
      fontFamily: {
        display: ['Nunito', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
