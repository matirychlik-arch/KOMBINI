/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        matcha: '#B5FF47',
        coffee: '#F5A623',
        pink: '#FF3D7F',
        bg: '#090909',
        surface: '#141414',
        card: '#1C1C1C',
        border: '#2A2A2A',
        muted: '#6B6B6B',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        pulse_glow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(0.97)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '100%': { transform: 'scale(2.4)', opacity: 0 },
        },
        fill_up: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spin_slow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        pulse_glow: 'pulse_glow 2.2s ease-in-out infinite',
        ripple: 'ripple 1.4s ease-out infinite',
        fill_up: 'fill_up 3s ease-in-out forwards',
        float: 'float 3s ease-in-out infinite',
        spin_slow: 'spin_slow 8s linear infinite',
      },
    },
  },
  plugins: [],
}
