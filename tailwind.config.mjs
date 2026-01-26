/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#0A2540',
          50: '#E8EFF5',
          100: '#D1DFEB',
          200: '#A3BFD7',
          300: '#759FC3',
          400: '#477FAF',
          500: '#195F9B',
          600: '#14496B',
          700: '#0F333B',
          800: '#0A2540',
          900: '#05172A',
        },
        'steel': {
          DEFAULT: '#4A5568',
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
