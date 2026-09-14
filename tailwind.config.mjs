/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Editorial forest palette from reference älginventering site
        paper: '#faf6ea',
        ink: {
          DEFAULT: '#242b1e',
          light: '#3f4636',
          muted: '#6b6142',
          pale: '#8f8768',
        },
        forest: {
          DEFAULT: '#2b3324',
          light: '#3d4635',
        },
        cream: {
          DEFAULT: '#efe8d8',
          dark: '#e0d6b0',
          darker: '#d8d2bc',
        },
        gold: {
          DEFAULT: '#d9b877',
          dark: '#c9973f',
          darker: '#7a5230',
        },
        moss: '#a39a7c',
      },
      fontFamily: {
        display: ['Spectral', 'serif'],
        body: ['Karla', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['28px', { lineHeight: '1.14' }],
        'display': ['40px', { lineHeight: '1.14' }],
        'display-lg': ['52px', { lineHeight: '1.14' }],
      },
      maxWidth: {
        'site': '1360px',
      },
    },
  },
  plugins: [],
}
