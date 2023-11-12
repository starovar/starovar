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
      maxWidth: {
        '240': '240px',
      },
      colors: {'royal-black': '#111111', 'royal-gray': '#333333', 'royal-lightgray': '#888888', 'royal-darkgray': '#666666',},
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
