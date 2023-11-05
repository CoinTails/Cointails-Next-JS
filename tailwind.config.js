/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    sans: ['system-ui', 'Helvetica Neue', 'Helvetica', 'Arial'],
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'xs': '360px',  // Custom screen breakpoint for Infinix Hot 6
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        'purple': '#7149E3', // Replace with your desired color code
      },
      fontFamily: {
        'bruno-ace': ['Bruno Ace', 'sans'],
        'mona-sans': ['Mona Sans', 'sans'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}