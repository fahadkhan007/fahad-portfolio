/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        signature: ['"Dancing Script"', 'cursive'],
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'fade-in-right': 'fade-in-right 0.6s ease forwards',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(270deg, #e0f2ff, #f1f5ff, #e0f2ff)',
      },
    },
  },
  plugins: [],
}
