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
      translate: ['group-hover', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
