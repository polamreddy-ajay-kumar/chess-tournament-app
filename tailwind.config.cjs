module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        panel: '0 10px 0 rgba(58, 21, 10, 0.6)',
        glow: '0 0 0 4px rgba(255,255,255,0.12)',
      },
      fontFamily: {
        display: ['"Baloo 2"', 'sans-serif'],
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 205, 96, 0.3)' },
          '50%': { boxShadow: '0 0 0 12px rgba(255, 205, 96, 0.06)' },
        },
      },
    },
  },
  plugins: [],
};
