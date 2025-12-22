/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // Terminal-themed color palette - maintaining the unique CRT aesthetic
      colors: {
        terminal: {
          // Primary terminal green shades
          green: {
            DEFAULT: '#00ff00',
            bright: '#33ff33',
            dim: '#00cc00',
            glow: 'rgba(0, 255, 0, 0.5)',
          },
          // Background shades for depth
          bg: {
            DEFAULT: '#0a0a0a',
            dark: '#050505',
            darker: '#000000',
            light: '#0f0f0f',
            lighter: '#1a1a1a',
          },
          // Border and UI element colors
          border: {
            DEFAULT: '#1a1a1a',
            light: '#2a2a2a',
            bright: '#333333',
          },
          // Text colors
          text: {
            primary: '#ffffff',
            secondary: '#cccccc',
            tertiary: '#888888',
            dim: '#444444',
          },
        },
        // Semantic color mappings for design system consistency
        primary: {
          DEFAULT: '#00ff00',
          foreground: '#0a0a0a',
          glow: 'rgba(0, 255, 0, 0.3)',
        },
        background: {
          DEFAULT: '#050505',
          secondary: '#0a0a0a',
          tertiary: '#0f0f0f',
        },
        foreground: {
          DEFAULT: '#ffffff',
          muted: '#cccccc',
          subtle: '#888888',
        },
        accent: {
          DEFAULT: '#00ff00',
          bright: '#33ff33',
          dim: '#00cc00',
        },
        muted: {
          DEFAULT: '#1a1a1a',
          foreground: '#888888',
        },
      },
      // Typography system
      fontFamily: (() => {
        // Define monospace font stack once for consistency
        const monoFontStack = [
          'JetBrains Mono',
          'Consolas',
          'Monaco',
          'Courier New',
          'monospace',
        ]
        return {
          mono: monoFontStack,
          display: monoFontStack,
          body: monoFontStack,
        }
      })(),
      fontSize: {
        'terminal-xs': [
          '0.65rem',
          { lineHeight: '1rem', letterSpacing: '0.05em' },
        ],
        'terminal-sm': [
          '0.75rem',
          { lineHeight: '1.25rem', letterSpacing: '0.05em' },
        ],
        'terminal-base': [
          '0.875rem',
          { lineHeight: '1.5rem', letterSpacing: '0.025em' },
        ],
        'terminal-lg': [
          '1rem',
          { lineHeight: '1.75rem', letterSpacing: '0.025em' },
        ],
        'terminal-xl': [
          '1.25rem',
          { lineHeight: '2rem', letterSpacing: '0.025em' },
        ],
        'terminal-2xl': [
          '1.5rem',
          { lineHeight: '2.25rem', letterSpacing: '0.025em' },
        ],
      },
      // Enhanced animations for interactive terminal UI
      animation: {
        // Existing
        fadeIn: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        // New terminal-specific animations
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan-line': 'scanLine 8s linear infinite',
        flicker: 'flicker 0.15s infinite',
        'terminal-blink': 'terminalBlink 1s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'terminal-glitch':
          'terminalGlitch 0.3s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      keyframes: {
        // Existing
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // New terminal-specific keyframes
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow:
              '0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow:
              '0 0 30px rgba(0, 255, 0, 0.7), 0 0 60px rgba(0, 255, 0, 0.4)',
          },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%': { opacity: '0.01' },
          '50%': { opacity: '0.02' },
          '100%': { opacity: '0.01' },
        },
        terminalBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          from: {
            textShadow:
              '0 0 10px rgba(0, 255, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.3)',
          },
          to: {
            textShadow:
              '0 0 20px rgba(0, 255, 0, 0.8), 0 0 30px rgba(0, 255, 0, 0.5)',
          },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        terminalGlitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      // Spacing scale for consistent layouts
      spacing: {
        terminal: '0.5rem',
        'terminal-sm': '0.75rem',
        'terminal-md': '1rem',
        'terminal-lg': '1.5rem',
        'terminal-xl': '2rem',
      },
      // Border radius for terminal aesthetic
      borderRadius: {
        terminal: '2px',
        'terminal-sm': '4px',
        'terminal-md': '6px',
        'terminal-lg': '8px',
      },
      // Box shadows with terminal glow effects
      boxShadow: {
        terminal: '0 0 20px rgba(0, 255, 0, 0.1)',
        'terminal-md': '0 0 30px rgba(0, 255, 0, 0.2)',
        'terminal-lg': '0 0 40px rgba(0, 255, 0, 0.3)',
        'terminal-glow':
          '0 0 20px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 255, 0, 0.3)',
        'terminal-glow-strong':
          '0 0 30px rgba(0, 255, 0, 0.7), 0 0 60px rgba(0, 255, 0, 0.4)',
      },
      // Custom backdrop blur for terminal glass effects
      backdropBlur: {
        terminal: '12px',
        'terminal-md': '16px',
        'terminal-lg': '24px',
      },
      // Z-index scale for layering
      zIndex: {
        'terminal-base': '1',
        'terminal-overlay': '10',
        'terminal-header': '50',
        'terminal-modal': '100',
        'terminal-tooltip': '150',
      },
      // Transition timings for consistent UX
      transitionDuration: {
        terminal: '150ms',
        'terminal-slow': '300ms',
      },
      transitionTimingFunction: {
        terminal: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
