module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'chess-dark': '#2b100d',
        'chess-bg': '#2c110d',
        'chess-brown': '#8d4d2d',
        'chess-gold': '#f4c35d',
      },
      boxShadow: {
        'panel': '0 10px 0 rgba(58, 21, 10, 0.6)',
        'glow': '0 0 0 4px rgba(255,255,255,0.12)',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
