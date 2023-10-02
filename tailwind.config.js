/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'ochre': '#CCB35B',
        'c-grey': '#FFFFFF99',
      },
      screens: {
        '3xl': '1706px',
        '4xl': '1919px',
        '5xl': '2047px',
        '6xl': '2303px',
        '7xl': '3071px',
        '8xl': '4607px',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        unbounded: ['var(--font-unbounded)'],
        montserrat: ['var(--font-montserrat)'],
        exo2: ['var(--font-exo2)']
      },
    },
  },
  plugins: [],
}
