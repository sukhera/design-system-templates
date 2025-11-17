# Spacing System

A systematic spacing scale based on 4px increments, designed for consistent rhythm and visual harmony across all components and layouts.

---

## Philosophy

**Baseline Grid: 4px**

All spacing values are multiples of 4px to ensure:
- Consistent vertical rhythm
- Predictable component sizing
- Easy mental math for designers and developers
- Pixel-perfect alignment across all screens

---

## Spacing Scale

### Core Values

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| `0` | `0` | 0px | No spacing |
| `0.5` | `0.125rem` | 2px | Micro adjustments, icon padding |
| `1` | `0.25rem` | 4px | Tight spacing, badges, tags |
| `1.5` | `0.375rem` | 6px | Between 1 and 2 |
| `2` | `0.5rem` | 8px | Compact spacing, button padding |
| `3` | `0.75rem` | 12px | Between 2 and 4 |
| `4` | `1rem` | 16px | **Default spacing**, component padding |
| `5` | `1.25rem` | 20px | Between 4 and 6 |
| `6` | `1.5rem` | 24px | Comfortable spacing, card padding |
| `8` | `2rem` | 32px | Section spacing, large padding |
| `10` | `2.5rem` | 40px | Between 8 and 12 |
| `12` | `3rem` | 48px | Large section spacing |
| `16` | `4rem` | 64px | Major layout spacing |
| `20` | `5rem` | 80px | Extra large spacing |
| `24` | `6rem` | 96px | Page-level spacing |
| `32` | `8rem` | 128px | Maximum layout spacing |

### Semantic Tokens

| Semantic Token | Value | Context |
|----------------|-------|---------|
| `spacing-xs` | `4px` | Tight, compact UI |
| `spacing-sm` | `8px` | Small components |
| `spacing-md` | `16px` | **Default/medium** |
| `spacing-lg` | `24px` | Large components |
| `spacing-xl` | `32px` | Section breaks |
| `spacing-2xl` | `48px` | Major sections |
| `spacing-3xl` | `64px` | Page-level |

---

## Component Spacing

### Buttons

```
Padding (Small):    px-3 py-1.5     (12px horizontal × 6px vertical)
Padding (Medium):   px-4 py-2       (16px horizontal × 8px vertical)
Padding (Large):    px-6 py-3       (24px horizontal × 12px vertical)
Gap (Icon + Text):  gap-2           (8px)
```

### Input Fields

```
Padding:            px-3 py-2       (12px horizontal × 8px vertical)
Height (Default):   h-10            (40px)
Gap (Label + Input): space-y-1.5    (6px)
```

### Cards

```
Padding (Compact):  p-4             (16px all sides)
Padding (Default):  p-6             (24px all sides)
Padding (Spacious): p-8             (32px all sides)
Gap (Card Grid):    gap-4 or gap-6  (16px or 24px)
```

### Tables

```
Cell Padding:       px-4 py-3       (16px horizontal × 12px vertical)
Header Padding:     px-4 py-3       (16px horizontal × 12px vertical)
Row Gap:            border spacing  (1px)
```

### Navigation

```
Nav Item Padding:   px-3 py-2       (12px horizontal × 8px vertical)
Nav Gap:            gap-1           (4px vertical)
Section Spacing:    space-y-6       (24px between sections)
```

### Modals & Dialogs

```
Modal Padding:      p-6             (24px)
Header Padding:     px-6 py-4       (24px horizontal × 16px vertical)
Footer Padding:     px-6 py-4       (24px horizontal × 16px vertical)
Gap (Actions):      gap-3           (12px between buttons)
```

---

## Layout Spacing

### Page Containers

```
Container Padding:  px-4 md:px-6 lg:px-8
Max Width:          max-w-7xl (1280px)
Page Margins:       mx-auto
```

### Sections

```
Section Spacing:    space-y-12 lg:space-y-16
Section Padding:    py-12 lg:py-16
```

### Grids & Lists

```
Grid Gap (Tight):   gap-4           (16px)
Grid Gap (Default): gap-6           (24px)
Grid Gap (Loose):   gap-8           (32px)
List Item Gap:      space-y-2       (8px)
```

---

## Responsive Spacing

Use responsive utilities to adjust spacing across breakpoints:

### Mobile-First Approach

```
sm:  640px+    Mobile landscape / Small tablets
md:  768px+    Tablets
lg:  1024px+   Laptops / Small desktops
xl:  1280px+   Desktops
2xl: 1536px+   Large desktops
```

### Examples

```html
<!-- Responsive padding -->
<div class="p-4 md:p-6 lg:p-8">

<!-- Responsive gap -->
<div class="grid gap-4 md:gap-6 lg:gap-8">

<!-- Responsive section spacing -->
<section class="space-y-8 md:space-y-12 lg:space-y-16">
```

---

## Vertical Rhythm

Maintain consistent vertical spacing throughout pages:

### Typography Spacing

```
Heading + Paragraph:    mb-4    (16px)
Paragraph + Paragraph:  mb-6    (24px)
Section + Section:      mb-12   (48px)
```

### Component Stacking

```
Stacked Components:     space-y-4   (16px default)
Form Fields:            space-y-4   (16px)
Form Groups:            space-y-6   (24px)
```

---

## Usage Guidelines

### Do's ✅

- Always use values from the spacing scale
- Maintain 4px baseline alignment
- Use semantic tokens (`spacing-md`) in reusable components
- Stack spacing consistently (e.g., all cards use `p-6`)
- Apply responsive spacing for different viewports
- Use `gap` for flexbox and grid layouts
- Use `space-y` for vertical stacking

### Don'ts ❌

- Don't create custom spacing values (e.g., `15px`, `37px`)
- Don't use `margin-top` + `margin-bottom` together (prefer `space-y`)
- Don't mix spacing scales from different systems
- Don't ignore responsive spacing needs
- Don't use negative margins excessively
- Don't apply different spacing to similar components

---

## Common Patterns

### Stack Pattern (Vertical)

```html
<div class="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Inline Pattern (Horizontal)

```html
<div class="flex gap-2 items-center">
  <span>Label</span>
  <span>Value</span>
</div>
```

### Grid Pattern

```html
<div class="grid grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

### Section Pattern

```html
<div class="space-y-12">
  <section class="space-y-6">
    <h2>Section Title</h2>
    <div class="space-y-4">
      <!-- Content -->
    </div>
  </section>

  <section class="space-y-6">
    <!-- Next section -->
  </section>
</div>
```

---

## Figma Auto Layout

### Auto Layout Settings

**Button (Medium):**
```
Horizontal padding: 16px
Vertical padding: 8px
Gap between items: 8px
Hug contents: Both directions
```

**Card (Default):**
```
Horizontal padding: 24px
Vertical padding: 24px
Gap between items: 16px
Fill container: Horizontal (optional)
Hug contents: Vertical
```

**List Stack:**
```
Gap between items: 8px
Direction: Vertical
Hug contents: Both directions
```

---

## Implementation

### Tailwind Config

```javascript
module.exports = {
  theme: {
    spacing: {
      '0': '0px',
      '0.5': '0.125rem',  // 2px
      '1': '0.25rem',     // 4px
      '1.5': '0.375rem',  // 6px
      '2': '0.5rem',      // 8px
      '3': '0.75rem',     // 12px
      '4': '1rem',        // 16px
      '5': '1.25rem',     // 20px
      '6': '1.5rem',      // 24px
      '8': '2rem',        // 32px
      '10': '2.5rem',     // 40px
      '12': '3rem',       // 48px
      '16': '4rem',       // 64px
      '20': '5rem',       // 80px
      '24': '6rem',       // 96px
      '32': '8rem',       // 128px
    }
  }
}
```

### CSS Variables

```css
:root {
  --spacing-0: 0;
  --spacing-0-5: 0.125rem;
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  --spacing-24: 6rem;
}
```

---

## Quick Reference

| Use Case | Token | Pixels |
|----------|-------|--------|
| Icon padding | `0.5` or `1` | 2-4px |
| Button gap | `2` | 8px |
| Button padding | `px-4 py-2` | 16×8px |
| Input padding | `px-3 py-2` | 12×8px |
| Card padding | `p-6` | 24px |
| Form field gap | `space-y-4` | 16px |
| Card grid gap | `gap-6` | 24px |
| Section spacing | `space-y-12` | 48px |
| Page margins | `px-6 py-12` | 24×48px |

---

**Last Updated:** 2025-11-17
