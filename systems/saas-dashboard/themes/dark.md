# Dark Theme

Complete dark mode implementation for the SaaS Dashboard design system.

---

## Philosophy

Dark mode should:
- Reduce eye strain in low-light environments
- Maintain readability and contrast
- Feel intentional, not just inverted colors
- Support professional work environments
- Preserve brand colors appropriately

---

## Color Mapping

### Backgrounds

| Light Mode | Dark Mode | Usage |
|------------|-----------|-------|
| `gray-0` (#FFFFFF) | `gray-950` (#0A0A0A) | Primary background |
| `gray-50` (#FAFAFA) | `gray-900` (#171717) | Secondary background |
| `gray-100` (#F5F5F5) | `gray-800` (#262626) | Tertiary background, cards |
| `gray-200` (#E5E5E5) | `gray-700` (#404040) | Borders, dividers |

### Foregrounds

| Light Mode | Dark Mode | Usage |
|------------|-----------|-------|
| `gray-900` (#171717) | `gray-50` (#FAFAFA) | Primary text |
| `gray-700` (#404040) | `gray-300` (#D4D4D4) | Secondary text |
| `gray-600` (#525252) | `gray-400` (#A3A3A3) | Tertiary text |
| `gray-500` (#737373) | `gray-500` (#737373) | Muted text |
| `gray-400` (#A3A3A3) | `gray-600` (#525252) | Placeholder |

### Brand Colors

Brand colors remain largely the same but adjust slightly:

```
Primary (Blue):    blue-600 → blue-500 (slightly lighter)
Success (Green):   green-600 → green-500
Warning (Amber):   amber-600 → amber-500
Error (Red):       red-600 → red-500
```

### Shadows

Increase shadow opacity in dark mode:

```css
/* Light mode */
shadow-sm: rgba(0, 0, 0, 0.1)

/* Dark mode */
shadow-sm: rgba(0, 0, 0, 0.3)
```

---

## Implementation

### CSS Variables

```css
:root {
  --background: #FFFFFF;
  --foreground: #171717;
  --muted: #F5F5F5;
  --muted-foreground: #737373;
  --border: #E5E5E5;
  --primary: #2563EB;
}

[data-theme="dark"] {
  --background: #0A0A0A;
  --foreground: #FAFAFA;
  --muted: #262626;
  --muted-foreground: #737373;
  --border: #404040;
  --primary: #3B82F6;
}
```

### Tailwind Config

```javascript
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // ... rest of tokens
      }
    }
  }
}
```

### HTML Setup

```html
<html class="dark">
  <!-- content -->
</html>
```

Or use JavaScript:

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark')

// Set based on system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark')
}
```

---

## Component Examples

### Button

```tsx
<button className="
  px-4 py-2
  bg-blue-600 dark:bg-blue-500
  text-white
  hover:bg-blue-700 dark:hover:bg-blue-600
">
  Primary Button
</button>
```

### Card

```tsx
<div className="
  bg-white dark:bg-gray-800
  border border-gray-200 dark:border-gray-700
  shadow-sm dark:shadow-none
  rounded-lg
  p-6
">
  <h3 className="text-gray-900 dark:text-gray-50 font-medium">
    Card Title
  </h3>
  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
    Card description
  </p>
</div>
```

### Input

```tsx
<input
  type="text"
  className="
    w-full px-3 py-2
    bg-white dark:bg-gray-900
    text-gray-900 dark:text-gray-100
    border border-gray-300 dark:border-gray-700
    placeholder:text-gray-400 dark:placeholder:text-gray-500
    focus:border-blue-600 dark:focus:border-blue-500
    focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900
  "
/>
```

### Navigation

```tsx
<aside className="
  bg-white dark:bg-gray-900
  border-r border-gray-200 dark:border-gray-800
">
  <nav>
    <a className="
      text-gray-600 dark:text-gray-400
      hover:bg-gray-100 dark:hover:bg-gray-800
      hover:text-gray-900 dark:hover:text-gray-100
    ">
      Navigation Item
    </a>
  </nav>
</aside>
```

---

## Theme Toggle Component

```tsx
'use client'

import { useState, useEffect } from 'react'
import { IconSun, IconMoon } from '@/components/icons'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference or localStorage
    const theme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (theme === 'dark' || (!theme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        p-2 rounded
        text-gray-600 dark:text-gray-400
        hover:bg-gray-100 dark:hover:bg-gray-800
        focus:outline-none focus:ring-4
        focus:ring-gray-100 dark:focus:ring-gray-800
      "
      aria-label="Toggle theme"
    >
      {isDark ? (
        <IconSun className="h-5 w-5" />
      ) : (
        <IconMoon className="h-5 w-5" />
      )}
    </button>
  )
}
```

---

## Best Practices

### Do's ✅

- Test all components in dark mode
- Maintain sufficient contrast (4.5:1 minimum)
- Use slightly lighter brand colors in dark mode
- Increase shadow opacity in dark mode
- Respect system preferences
- Persist user choice in localStorage
- Provide a toggle in the UI
- Test with actual dark environments

### Don'ts ❌

- Don't just invert colors
- Don't use pure black (#000000)
- Don't forget to update shadows
- Don't ignore border adjustments
- Don't use the same opacity values
- Don't forget focus states
- Don't make it too dark (eye strain)

---

## Accessibility

### Contrast Requirements

All text must meet WCAG AA standards in both themes:

**Light Mode:**
- gray-900 on white: 16.05:1 ✓✓✓
- gray-600 on white: 8.00:1 ✓✓✓

**Dark Mode:**
- gray-50 on gray-950: 15.52:1 ✓✓✓
- gray-400 on gray-950: 7.42:1 ✓✓✓

### System Integration

```javascript
// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    const isDark = e.matches
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.toggle('dark', isDark)
    }
  })
```

---

## Quick Reference

### Common Classes

```tsx
// Background
bg-white dark:bg-gray-900

// Text
text-gray-900 dark:text-gray-100
text-gray-600 dark:text-gray-400

// Border
border-gray-200 dark:border-gray-700

// Hover
hover:bg-gray-100 dark:hover:bg-gray-800

// Focus ring
focus:ring-blue-100 dark:focus:ring-blue-900
```

---

**Last Updated:** 2025-11-17
