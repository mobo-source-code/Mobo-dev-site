module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: "'Ubuntu', sans-serif",
        sub: "'Varela Round', sans-serif",
        text: "'Open Sans', sans-serif"
      },
      colors: {
        prime: "#222831",
        sec: "#00ADB5"
      }
    },
  },
  plugins: [],
}
