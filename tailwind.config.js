/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {'royal-black': '#0A0A0A', 'royal-gray': '#333333',},
      translate: ['group-hover', 'hover'],
      spacing: {
        '76': '19.1rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
