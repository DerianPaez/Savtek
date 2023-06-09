/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#279CD7',
        gray: '#B5BCCB',
        blue: '#0E1113'
      },
      gradientColorStops: {
        primary: '#00AAFF',
        lightBlue: '#137DB3',
        secondary: '#1181BA'
      },
      gridTemplateColumns: {
        header: 'max-content 1fr max-content max-content',
        services: '1fr 0.4fr'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
}
