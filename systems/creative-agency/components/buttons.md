# Buttons

Bold, gradient-heavy button components designed for creative interfaces with playful interactions.

---

## Overview

Buttons are the primary interactive elements in this system. They embrace bold gradients, smooth animations, and delightful hover effects while maintaining excellent accessibility.

---

## Variants

### Primary Gradient Button

The hero button with vibrant sunset gradient.

**Visual Specs:**
```
Background: gradient-sunset (coral to pink)
Text: white
Border: none
Radius: rounded-lg (12px)
Shadow: shadow-coral
Font: text-base font-semibold
Padding: px-8 py-4 (64px horizontal × 32px vertical)
Height: 56px (large)
```

**States:**
```
Default:    bg-gradient-sunset shadow-coral
Hover:      bg-gradient-sunset shadow-glow-coral transform scale-105
            (gradient shift + glow + slight scale)
Pressed:    scale-98
Focus:      ring-4 ring-coral-500/20
Disabled:   bg-gray-300 text-gray-500 cursor-not-allowed
Loading:    bg-gradient-sunset with spinner
```

**Implementation:**
```tsx
<button className="
  px-8 py-4
  text-base font-semibold
  text-white
  bg-gradient-sunset
  bg-[length:200%_auto]
  rounded-lg
  shadow-coral
  hover:bg-right-center
  hover:shadow-glow-coral
  hover:scale-105
  active:scale-98
  focus:outline-none
  focus:ring-4
  focus:ring-coral-500/20
  disabled:bg-gray-300
  disabled:text-gray-500
  disabled:cursor-not-allowed
  disabled:shadow-none
  transition-all duration-300 ease-smooth
">
  Get Started
</button>
```

---

### Secondary Gradient Button

Ocean gradient for secondary actions.

**Visual Specs:**
```
Background: gradient-ocean (blue to purple)
Text: white
Border: none
Radius: rounded-lg (12px)
Shadow: shadow-purple
Font: text-base font-semibold
Padding: px-8 py-4
```

**States:**
```
Default:    bg-gradient-ocean shadow-purple
Hover:      bg-gradient-ocean shadow-glow-purple scale-105
Pressed:    scale-98
Focus:      ring-4 ring-purple-500/20
Disabled:   bg-gray-300 text-gray-500
```

**Implementation:**
```tsx
<button className="
  px-8 py-4
  text-base font-semibold
  text-white
  bg-gradient-ocean
  bg-[length:200%_auto]
  rounded-lg
  shadow-purple
  hover:bg-right-center
  hover:shadow-glow-purple
  hover:scale-105
  active:scale-98
  focus:outline-none
  focus:ring-4
  focus:ring-purple-500/20
  transition-all duration-300 ease-smooth
">
  Learn More
</button>
```

---

### Outline Gradient Button

Gradient border with transparent background.

**Visual Specs:**
```
Background: transparent
Text: gradient-sunset (gradient text)
Border: 2px gradient border
Radius: rounded-lg (12px)
Shadow: none
Font: text-base font-semibold
Padding: px-8 py-4
```

**States:**
```
Default:    border-2 border-gradient bg-transparent
Hover:      bg-gradient-sunset/10
Pressed:    bg-gradient-sunset/20
Focus:      ring-4 ring-coral-500/20
```

**Implementation:**
```tsx
{/* Gradient border technique using pseudo-element */}
<button className="
  relative
  px-8 py-4
  text-base font-semibold
  bg-white
  rounded-lg
  overflow-hidden
  group
  focus:outline-none
  focus:ring-4
  focus:ring-coral-500/20
  transition-all duration-300 ease-smooth
">
  {/* Gradient border */}
  <span className="
    absolute inset-0
    p-[2px]
    bg-gradient-sunset
    rounded-lg
  ">
    <span className="
      flex items-center justify-center
      w-full h-full
      bg-white
      rounded-lg
      group-hover:bg-transparent
      transition-colors duration-300
    ">
      <span className="bg-gradient-sunset bg-clip-text text-transparent">
        Outline Button
      </span>
    </span>
  </span>
</button>
```

---

### Ghost Gradient Button

Minimal button with gradient text.

**Visual Specs:**
```
Background: transparent
Text: gradient-sunset
Border: none
Radius: rounded-lg
Shadow: none
Font: text-base font-semibold
Padding: px-6 py-3
```

**States:**
```
Default:    bg-transparent text-gradient
Hover:      bg-gradient-sunset/10
Pressed:    bg-gradient-sunset/20
Focus:      ring-4 ring-coral-500/10
```

**Implementation:**
```tsx
<button className="
  px-6 py-3
  text-base font-semibold
  bg-transparent
  rounded-lg
  hover:bg-coral-500/10
  active:bg-coral-500/20
  focus:outline-none
  focus:ring-4
  focus:ring-coral-500/10
  transition-all duration-200 ease-smooth
">
  <span className="bg-gradient-sunset bg-clip-text text-transparent">
    Ghost Action
  </span>
</button>
```

---

### Glass Button

Glassmorphic button over gradient backgrounds.

**Visual Specs:**
```
Background: rgba(255, 255, 255, 0.2)
Backdrop Filter: blur(20px)
Text: white
Border: 1px solid rgba(255, 255, 255, 0.3)
Radius: rounded-xl (16px)
Shadow: shadow-lg
Font: text-base font-semibold
Padding: px-8 py-4
```

**Implementation:**
```tsx
<button className="
  px-8 py-4
  text-base font-semibold
  text-white
  bg-white/20
  backdrop-blur-xl
  backdrop-saturate-180
  border border-white/30
  rounded-xl
  shadow-lg
  hover:bg-white/30
  hover:scale-105
  active:scale-98
  focus:outline-none
  focus:ring-4
  focus:ring-white/20
  transition-all duration-300 ease-smooth
">
  Glass Button
</button>
```

---

## Sizes

### Small
```
Padding: px-4 py-2 (32px horizontal × 16px vertical)
Font: text-sm font-semibold
Height: 40px
Icon Size: 16px
Gap: gap-2 (8px)
Border Radius: rounded-md (8px)
```

### Medium (Default)
```
Padding: px-6 py-3 (48px horizontal × 24px vertical)
Font: text-base font-semibold
Height: 48px
Icon Size: 20px
Gap: gap-2 (8px)
Border Radius: rounded-lg (12px)
```

### Large
```
Padding: px-8 py-4 (64px horizontal × 32px vertical)
Font: text-base font-semibold
Height: 56px
Icon Size: 24px
Gap: gap-3 (12px)
Border Radius: rounded-lg (12px)
```

### Extra Large (Hero CTAs)
```
Padding: px-12 py-6 (96px horizontal × 48px vertical)
Font: text-lg font-bold
Height: 72px
Icon Size: 28px
Gap: gap-3 (12px)
Border Radius: rounded-xl (16px)
```

---

## Icon Buttons

### Gradient Icon Button

```tsx
<button className="
  inline-flex items-center justify-center
  w-12 h-12
  bg-gradient-sunset
  rounded-lg
  shadow-coral
  hover:shadow-glow-coral
  hover:scale-110
  active:scale-95
  focus:outline-none
  focus:ring-4
  focus:ring-coral-500/20
  transition-all duration-200 ease-bounce
">
  <IconHeart className="w-6 h-6 text-white" />
</button>
```

### Glass Icon Button

```tsx
<button className="
  inline-flex items-center justify-center
  w-12 h-12
  bg-white/20
  backdrop-blur-xl
  border border-white/30
  rounded-lg
  hover:bg-white/30
  hover:scale-110
  active:scale-95
  transition-all duration-200 ease-bounce
">
  <IconSettings className="w-6 h-6 text-white" />
</button>
```

---

## Special Effects

### Animated Gradient Button

Gradient that continuously shifts colors.

```tsx
<button className="
  px-8 py-4
  text-base font-semibold
  text-white
  bg-gradient-to-r from-coral-500 via-pink-500 to-purple-500
  bg-[length:200%_auto]
  rounded-lg
  shadow-xl
  animate-gradient-shift
  hover:scale-105
  active:scale-98
  focus:outline-none
  focus:ring-4
  focus:ring-pink-500/20
  transition-transform duration-300 ease-smooth
">
  Animated Gradient
</button>
```

### Shine Effect Button

Subtle shimmer on hover.

```tsx
<button className="
  relative
  px-8 py-4
  text-base font-semibold
  text-white
  bg-gradient-sunset
  rounded-lg
  shadow-coral
  overflow-hidden
  group
  focus:outline-none
  focus:ring-4
  focus:ring-coral-500/20
  transition-all duration-300 ease-smooth
">
  {/* Shine overlay */}
  <span className="
    absolute inset-0
    bg-gradient-to-r from-transparent via-white/30 to-transparent
    translate-x-[-200%]
    group-hover:translate-x-[200%]
    transition-transform duration-700 ease-smooth
  " />
  <span className="relative z-10">Shine Effect</span>
</button>
```

---

## Button Groups

### Horizontal Group

```tsx
<div className="inline-flex gap-3">
  <button className="px-6 py-3 bg-gradient-sunset text-white rounded-lg">
    Option 1
  </button>
  <button className="px-6 py-3 bg-gradient-ocean text-white rounded-lg">
    Option 2
  </button>
  <button className="px-6 py-3 bg-white/20 backdrop-blur-xl text-white rounded-lg">
    Option 3
  </button>
</div>
```

### Segmented Control (Glass)

```tsx
<div className="inline-flex gap-1 p-1 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
  <button className="px-6 py-2 text-sm font-medium text-white bg-white/20 rounded-lg">
    Daily
  </button>
  <button className="px-6 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg">
    Weekly
  </button>
  <button className="px-6 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg">
    Monthly
  </button>
</div>
```

---

## Loading States

### Spinner with Gradient

```tsx
<button
  disabled
  className="
    px-8 py-4
    text-base font-semibold
    text-white
    bg-gradient-sunset
    rounded-lg
    shadow-coral
    inline-flex items-center gap-3
    cursor-wait
    opacity-90
  "
>
  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
      fill="none"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
  Loading...
</button>
```

---

## Accessibility

### Requirements

- **ARIA labels** for icon-only buttons
- **Focus rings** visible and high-contrast
- **Keyboard navigation** supported (Enter/Space)
- **Disabled state** communicated to screen readers
- **Minimum touch target:** 44px × 44px (mobile)
- **Color contrast** meets WCAG AA (white text on gradients)

### Example

```tsx
<button
  aria-label="Add to favorites"
  aria-busy={isLoading}
  disabled={isLoading}
  className="..."
>
  {isLoading ? <Spinner /> : <IconHeart />}
  <span className="sr-only">Add to favorites</span>
</button>
```

---

## Usage Guidelines

### Do's ✅

- Use gradient buttons for primary CTAs
- Animate on hover for playful interactions
- Ensure adequate contrast for text over gradients
- Use glass buttons over gradient backgrounds
- Provide focus indicators for accessibility
- Scale on press for tactile feedback
- Use colored shadows matching gradients

### Don'ts ❌

- Don't use multiple primary gradient buttons in one view
- Don't sacrifice readability for visual flair
- Don't animate excessively (keep under 500ms)
- Don't ignore keyboard focus states
- Don't use gradients on small buttons (< 40px)
- Don't forget loading states for async actions

---

## Framer Motion Implementation

For React with advanced animations:

```tsx
import { motion } from 'framer-motion'

export function GradientButton({ children, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="
        px-8 py-4
        text-base font-semibold
        text-white
        bg-gradient-sunset
        rounded-lg
        shadow-coral
        focus:outline-none
        focus:ring-4
        focus:ring-coral-500/20
      "
      {...props}
    >
      {children}
    </motion.button>
  )
}
```

---

**Last Updated:** 2025-11-17
