/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f8faf8',
          100: '#e8efe8',
          200: '#d1e0d1',
          300: '#adc5ad',
          400: '#85a685',
          500: '#658565',
          600: '#4d684d',
          700: '#3f533f',
          800: '#364436',
          900: '#2f392f',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};