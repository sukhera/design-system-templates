# Dark Theme

Rich, vibrant dark mode with neon-inspired gradients and dramatic contrast.

---

## Philosophy

Dark mode in this system isn't just inverted colors—it's a complete visual experience:

1. **Neon Vibrancy** – Gradients glow against dark backgrounds
2. **Dramatic Contrast** – High contrast for excellent readability
3. **Rich Blacks** – Deep backgrounds enhance gradient impact
4. **Elevated Shadows** – Lighter shadows create depth in darkness

---

## Color Palette

### Background Colors

```css
:root[data-theme="dark"] {
  --bg-primary: #0D0D0D;      /* Deep black */
  --bg-secondary: #1A1A1A;    /* Card backgrounds */
  --bg-tertiary: #2A2A2A;     /* Elevated surfaces */
  --bg-hover: #3D3D3D;        /* Hover states */
}
```

### Text Colors

```css
:root[data-theme="dark"] {
  --text-primary: #FAFAFA;    /* High contrast white */
  --text-secondary: #DEDEDE;  /* Body text */
  --text-tertiary: #B0B0B0;   /* Muted text */
  --text-disabled: #808080;   /* Disabled */
}
```

### Gradients (Enhanced for Dark)

Gradients become more vibrant on dark backgrounds:

```css
/* Neon sunset - more saturated */
--gradient-sunset-dark: linear-gradient(135deg, #FF5252 0%, #FF6B9D 50%, #C73E8A 100%);

/* Electric ocean */
--gradient-ocean-dark: linear-gradient(135deg, #5B6FEE 0%, #8B5CF6 50%, #F093FB 100%);

/* Aurora lights */
--gradient-aurora-dark: linear-gradient(135deg, #00F5A0 0%, #00D9F5 33%, #A78BFA 66%, #F472B6 100%);

/* Midnight neon */
--gradient-midnight: linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%);
```

---

## Component Adaptations

### Buttons (Dark Mode)

**Primary Gradient Button:**
```tsx
<button className="
  dark:bg-gradient-sunset-dark
  dark:shadow-[0_8px_32px_rgba(255,107,107,0.4)]
  dark:hover:shadow-[0_0_0_4px_rgba(255,107,107,0.2),_0_8px_32px_rgba(255,107,107,0.5)]
">
  Dark Mode Button
</button>
```

**Glass Button (Dark):**
```tsx
<button className="
  dark:bg-white/10
  dark:backdrop-blur-xl
  dark:border-white/20
  dark:text-white
  dark:hover:bg-white/20
">
  Glass Button
</button>
```

### Cards (Dark Mode)

**Standard Card:**
```tsx
<div className="
  dark:bg-gray-900
  dark:border-gray-800
  dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]
  dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)]
">
  Card content
</div>
```

**Gradient Card:**
```tsx
<div className="
  dark:bg-gradient-ocean-dark
  dark:shadow-[0_8px_32px_rgba(139,92,246,0.4)]
  dark:hover:shadow-[0_0_0_4px_rgba(139,92,246,0.2),_0_12px_40px_rgba(139,92,246,0.5)]
">
  Glowing gradient card
</div>
```

**Glass Card (Over Dark Gradient):**
```tsx
<div className="
  dark:bg-white/5
  dark:backdrop-blur-2xl
  dark:border-white/10
  dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
">
  Ultra glass effect
</div>
```

### Inputs (Dark Mode)

**Text Input:**
```tsx
<input className="
  dark:bg-gray-900
  dark:border-gray-700
  dark:text-white
  dark:placeholder:text-gray-500
  dark:hover:border-gray-600
  dark:focus:border-transparent
  dark:focus:ring-4
  dark:focus:ring-coral-500/30
  dark:focus:bg-gradient-to-r
  dark:focus:from-coral-500/10
  dark:focus:to-purple-500/10
" />
```

### Navigation (Dark Mode)

**Glass Header:**
```tsx
<header className="
  dark:bg-gray-900/80
  dark:backdrop-blur-xl
  dark:border-gray-800
">
  Navigation
</header>
```

---

## Neon Glow Effects

Special glow effects for dark mode:

### Text Glow

```css
.dark .text-neon-glow {
  text-shadow:
    0 0 10px rgba(255, 107, 107, 0.8),
    0 0 20px rgba(255, 107, 107, 0.6),
    0 0 30px rgba(255, 107, 107, 0.4),
    0 2px 8px rgba(0, 0, 0, 0.4);
}
```

### Card Glow

```css
.dark .card-neon {
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 8px 32px rgba(255, 107, 107, 0.3),
    0 0 60px rgba(255, 107, 107, 0.2);
}
```

### Button Glow (Hover)

```css
.dark .button:hover {
  box-shadow:
    0 0 0 4px rgba(255, 107, 107, 0.2),
    0 8px 32px rgba(255, 107, 107, 0.5),
    0 0 80px rgba(255, 107, 107, 0.3);
}
```

---

## Background Patterns

### Gradient Mesh (Dark)

```tsx
<div className="
  dark:bg-gray-950
  dark:bg-[radial-gradient(at_20%_30%,_rgba(102,126,234,0.3)_0px,_transparent_50%),
             radial-gradient(at_80%_20%,_rgba(139,92,246,0.3)_0px,_transparent_50%),
             radial-gradient(at_60%_80%,_rgba(240,147,251,0.3)_0px,_transparent_50%),
             radial-gradient(at_30%_70%,_rgba(79,172,254,0.3)_0px,_transparent_50%)]
">
  Neon mesh background
</div>
```

### Dotted Grid (Subtle)

```css
.dark-grid {
  background-color: #0D0D0D;
  background-image:
    radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

---

## Implementation

### Tailwind Dark Mode

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode specific colors
        'dark-bg': {
          primary: '#0D0D0D',
          secondary: '#1A1A1A',
          tertiary: '#2A2A2A',
        },
      },
      boxShadow: {
        // Enhanced shadows for dark mode
        'dark-sm': '0 2px 8px rgba(0, 0, 0, 0.6)',
        'dark-md': '0 4px 16px rgba(0, 0, 0, 0.6)',
        'dark-lg': '0 8px 32px rgba(0, 0, 0, 0.7)',
        'dark-xl': '0 16px 48px rgba(0, 0, 0, 0.8)',

        // Neon glows
        'neon-coral': '0 0 0 4px rgba(255, 107, 107, 0.2), 0 8px 32px rgba(255, 107, 107, 0.5)',
        'neon-purple': '0 0 0 4px rgba(139, 92, 246, 0.2), 0 8px 32px rgba(139, 92, 246, 0.5)',
        'neon-pink': '0 0 0 4px rgba(236, 72, 153, 0.2), 0 8px 32px rgba(236, 72, 153, 0.5)',
      },
    },
  },
}
```

### React Dark Mode Toggle

```tsx
'use client'

import { useEffect, useState } from 'react'

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(isDarkMode)

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDark = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', !isDark ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleDark}
      className="
        p-3
        bg-gradient-sunset
        dark:bg-gradient-ocean-dark
        rounded-lg
        shadow-coral
        dark:shadow-neon-purple
        hover:scale-110
        transition-all duration-300 ease-bounce
      "
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <IconSun className="w-5 h-5 text-white" />
      ) : (
        <IconMoon className="w-5 h-5 text-white" />
      )}
    </button>
  )
}
```

---

## Dark Mode Examples

### Hero Section (Dark)

```tsx
<section className="
  dark:bg-gradient-to-br
  dark:from-gray-950
  dark:via-purple-950/50
  dark:to-gray-950
">
  <div className="
    dark:bg-[radial-gradient(at_50%_50%,_rgba(139,92,246,0.2)_0px,_transparent_50%)]
  ">
    <h1 className="
      dark:text-white
      dark:drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]
    ">
      Neon Dreams
    </h1>
  </div>
</section>
```

### Feature Grid (Dark)

```tsx
<div className="
  grid grid-cols-3 gap-6
  dark:bg-gray-950
  p-12
">
  {features.map((feature) => (
    <div
      key={feature.id}
      className="
        p-6
        dark:bg-gray-900
        dark:border dark:border-gray-800
        rounded-xl
        dark:shadow-dark-lg
        dark:hover:shadow-neon-coral
        dark:hover:-translate-y-2
        transition-all duration-300
      "
    >
      <div className="
        p-3
        dark:bg-gradient-sunset-dark
        rounded-lg
        inline-flex
        mb-4
      ">
        {feature.icon}
      </div>

      <h3 className="dark:text-white font-bold mb-2">
        {feature.title}
      </h3>

      <p className="dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  ))}
</div>
```

---

## Usage Guidelines

### Do's ✅

- Use vibrant, saturated gradients on dark backgrounds
- Add glow effects to interactive elements
- Maintain high contrast (white text on dark)
- Use deeper shadows for depth
- Embrace neon-inspired accent colors
- Test all components in dark mode
- Respect system dark mode preference

### Don'ts ❌

- Don't use pure black (#000000)
- Don't reduce gradient vibrancy
- Don't ignore shadow adjustments
- Don't use low-contrast text
- Don't forget to test glassmorphism
- Don't ignore accessibility in dark mode

---

## Accessibility (Dark Mode)

### Contrast Requirements

All dark mode combinations meet WCAG AA:

| Combination | Ratio | Rating |
|-------------|-------|--------|
| white on gray-900 | 18.5:1 | AAA ✓✓✓ |
| gray-200 on gray-900 | 14.2:1 | AAA ✓✓✓ |
| white on coral-600 | 4.8:1 | AA ✓ |
| white on purple-600 | 5.4:1 | AA ✓ |

---

**Last Updated:** 2025-11-17
