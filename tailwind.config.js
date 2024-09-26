/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm:'320px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
    },
    extend: {
      colors: {
        defaultcolor: '#23283C',
        defaultcolordarker: '#191C2A',
        textcolor: '#919DD2',
      },
    },
  },
  plugins: [],
}

