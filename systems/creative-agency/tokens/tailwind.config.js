/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Font Families
      fontFamily: {
        display: ['Cal Sans', 'DM Sans', 'Plus Jakarta Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'Menlo', 'monospace'],
      },

      // Colors
      colors: {
        gray: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F7F7F7',
          200: '#ECECEC',
          300: '#DEDEDE',
          400: '#B0B0B0',
          500: '#808080',
          600: '#5C5C5C',
          700: '#3D3D3D',
          800: '#2A2A2A',
          900: '#1A1A1A',
          950: '#0D0D0D',
        },
        coral: {
          400: '#FF8E8E',
          500: '#FF6B6B',
          600: '#E85656',
          700: '#D14545',
        },
        purple: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        pink: {
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
        },
        success: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
        },
        error: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
        },
      },

      // Gradient Backgrounds
      backgroundImage: {
        'gradient-sunset': 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 25%, #FE6B8B 75%, #C73866 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #A8EDEA 0%, #FED6E3 33%, #FFD1FF 66%, #C1FBA4 100%)',
        'gradient-midnight': 'linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%)',

        // Semantic gradients
        'gradient-success': 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
        'gradient-warning': 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
        'gradient-error': 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
        'gradient-info': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',

        // Mesh gradients
        'mesh-pastel': `radial-gradient(at 0% 0%, #FFD1DC 0px, transparent 50%),
                       radial-gradient(at 100% 0%, #FFDAC1 0px, transparent 50%),
                       radial-gradient(at 100% 100%, #B2F7EF 0px, transparent 50%),
                       radial-gradient(at 0% 100%, #E0BBE4 0px, transparent 50%)`,

        'mesh-neon': `radial-gradient(at 20% 30%, #667EEA 0px, transparent 50%),
                     radial-gradient(at 80% 20%, #764BA2 0px, transparent 50%),
                     radial-gradient(at 60% 80%, #F093FB 0px, transparent 50%),
                     radial-gradient(at 30% 70%, #4FACFE 0px, transparent 50%)`,

        'mesh-warm': `radial-gradient(at 40% 20%, #FF6B6B 0px, transparent 40%),
                     radial-gradient(at 60% 80%, #FE6B8B 0px, transparent 40%),
                     radial-gradient(at 0% 50%, #FF8E53 0px, transparent 50%)`,
      },

      // Box Shadows
      boxShadow: {
        'xs': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'sm': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.12)',
        'xl': '0 12px 24px rgba(0, 0, 0, 0.15)',
        '2xl': '0 20px 40px rgba(0, 0, 0, 0.2)',
        '3xl': '0 32px 64px rgba(0, 0, 0, 0.25)',

        // Colored shadows
        'coral': '0 8px 24px rgba(255, 107, 107, 0.3)',
        'purple': '0 8px 24px rgba(139, 92, 246, 0.3)',
        'pink': '0 8px 24px rgba(236, 72, 153, 0.3)',

        // Glow effects
        'glow-coral': '0 0 0 4px rgba(255, 107, 107, 0.1), 0 8px 24px rgba(255, 107, 107, 0.3)',
        'glow-purple': '0 0 0 4px rgba(139, 92, 246, 0.1), 0 8px 24px rgba(139, 92, 246, 0.3)',
        'glow-pink': '0 0 0 4px rgba(236, 72, 153, 0.1), 0 8px 24px rgba(236, 72, 153, 0.3)',
      },

      // Border Radius
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        'full': '9999px',
      },

      // Spacing (8px base)
      spacing: {
        '0': '0',
        '0.5': '4px',
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
        '24': '192px',
      },

      // Font Sizes
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['32px', { lineHeight: '40px' }],
        '4xl': ['40px', { lineHeight: '48px' }],
        '5xl': ['56px', { lineHeight: '60px' }],
        '6xl': ['72px', { lineHeight: '76px' }],
        '7xl': ['96px', { lineHeight: '100px' }],
      },

      // Animation Durations
      transitionDuration: {
        'instant': '100ms',
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
        'slower': '800ms',
      },

      // Animation Timing Functions
      transitionTimingFunction: {
        'default': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },

      // Keyframes
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fadeInUp': {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'scaleIn': {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          'to': { transform: 'rotate(360deg)' },
        },
      },

      // Animations
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'fadeInUp': 'fadeInUp 500ms ease-out forwards',
        'scaleIn': 'scaleIn 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
      },

      // Backdrop Blur (for glassmorphism)
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '20px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [
    // Add custom utilities for gradient text
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '100%',
        },
        '.text-gradient-animated': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-size': '200% auto',
          'animation': 'gradient-shift 8s ease infinite',
        },
        '.glass-light': {
          'background': 'rgba(255, 255, 255, 0.7)',
          'backdrop-filter': 'blur(20px) saturate(180%)',
          'border': '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.glass-dark': {
          'background': 'rgba(26, 26, 26, 0.7)',
          'backdrop-filter': 'blur(20px) saturate(180%)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
