/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'color-primary': '#0B0D17',
        'color-secondary': '#D0D6F9',
        'color-tertiary': '#FFFFF',
      },
      fontFamily: {
        sans: ['var(--font-barlow)'],
        mono: ['var(--font-bellefair)'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translate(0%)' },
        },

        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'  },
        },
     
        slideOut: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translate(100%)' },
        },
      },
      animation: {
        slideIn: 'slideIn 500ms ease-in-out forwards',
        slideOut: 'slideOut 400ms ease-in-out forwards',
        appear: 'appear 400ms ease-in-out forwards'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
