/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          50: '#f0f5fa',
          100: '#e1ebf5',
          200: '#c3d7eb',
          300: '#a5c3df',
          400: '#88afdb',
          500: '#6a9bd0',
          600: '#4c87c6',
          700: '#2e73bc',
          800: '#0F3460', // Primary navy color from logo
          900: '#072a53',
        },
        'sky': {
          50: '#f0faff',
          100: '#e0f5fe',
          200: '#bae8fd',
          300: '#7dd4fc',
          400: '#38bdf8',
          500: '#A5D7E8', // Light blue from logo
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};