/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0e0d',
          900: '#141a18',
          800: '#1e2623',
          700: '#2a342f',
        },
        charcoal: {
          900: '#1a1f1e',
          800: '#262d2b',
          700: '#384440',
          600: '#4a5854',
          500: '#6b7871',
        },
        paper: {
          50: '#fafaf9',
          100: '#f5f4f1',
          200: '#ebe9e3',
          300: '#ddd9d0',
        },
        moss: {
          700: '#3d5a4a',
          600: '#4a6b58',
          500: '#5a7d68',
          400: '#6d9179',
        },
        thermal: {
          600: '#d97706',
          500: '#ea580c',
          400: '#f59e0b',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        'prose': '65ch',
        'prose-wide': '75ch',
      },
      borderRadius: {
        'none': '0',
        'sm': '0',
      },
    },
  },
  plugins: [],
}
