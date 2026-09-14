/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Viltanalys dark system
        bg: {
          DEFAULT: '#141414',
          elevated: '#212121',
        },
        text: {
          primary: '#F0F0F0',
          muted: '#666666',
        },
        border: '#292929',
        cta: {
          bg: '#F0F0F0',
          text: '#141414',
        },
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'display-sm': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['64px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        'cta': '8px',
      },
      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [],
}
