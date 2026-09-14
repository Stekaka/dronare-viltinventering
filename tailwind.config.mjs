/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Superdesign editorial navy palette
        navy: {
          DEFAULT: '#0f172a',
          light: '#1e293b',
          dark: '#0a0f1a',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['80px', { lineHeight: '1.1', letterSpacing: '-2.5px' }],
        'hero-md': ['60px', { lineHeight: '1.1', letterSpacing: '-2px' }],
        'hero-sm': ['40px', { lineHeight: '1.15', letterSpacing: '-1.5px' }],
      },
      letterSpacing: {
        'tighter': '-2.5px',
        'tight-md': '-2px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
