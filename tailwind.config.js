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
      boxShadow: {
        'steel': '0 1px 1px 0px rgba(255, 255, 255, .2)',
      },
      maxWidth: {
        '240': '240px',
      },
      colors: {
        'royal-black': '#111111', 
        'royal-gray': '#333333', 
        'royal-lightgray': '#888888', 
        'royal-darkgray': '#666666',
        // codebase logo colors
        'color-angular': '#c3002f',
        'color-gatsby': '#663399',
        'color-html5': '#e34c26',
        'color-nextjs': '#F5F5F5',
        'color-nuxtjs': '#00DC82',
        'color-react': '#61dafb',
        'color-svelte': '#FF3E00',
        'color-vue': '#41b883',
        'color-tailwind': '#38bdf8',
      },
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
