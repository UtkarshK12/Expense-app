/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '768px',
      // => @media (min-width: 768px) { ... }

    }
  },
  plugins: [],
}

