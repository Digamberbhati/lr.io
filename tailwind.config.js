/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'highlight' : "#FABC3F",
        'darkyellow':"#ca8a04",
        'background': "#FABC3F",
        'lightBackground':"#F8F8F8",
        'bgnav': "#000",
        'textlight': "#f4f4f5",
        'textdim':"#a1a1aa",
        "textdark":"#18181b"
      }
    },
  },
  plugins: [],
}
