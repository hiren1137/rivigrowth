/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        text: 'var(--text)',
        muted: 'var(--text-muted)',
        accent: 'var(--accent)',
        border: 'var(--border)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Geist"', '"Switzer"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
        nav: '1280px',
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
      },
    },
  },
  plugins: [],
};
