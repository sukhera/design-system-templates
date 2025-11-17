# Shadow System

Elevated, dramatic shadows that create depth and hierarchy in bold designs.

---

## Philosophy

Shadows add dimension and depth to creative interfaces:

1. **Elevated Hierarchy** – Shadows create clear visual layers
2. **Dramatic Depth** – Bolder shadows for impactful designs
3. **Colored Shadows** – Gradient-tinted shadows for brand moments
4. **Smooth Transitions** – Shadows change smoothly on interaction

---

## Shadow Scale

### Standard Shadows (Neutral)

| Token | Value | Use Case |
|-------|-------|----------|
| `shadow-xs` | `0 1px 2px rgba(0, 0, 0, 0.05)` | Subtle borders, input focus |
| `shadow-sm` | `0 2px 4px rgba(0, 0, 0, 0.08)` | Small cards, dropdowns |
| `shadow-md` | `0 4px 8px rgba(0, 0, 0, 0.1)` | **Default card shadow** |
| `shadow-lg` | `0 8px 16px rgba(0, 0, 0, 0.12)` | Elevated cards, modals |
| `shadow-xl` | `0 12px 24px rgba(0, 0, 0, 0.15)` | Floating elements, popovers |
| `shadow-2xl` | `0 20px 40px rgba(0, 0, 0, 0.2)` | Hero cards, dramatic elevation |
| `shadow-3xl` | `0 32px 64px rgba(0, 0, 0, 0.25)` | Maximum drama |

### Colored Shadows (Brand)

Add color to shadows for gradient-heavy designs.

**Sunset Shadow (Coral/Pink)**
```css
box-shadow: 0 8px 24px rgba(255, 107, 107, 0.3),
            0 4px 12px rgba(254, 107, 139, 0.2);
```

**Ocean Shadow (Blue/Purple)**
```css
box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3),
            0 4px 12px rgba(118, 75, 162, 0.2);
```

**Aurora Shadow (Multi-color)**
```css
box-shadow: 0 8px 24px rgba(139, 92, 246, 0.25),
            0 4px 12px rgba(236, 72, 153, 0.15);
```

### Inner Shadows

For inset effects and depth:

```css
/* Subtle inset */
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);

/* Deep inset */
box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1);
```

---

## Glow Effects

Soft glows for interactive elements and brand moments.

### Button Glow (on hover)

```css
/* Coral glow */
.button-glow:hover {
  box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.1),
              0 8px 24px rgba(255, 107, 107, 0.3);
}

/* Purple glow */
.button-purple:hover {
  box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1),
              0 8px 24px rgba(139, 92, 246, 0.3);
}
```

### Focus Ring (Accessibility)

```css
/* Standard focus */
.focus-ring:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.2);
}

/* Gradient focus ring */
.focus-gradient:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(255, 107, 107, 0.2),
              0 0 0 6px rgba(139, 92, 246, 0.1);
}
```

### Text Glow

For headlines over dark backgrounds:

```css
.text-glow {
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.5),
               0 0 40px rgba(255, 107, 107, 0.3),
               0 2px 4px rgba(0, 0, 0, 0.2);
}
```

---

## Layered Shadows

Combine multiple shadows for depth:

### Elevated Card

```css
.card-elevated {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.05),
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 12px 24px rgba(0, 0, 0, 0.12);
}
```

### Gradient Card with Colored Shadow

```css
.gradient-card {
  background: var(--gradient-sunset);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.1),
    0 12px 32px rgba(255, 107, 107, 0.3);
}
```

### Glass Effect with Shadow

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.5);
}
```

---

## Interactive Shadow Transitions

Shadows that respond to user interaction:

### Card Hover Lift

```css
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease, box-shadow 300ms ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

### Button Press

```css
.button {
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  transition: transform 100ms ease, box-shadow 100ms ease;
}

.button:active {
  transform: translateY(2px);
  box-shadow: 0 2px 6px rgba(255, 107, 107, 0.2);
}
```

---

## Dark Mode Shadows

Lighter shadows for dark backgrounds:

### Dark Mode Scale

```css
[data-theme="dark"] {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.6);
  --shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.7);
}
```

### Dark Mode Colored Shadows

Use lighter, more vibrant shadows on dark backgrounds:

```css
/* Neon glow effect */
.dark-card {
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 8px 24px rgba(102, 126, 234, 0.4),
    0 4px 12px rgba(139, 92, 246, 0.3);
}
```

---

## Usage Guidelines

### Do's ✅

- Use colored shadows on gradient elements
- Layer multiple shadows for depth
- Animate shadows on hover/focus
- Use larger shadows for dramatic elevation
- Test shadows on both light and dark backgrounds
- Apply glow effects to interactive elements
- Use focus rings for accessibility

### Don'ts ❌

- Don't use heavy shadows on small elements
- Don't stack too many shadows (max 3-4)
- Don't use colored shadows on neutral elements
- Don't ignore dark mode shadow adjustments
- Don't animate shadows on scroll (performance)
- Don't use shadows as the only interactive indicator

---

## Implementation

### CSS Variables

```css
:root {
  /* Standard Shadows */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 12px 24px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 20px 40px rgba(0, 0, 0, 0.2);
  --shadow-3xl: 0 32px 64px rgba(0, 0, 0, 0.25);

  /* Colored Shadows */
  --shadow-coral: 0 8px 24px rgba(255, 107, 107, 0.3);
  --shadow-purple: 0 8px 24px rgba(139, 92, 246, 0.3);
  --shadow-pink: 0 8px 24px rgba(236, 72, 153, 0.3);

  /* Glow Effects */
  --glow-coral: 0 0 0 4px rgba(255, 107, 107, 0.1),
                0 8px 24px rgba(255, 107, 107, 0.3);
  --glow-purple: 0 0 0 4px rgba(139, 92, 246, 0.1),
                 0 8px 24px rgba(139, 92, 246, 0.3);
}
```

### Tailwind Configuration

```javascript
module.exports = {
  theme: {
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
    },
  },
}
```

---

## Examples

### Gradient Button with Glow

```html
<button class="
  bg-gradient-sunset
  px-8 py-4
  rounded-lg
  shadow-coral
  hover:shadow-glow-coral
  transition-shadow duration-300
">
  Get Started
</button>
```

### Elevated Glass Card

```html
<div class="
  bg-white/70
  backdrop-blur-xl
  p-8
  rounded-2xl
  shadow-xl
  hover:shadow-2xl
  transition-all duration-300
">
  Card content
</div>
```

---

**Last Updated:** 2025-11-17
