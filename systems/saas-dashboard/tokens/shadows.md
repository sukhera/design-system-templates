# Elevation, Shadows & Radii

Depth, layering, and curvature system for modern SaaS interfaces.

---

## Philosophy

**Subtle Elevation**
Modern B2B interfaces use elevation sparingly and subtly:
- Minimal shadows for depth without distraction
- Consistent layer hierarchy
- Soft, natural light simulation
- Performance-optimized (few shadow layers)

---

## Shadow System

### Elevation Levels

We use 5 elevation levels, inspired by Linear and Vercel:

| Level | Token | CSS Shadow | Usage |
|-------|-------|------------|-------|
| **0** | `shadow-none` | `none` | Flat elements, inline content |
| **1** | `shadow-xs` | `0 1px 2px 0 rgba(0,0,0,0.05)` | Subtle lift, buttons, badges |
| **2** | `shadow-sm` | `0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)` | Cards, inputs, default elevation |
| **3** | `shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)` | Dropdowns, popovers, hover states |
| **4** | `shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)` | Modals, dialogs, tooltips |
| **5** | `shadow-xl` | `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)` | Maximum elevation, command palette |

### Focus Shadows

Special shadows for interactive states:

```css
/* Primary Focus */
shadow-focus-primary: 0 0 0 3px rgba(37, 99, 235, 0.1)

/* Error Focus */
shadow-focus-error: 0 0 0 3px rgba(220, 38, 38, 0.1)

/* Success Focus */
shadow-focus-success: 0 0 0 3px rgba(22, 163, 74, 0.1)
```

---

## Border Radius (Curvature)

### Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-none` | `0px` | Sharp corners, data tables |
| `rounded-sm` | `2px` | Badges, tags, tight UI |
| `rounded` | `4px` | Buttons, inputs, **default** |
| `rounded-md` | `6px` | Cards, medium components |
| `rounded-lg` | `8px` | Large cards, panels |
| `rounded-xl` | `12px` | Modals, major containers |
| `rounded-2xl` | `16px` | Hero sections, featured cards |
| `rounded-full` | `9999px` | Avatars, pills, circular buttons |

### Component Radius Guide

```
Buttons:           rounded (4px)
Inputs:            rounded (4px)
Cards:             rounded-lg (8px)
Modals:            rounded-xl (12px)
Badges:            rounded-full (pill)
Avatars:           rounded-full (circle)
Tables:            rounded-md (6px container)
Dropdowns:         rounded-md (6px)
Tooltips:          rounded (4px)
Images:            rounded-lg (8px)
```

---

## Layer Hierarchy

Visual stacking order from bottom to top:

```
0. Base Layer          → Background, no shadow
1. Surface Layer       → Cards, panels (shadow-sm)
2. Raised Layer        → Hover states, selected items (shadow-md)
3. Overlay Layer       → Dropdowns, popovers (shadow-lg)
4. Modal Layer         → Dialogs, modals (shadow-xl)
5. Tooltip Layer       → Tooltips, notifications (shadow-lg)
```

### Z-Index Scale

```css
z-0:        0       /* Base layer */
z-10:      10       /* Dropdowns */
z-20:      20       /* Sticky headers */
z-30:      30       /* Modals, overlays */
z-40:      40       /* Popovers */
z-50:      50       /* Tooltips, notifications */
```

---

## Component Examples

### Button Elevation

```html
<!-- Default (no elevation) -->
<button class="shadow-none">
  Button
</button>

<!-- Subtle lift on hover -->
<button class="shadow-xs hover:shadow-sm transition-shadow">
  Button
</button>

<!-- Primary with focus ring -->
<button class="shadow-sm focus:ring-4 focus:ring-blue-100">
  Primary Button
</button>
```

### Card Elevation

```html
<!-- Default card -->
<div class="rounded-lg shadow-sm">
  Card content
</div>

<!-- Interactive card (hover state) -->
<div class="rounded-lg shadow-sm hover:shadow-md transition-shadow">
  Clickable card
</div>

<!-- Emphasized card -->
<div class="rounded-xl shadow-md">
  Featured card
</div>
```

### Dropdown Elevation

```html
<div class="rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
  <div class="py-1">
    <!-- Menu items -->
  </div>
</div>
```

### Modal Elevation

```html
<div class="fixed inset-0 z-50">
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-black bg-opacity-50"></div>

  <!-- Modal -->
  <div class="relative bg-white rounded-xl shadow-xl">
    Modal content
  </div>
</div>
```

---

## Dark Mode Shadows

Shadows in dark mode require different opacity and colors:

### Dark Mode Adjustments

```css
/* Light mode */
.shadow-sm {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
              0 1px 2px -1px rgba(0, 0, 0, 0.1);
}

/* Dark mode */
.dark .shadow-sm {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3),
              0 1px 2px -1px rgba(0, 0, 0, 0.3);
}
```

### Dark Mode Shadow Scale

In dark mode, increase shadow opacity by 2-3x:

```
shadow-xs:  rgba(0,0,0,0.15)  →  rgba(0,0,0,0.4)
shadow-sm:  rgba(0,0,0,0.1)   →  rgba(0,0,0,0.3)
shadow-md:  rgba(0,0,0,0.1)   →  rgba(0,0,0,0.3)
shadow-lg:  rgba(0,0,0,0.1)   →  rgba(0,0,0,0.4)
```

---

## Borders vs Shadows

### When to Use Borders

- Table cells and rows
- Form inputs (default state)
- Dividers and separators
- Well-defined boundaries
- Flat design aesthetic

### When to Use Shadows

- Cards floating on background
- Dropdowns and popovers
- Hover and active states
- Modal overlays
- Depth and hierarchy

### Combined Approach

Often, subtle borders + light shadows work best:

```html
<div class="border border-gray-200 shadow-sm rounded-lg">
  Card with border and shadow
</div>
```

---

## Inner Shadows

Use sparingly for inset effects:

```css
/* Inset shadow for inputs */
.shadow-inner {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

/* Example: Pressed button state */
.button:active {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
```

---

## Usage Guidelines

### Do's ✅

- Use subtle shadows (low opacity, small blur)
- Maintain consistent elevation levels
- Apply shadows to components, not text
- Use focus rings for keyboard navigation
- Increase shadow on hover for interactive elements
- Use `rounded-lg` (8px) for most cards
- Combine border + shadow for definition
- Test in both light and dark modes

### Don'ts ❌

- Don't use heavy, dramatic shadows
- Don't skip elevation levels arbitrarily
- Don't apply shadows to every element
- Don't use shadows on flat, inline content
- Don't mix sharp and rounded corners inconsistently
- Don't use border radius > 16px for UI components
- Don't rely on shadows alone for accessibility
- Don't forget to animate shadow transitions

---

## Animation & Transitions

### Smooth Shadow Transitions

```css
/* Transition shadow on interaction */
.card {
  transition: box-shadow 200ms ease-in-out;
}

.card:hover {
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
}
```

### Focus Ring Animation

```css
.button {
  transition: box-shadow 150ms ease-in-out;
}

.button:focus {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

---

## Figma Styles

### Shadow Styles in Figma

Create these as Effect Styles:

```
Shadow / XS          → 0 1px 2px rgba(0,0,0,0.05)
Shadow / SM          → 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)
Shadow / MD          → 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.1)
Shadow / LG          → 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)
Shadow / XL          → 0 20px 25px rgba(0,0,0,0.1), 0 8px 10px rgba(0,0,0,0.1)

Focus / Primary      → 0 0 0 3px rgba(37,99,235,0.1)
Focus / Error        → 0 0 0 3px rgba(220,38,38,0.1)
```

### Corner Radius in Figma

Set as default radius for Auto Layout frames:

```
Small:    4px
Medium:   8px
Large:    12px
```

---

## Implementation

### Tailwind Config

```javascript
module.exports = {
  theme: {
    boxShadow: {
      'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      'focus-primary': '0 0 0 3px rgba(37, 99, 235, 0.1)',
      'focus-error': '0 0 0 3px rgba(220, 38, 38, 0.1)',
    },
    borderRadius: {
      'none': '0px',
      'sm': '2px',
      'DEFAULT': '4px',
      'md': '6px',
      'lg': '8px',
      'xl': '12px',
      '2xl': '16px',
      'full': '9999px',
    },
  },
}
```

### CSS Variables

```css
:root {
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

  --radius-sm: 2px;
  --radius-md: 6px;
  --radius-lg: 8px;
  --radius-xl: 12px;
}
```

---

## Quick Reference

| Component | Shadow | Radius | Notes |
|-----------|--------|--------|-------|
| Button | `none` or `xs` | `4px` | Subtle or flat |
| Input | `sm` | `4px` | Light border better |
| Card | `sm` | `8px` | Default elevation |
| Card (hover) | `md` | `8px` | Interactive lift |
| Dropdown | `lg` | `6px` | Overlay level |
| Modal | `xl` | `12px` | Maximum elevation |
| Badge | `none` | `full` | Flat pill shape |
| Avatar | `none` | `full` | Circle |
| Tooltip | `lg` | `4px` | High elevation, small radius |

---

**Last Updated:** 2025-11-17
