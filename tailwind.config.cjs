/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        gray: '#B5BCCB',
        blue: '#0E1113'
      },
      gradientColorStops: {
        primary: '#00AAFF',
        secondary: '#3C5A69'
      },
      gridTemplateColumns: {
        header: 'max-content max-content 1fr max-content max-content'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
