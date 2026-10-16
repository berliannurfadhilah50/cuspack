/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      },
      colors: {
        emerald: {
          50: '#f0fdf5',
          100: '#dcfce9',
          200: '#bbf7d1',
          300: '#86efad',
          400: '#4ade80',
          500: '#10b981',
          600: '#0f9d6e',
          700: '#0b7a55',
          800: '#0b5d42',
          900: '#0b3d2e',
          950: '#062820',
        },
        cream: {
          50: '#fefcf7',
          100: '#fdf8ee',
          200: '#f8f0dc',
          300: '#f4efe4',
          400: '#e8dcc0',
          500: '#d4c69e',
        },
        gold: {
          400: '#d4af6a',
          500: '#c49b4e',
          600: '#a8853a',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 4s',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'slide-right': 'slideRight 0.3s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
