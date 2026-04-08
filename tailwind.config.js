import colors from 'tailwindcss/colors';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        green: '#64ffda',
        primary: colors.blue,
        secondary: colors.gray,
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
      boxShadow: {
        'deep': '0 4px 20px -2px rgba(0, 0, 0, 0.2)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  plugins: [
    forms,
    typography,
  ],
};