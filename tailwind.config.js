/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'trading-primary': '#1a1a2e',
        'trading-secondary': '#16213e',
        'trading-accent': '#0f3460',
        'trading-success': '#00ff88',
        'trading-warning': '#ffb347',
        'trading-danger': '#ff6b6b',
        'trading-gold': '#ffd700',
        'mlm-blue': '#2563eb',
        'mlm-purple': '#7c3aed',
        'mlm-gradient-start': '#667eea',
        'mlm-gradient-end': '#764ba2'
      },
      fontFamily: {
        'trading': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  plugins: [],
}