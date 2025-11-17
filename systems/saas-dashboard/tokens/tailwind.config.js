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
      colors: {
        // Grays (Neutral Palette)
        gray: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Primary Brand (Blue)
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Success (Green)
        green: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          900: '#14532D',
        },
        // Warning (Amber)
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          900: '#78350F',
        },
        // Error/Danger (Red)
        red: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          900: '#7F1D1D',
        },
        // Info (Sky Blue)
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          900: '#0C4A6E',
        },
        // Purple (Premium/Innovation)
        purple: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
        },
        // Indigo (Secondary Actions)
        indigo: {
          50: '#EEF2FF',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        // Semantic Aliases
        primary: {
          DEFAULT: '#2563EB',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        success: {
          DEFAULT: '#16A34A',
          50: '#F0FDF4',
          100: '#DCFCE7',
          600: '#16A34A',
        },
        warning: {
          DEFAULT: '#D97706',
          50: '#FFFBEB',
          100: '#FEF3C7',
          600: '#D97706',
        },
        error: {
          DEFAULT: '#DC2626',
          50: '#FEF2F2',
          100: '#FEE2E2',
          600: '#DC2626',
        },
        info: {
          DEFAULT: '#0284C7',
          50: '#F0F9FF',
          100: '#E0F2FE',
          600: '#0284C7',
        },
      },
      spacing: {
        '0': '0',
        '0.5': '0.125rem',    // 2px
        '1': '0.25rem',       // 4px
        '1.5': '0.375rem',    // 6px
        '2': '0.5rem',        // 8px
        '3': '0.75rem',       // 12px
        '4': '1rem',          // 16px
        '5': '1.25rem',       // 20px
        '6': '1.5rem',        // 24px
        '8': '2rem',          // 32px
        '10': '2.5rem',       // 40px
        '12': '3rem',         // 48px
        '16': '4rem',         // 64px
        '20': '5rem',         // 80px
        '24': '6rem',         // 96px
        '32': '8rem',         // 128px
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],           // 12px / 16px
        sm: ['0.8125rem', { lineHeight: '1.25rem' }],      // 13px / 20px
        base: ['0.875rem', { lineHeight: '1.25rem' }],     // 14px / 20px
        lg: ['1rem', { lineHeight: '1.5rem' }],            // 16px / 24px
        xl: ['1.125rem', { lineHeight: '1.75rem' }],       // 18px / 28px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],         // 24px / 32px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],    // 30px / 36px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],      // 36px / 40px
        '5xl': ['3rem', { lineHeight: '3rem' }],           // 48px / 48px
        '6xl': ['3.75rem', { lineHeight: '3.75rem' }],     // 60px / 60px
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          '"SF Mono"',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',      // 2px
        DEFAULT: '0.25rem',  // 4px
        md: '0.375rem',      // 6px
        lg: '0.5rem',        // 8px
        xl: '0.75rem',       // 12px
        '2xl': '1rem',       // 16px
        full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        none: 'none',
        // Focus states
        'focus-primary': '0 0 0 3px rgba(37, 99, 235, 0.1)',
        'focus-error': '0 0 0 3px rgba(220, 38, 38, 0.1)',
        'focus-success': '0 0 0 3px rgba(22, 163, 74, 0.1)',
      },
      transitionDuration: {
        fast: '150ms',
        DEFAULT: '200ms',
        slow: '300ms',
        slower: '500ms',
      },
      transitionTimingFunction: {
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        '7xl': '80rem',      // 1280px
        '8xl': '90rem',      // 1440px
      },
      zIndex: {
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50',
      },
    },
  },
  plugins: [
    // Recommended plugins for forms and typography
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
