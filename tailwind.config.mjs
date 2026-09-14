/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Dark system inspired by Linear/Viltanalys
        bg: {
          primary: '#0A0A0A',
          secondary: '#0D0D0D',
          tertiary: '#141414',
          elevated: '#1A1A1A',
        },
        text: {
          primary: '#E4E4E7',
          secondary: '#A1A1AA',
          tertiary: '#71717A',
          inverse: '#18181B',
        },
        border: {
          primary: 'rgba(255, 255, 255, 0.08)',
          secondary: 'rgba(255, 255, 255, 0.12)',
        },
        accent: {
          primary: '#10B981',
          hover: '#059669',
          muted: 'rgba(16, 185, 129, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
      maxWidth: {
        'prose': '65ch',
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
