/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        matcha:       '#B5FF47',
        coffee:       '#FF9D3D',
        pink:         '#FF3D7F',
        yellow:       '#FFD600',
        purple:       '#7C3AED',
        dark:         '#0D0D0D',
        surface:      '#1A1A1A',
        card:         '#242424',
        border:       '#2E2E2E',
        muted:        '#707070',
        'matcha-bg':  '#0D1F0D',
        'coffee-bg':  '#180A00',
        // New vibrant screen colors
        cyan:         '#00C8D4',
        coral:        '#FF5252',
        lime:         '#00CC44',
        'hot-pink':   '#FF2D78',
        'warm-orange':'#FF6B00',
        'bright-green':'#4ADE80',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"Outfit"', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['8.5rem',  { lineHeight: '1' }],
        '11xl': ['10rem',   { lineHeight: '0.9' }],
        '12xl': ['12rem',   { lineHeight: '0.85' }],
      },
      keyframes: {
        ping_slow: {
          '0%':   { transform: 'scale(1)',   opacity: '0.7' },
          '100%': { transform: 'scale(2)',   opacity: '0'   },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        marquee: {
          from: { transform: 'translateX(0%)' },
          to:   { transform: 'translateX(-50%)' },
        },
        ripple: {
          '0%':   { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%':      { transform: 'rotate(10deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0px)',   animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%':      { transform: 'translateY(-16px)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        pop: {
          '0%':   { transform: 'scale(0.8)', opacity: '0' },
          '70%':  { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
      },
      animation: {
        ping_slow:    'ping_slow 1.8s ease-out infinite',
        float:        'float 3s ease-in-out infinite',
        marquee:      'marquee 14s linear infinite',
        ripple:       'ripple 1.6s ease-out infinite',
        wiggle:       'wiggle 0.6s ease-in-out infinite',
        'spin-slow':  'spin-slow 12s linear infinite',
        'bounce-slow':'bounce-slow 1.6s ease-in-out infinite',
        pop:          'pop 0.45s ease-out forwards',
      },
    },
  },
  plugins: [],
}
