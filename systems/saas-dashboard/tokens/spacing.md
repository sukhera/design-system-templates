# Spacing System

**4px Baseline Grid • Systematic Rhythm • Predictable Layouts**

A comprehensive spacing scale designed for consistent vertical rhythm, predictable sizing, and pixel-perfect alignment across all components and screen sizes. Every spacing value is a multiple of 4px, ensuring mathematical harmony throughout your interface.

---

## Philosophy

### Baseline Grid: 4px

All spacing values are multiples of 4px (0.25rem) to ensure:

- **Consistent Vertical Rhythm** – Predictable spacing creates visual harmony
- **Pixel-Perfect Alignment** – No sub-pixel rendering issues across browsers
- **Easy Mental Math** – Simple multiples make design and development faster
- **Scalable System** – Works from mobile (320px) to desktop (2560px+)

### Why 4px?

- Divides evenly into common screen widths
- Aligns with 8px, 16px, 24px major intervals
- Provides fine-grained control (2px, 4px, 6px, 8px)
- Industry standard (Material Design, Apple HIG, Tailwind)

---

## Spacing Scale

### Core Values

| Token | Value (rem) | Pixels | Usage Examples |
|-------|-------------|--------|----------------|
| `0` | `0` | 0px | No spacing, reset margins |
| `0.5` | `0.125rem` | 2px | Micro adjustments, icon padding, tight gaps |
| `1` | `0.25rem` | 4px | **Baseline unit**, badges, tags, minimal spacing |
| `1.5` | `0.375rem` | 6px | Between tight and default spacing |
| `2` | `0.5rem` | 8px | Compact spacing, button padding vertical, small gaps |
| `3` | `0.75rem` | 12px | Input padding, nav item spacing, moderate gaps |
| `4` | `1rem` | 16px | **Default spacing**, component padding, standard gaps |
| `5` | `1.25rem` | 20px | Between default and comfortable |
| `6` | `1.5rem` | 24px | **Comfortable spacing**, card padding, section gaps |
| `8` | `2rem` | 32px | Large component padding, section spacing |
| `10` | `2.5rem` | 40px | Between section spacing levels |
| `12` | `3rem` | 48px | Major section spacing, large layout gaps |
| `16` | `4rem` | 64px | Page-level spacing, hero sections |
| `20` | `5rem` | 80px | Extra large spacing, major page sections |
| `24` | `6rem` | 96px | Maximum component spacing |
| `32` | `8rem` | 128px | Maximum layout spacing, hero padding |

### Semantic Spacing Tokens

For component-agnostic spacing, use semantic tokens:

| Semantic Token | Value | Pixels | Context |
|----------------|-------|--------|---------|
| `spacing-xs` | `1` | 4px | Extra small, tight UI, badges |
| `spacing-sm` | `2` | 8px | Small components, compact spacing |
| `spacing-md` | `4` | 16px | **Default/medium**, most components |
| `spacing-lg` | `6` | 24px | Large components, comfortable spacing |
| `spacing-xl` | `8` | 32px | Section breaks, major spacing |
| `spacing-2xl` | `12` | 48px | Large sections, page divisions |
| `spacing-3xl` | `16` | 64px | Hero sections, page-level spacing |

---

## Component Spacing Patterns

### Buttons

Consistent padding creates visual weight hierarchy:

```css
/* Small Button */
padding: 6px 12px      /* py-1.5 px-3 */
height: 28px
icon-gap: 6px          /* gap-1.5 */
font-size: 12px        /* text-xs */

/* Medium Button (Default) */
padding: 8px 16px      /* py-2 px-4 */
height: 36px
icon-gap: 8px          /* gap-2 */
font-size: 14px        /* text-sm */

/* Large Button */
padding: 12px 24px     /* py-3 px-6 */
height: 48px
icon-gap: 8px          /* gap-2 */
font-size: 16px        /* text-base */
```

**Examples:**

```tsx
{/* Small */}
<button className="px-3 py-1.5 text-xs gap-1.5">
  Save
</button>

{/* Medium (Default) */}
<button className="px-4 py-2 text-sm gap-2">
  Save Changes
</button>

{/* Large */}
<button className="px-6 py-3 text-base gap-2">
  Get Started
</button>
```

### Input Fields

```css
/* Default Input */
padding: 12px 8px      /* px-3 py-2 */
height: 40px
label-gap: 6px         /* space-y-1.5 */
helper-gap: 4px        /* mt-1 */

/* Input with Icon */
padding-left: 40px     /* pl-10 (for icon) */
icon-margin: 12px      /* left-3 */

/* Textarea */
padding: 12px          /* p-3 */
min-height: 80px       /* 5 lines × 16px */
```

**Examples:**

```tsx
{/* Text Input */}
<div className="space-y-1.5">
  <label className="text-sm">Email</label>
  <input className="px-3 py-2 h-10" />
  <p className="text-xs mt-1">Helper text</p>
</div>

{/* Input with Icon */}
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
    <Icon className="h-4 w-4" />
  </div>
  <input className="pl-10 pr-3 py-2" />
</div>
```

### Cards

```css
/* Compact Card */
padding: 16px          /* p-4 */
gap: 12px              /* space-y-3 */
use-case: Dashboard widgets, tight layouts

/* Default Card */
padding: 24px          /* p-6 */
gap: 16px              /* space-y-4 */
use-case: Standard cards, most use cases

/* Spacious Card */
padding: 32px          /* p-8 */
gap: 24px              /* space-y-6 */
use-case: Feature cards, marketing content

/* Card Grid Gap */
gap: 16px or 24px      /* gap-4 or gap-6 */
use-case: Card grid layouts
```

**Examples:**

```tsx
{/* Compact Card */}
<div className="p-4 space-y-3">
  <h3 className="text-lg font-medium">Title</h3>
  <p className="text-sm">Content</p>
</div>

{/* Default Card */}
<div className="p-6 space-y-4">
  <h3 className="text-xl font-medium">Title</h3>
  <p className="text-base">Content with more space</p>
</div>

{/* Card Grid */}
<div className="grid grid-cols-3 gap-6">
  <div className="p-6">Card 1</div>
  <div className="p-6">Card 2</div>
  <div className="p-6">Card 3</div>
</div>
```

### Tables

```css
/* Cell Padding */
padding: 16px 12px     /* px-4 py-3 */
row-height: ~48px

/* Header Padding */
padding: 16px 12px     /* px-4 py-3 */
font-weight: medium

/* Compact Table */
padding: 12px 8px      /* px-3 py-2 */
row-height: ~40px
```

**Examples:**

```tsx
<table>
  <thead>
    <tr>
      <th className="px-4 py-3 text-xs font-medium uppercase">
        Name
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="px-4 py-3 text-sm">
        John Doe
      </td>
    </tr>
  </tbody>
</table>
```

### Navigation

```css
/* Sidebar Navigation */
nav-item-padding: 12px 8px     /* px-3 py-2 */
nav-item-gap: 4px              /* space-y-1 */
section-spacing: 24px          /* space-y-6 between nav sections */

/* Top Navigation */
nav-item-padding: 12px 16px    /* px-4 py-3 */
nav-gap: 8px                   /* gap-2 horizontal */

/* Breadcrumbs */
item-gap: 8px                  /* gap-2 */
separator-margin: 8px          /* mx-2 */
```

**Examples:**

```tsx
{/* Sidebar Nav */}
<nav className="space-y-1">
  <a className="px-3 py-2">Dashboard</a>
  <a className="px-3 py-2">Settings</a>
</nav>

{/* Top Nav */}
<nav className="flex gap-2">
  <a className="px-4 py-3">Home</a>
  <a className="px-4 py-3">About</a>
</nav>

{/* Breadcrumbs */}
<nav className="flex gap-2">
  <a>Home</a>
  <span className="mx-2">/</span>
  <a>Products</a>
</nav>
```

### Modals & Dialogs

```css
/* Modal Container */
padding: 24px          /* p-6 */

/* Modal Header */
padding: 24px 16px     /* px-6 py-4 */
border-bottom: 1px

/* Modal Content */
padding: 24px          /* p-6 */

/* Modal Footer */
padding: 24px 16px     /* px-6 py-4 */
button-gap: 12px       /* gap-3 */
border-top: 1px
```

**Examples:**

```tsx
<div className="bg-white rounded-xl">
  {/* Header */}
  <div className="px-6 py-4 border-b">
    <h2 className="text-xl font-semibold">Modal Title</h2>
  </div>

  {/* Content */}
  <div className="p-6">
    <p>Modal content goes here</p>
  </div>

  {/* Footer */}
  <div className="px-6 py-4 border-t flex gap-3 justify-end">
    <button>Cancel</button>
    <button>Confirm</button>
  </div>
</div>
```

---

## Layout Spacing

### Page Containers

```css
/* Mobile (< 640px) */
container-padding: 16px        /* px-4 */
max-width: 100%

/* Tablet (640px - 1024px) */
container-padding: 24px        /* px-6 */
max-width: 100%

/* Desktop (> 1024px) */
container-padding: 32px        /* px-8 */
max-width: 1280px              /* max-w-7xl */
```

**Examples:**

```tsx
{/* Responsive Container */}
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
  <div className="py-6 md:py-8 lg:py-12">
    {/* Page content */}
  </div>
</div>
```

### Section Spacing

```css
/* Section Vertical Spacing */
mobile: 48px                   /* space-y-12 */
tablet: 48-64px                /* space-y-12 md:space-y-16 */
desktop: 64px                  /* lg:space-y-16 */

/* Section Padding */
mobile: 48px                   /* py-12 */
tablet: 48-64px                /* py-12 md:py-16 */
desktop: 64px                  /* lg:py-16 */
```

**Examples:**

```tsx
{/* Page Sections */}
<div className="space-y-12 md:space-y-16">
  <section className="py-12 md:py-16">
    <h2>Section 1</h2>
  </section>
  <section className="py-12 md:py-16">
    <h2>Section 2</h2>
  </section>
</div>
```

### Grids & Lists

```css
/* Grid Gap */
tight: 16px                    /* gap-4 */
default: 24px                  /* gap-6 */
loose: 32px                    /* gap-8 */

/* List Item Gap */
tight: 8px                     /* space-y-2 */
default: 16px                  /* space-y-4 */
loose: 24px                    /* space-y-6 */
```

**Examples:**

```tsx
{/* Card Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

{/* Vertical List */}
<div className="space-y-4">
  <div>List Item 1</div>
  <div>List Item 2</div>
  <div>List Item 3</div>
</div>
```

---

## Responsive Spacing Strategy

### Mobile-First Breakpoints

```css
/* Tailwind Default Breakpoints */
sm:  640px+    /* Mobile landscape, small tablets */
md:  768px+    /* Tablets */
lg:  1024px+   /* Laptops, small desktops */
xl:  1280px+   /* Desktops */
2xl: 1536px+   /* Large desktops */
```

### Scaling Pattern

**Base → Medium → Large:**

```tsx
{/* Scale up padding on larger screens */}
<div className="p-4 md:p-6 lg:p-8">
  Content with responsive padding
</div>

{/* Scale up gap on larger screens */}
<div className="grid gap-4 md:gap-6 lg:gap-8">
  Responsive grid
</div>

{/* Scale up section spacing */}
<section className="space-y-8 md:space-y-12 lg:space-y-16">
  Responsive sections
</section>
```

### Common Responsive Patterns

```tsx
{/* Container Padding */}
<div className="px-4 sm:px-6 lg:px-8">

{/* Section Spacing */}
<div className="py-12 md:py-16 lg:py-20">

{/* Grid Gap */}
<div className="gap-4 sm:gap-6 lg:gap-8">

{/* Stack Spacing */}
<div className="space-y-6 md:space-y-8 lg:space-y-12">
```

---

## Vertical Rhythm

Maintain consistent vertical spacing throughout pages for visual harmony.

### Typography Spacing

```css
/* Heading + Paragraph */
margin-bottom: 16px            /* mb-4 */

/* Paragraph + Paragraph */
margin-bottom: 24px            /* mb-6 */

/* Section + Section */
margin-bottom: 48px            /* mb-12 */

/* Hero Title + Subtitle */
margin-bottom: 16px            /* mb-4 */
```

**Examples:**

```tsx
<div className="prose">
  <h2 className="mb-4">Heading</h2>
  <p className="mb-6">First paragraph with more space below.</p>
  <p className="mb-6">Second paragraph.</p>
</div>
```

### Component Stacking

```css
/* Form Fields */
field-spacing: 16px            /* space-y-4 */
field-group-spacing: 24px      /* space-y-6 */

/* Stacked Components */
default: 16px                  /* space-y-4 */
comfortable: 24px              /* space-y-6 */
loose: 32px                    /* space-y-8 */
```

**Examples:**

```tsx
{/* Form */}
<form className="space-y-6">
  <div className="space-y-4">
    <div>Input 1</div>
    <div>Input 2</div>
  </div>
  <div className="space-y-4">
    <div>Input 3</div>
    <div>Input 4</div>
  </div>
</form>

{/* Component Stack */}
<div className="space-y-4">
  <Card />
  <Card />
  <Card />
</div>
```

---

## Usage Guidelines

### Do's ✅

**Consistency:**
- Always use values from the spacing scale
- Maintain 4px baseline alignment throughout
- Use semantic tokens (`spacing-md`) in reusable components
- Apply consistent spacing patterns to similar components

**Best Practices:**
- Use `gap` for flexbox and grid layouts (better than margins)
- Use `space-y` and `space-x` for stacking elements
- Use responsive spacing modifiers for different viewports
- Combine padding and gap for complex layouts
- Test on actual devices, not just browser resize

**Layout:**
- Maintain vertical rhythm with consistent spacing
- Scale spacing up on larger screens
- Use container max-width for readability
- Apply appropriate spacing hierarchy (more space = more separation)

### Don'ts ❌

**Avoid Custom Values:**
- Don't create custom spacing values outside the scale (e.g., `15px`, `37px`)
- Don't use pixel values directly in components
- Don't mix spacing systems from different design libraries
- Don't use arbitrary values without documentation

**Avoid Anti-Patterns:**
- Don't use `margin-top` + `margin-bottom` together (prefer `space-y`)
- Don't use negative margins excessively
- Don't apply inconsistent spacing to similar components
- Don't ignore responsive spacing needs
- Don't use spacing smaller than 2px (accessibility)

**Avoid Layout Issues:**
- Don't nest space utilities (they don't compose)
- Don't mix gap and margin in the same direction
- Don't forget to test with actual content
- Don't use fixed heights when padding would work

---

## Common Patterns

### Stack Pattern (Vertical)

Use `space-y` for vertical stacking:

```tsx
<div className="space-y-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

{/* Result: 16px gap between each item */}
```

### Inline Pattern (Horizontal)

Use `gap` with flex for horizontal spacing:

```tsx
<div className="flex gap-2 items-center">
  <Icon />
  <span>Label</span>
  <Badge>New</Badge>
</div>

{/* Result: 8px gap between each item */}
```

### Grid Pattern

Use `gap` for both directions:

```tsx
<div className="grid grid-cols-3 gap-6">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>

{/* Result: 24px gap in both horizontal and vertical */}
```

### Section Pattern

Nested spacing for clear hierarchy:

```tsx
<div className="space-y-12">
  <section className="space-y-6">
    <h2>Section Title</h2>
    <div className="space-y-4">
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  </section>

  <section className="space-y-6">
    <h2>Next Section</h2>
    <div className="space-y-4">
      <p>Content</p>
    </div>
  </section>
</div>

{/* Result:
     - 48px between sections
     - 24px between section title and content
     - 16px between paragraphs
*/}
```

### Card Layout Pattern

```tsx
<div className="p-6 space-y-4">
  <div className="flex items-start justify-between">
    <h3 className="text-lg font-medium">Card Title</h3>
    <button className="p-2">
      <IconMore />
    </button>
  </div>
  <p className="text-sm text-gray-600">Card description</p>
  <div className="flex gap-2">
    <button className="px-4 py-2">Action 1</button>
    <button className="px-4 py-2">Action 2</button>
  </div>
</div>

{/* Result:
     - 24px padding around card
     - 16px between title, description, and actions
     - 8px between action buttons
*/}
```

---

## Implementation

### Tailwind Config

Spacing values are defined in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    spacing: {
      '0': '0',
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

**Note:** Tailwind's spacing scale applies to:
- `padding` (p, px, py, pt, pr, pb, pl)
- `margin` (m, mx, my, mt, mr, mb, ml)
- `width` (w)
- `height` (h)
- `gap` (gap, gap-x, gap-y)
- `space` (space-x, space-y)
- `inset` (top, right, bottom, left)

### CSS Variables

For framework-agnostic implementations:

```css
:root {
  --spacing-0: 0;
  --spacing-0-5: 0.125rem;   /* 2px */
  --spacing-1: 0.25rem;      /* 4px */
  --spacing-2: 0.5rem;       /* 8px */
  --spacing-3: 0.75rem;      /* 12px */
  --spacing-4: 1rem;         /* 16px */
  --spacing-5: 1.25rem;      /* 20px */
  --spacing-6: 1.5rem;       /* 24px */
  --spacing-8: 2rem;         /* 32px */
  --spacing-10: 2.5rem;      /* 40px */
  --spacing-12: 3rem;        /* 48px */
  --spacing-16: 4rem;        /* 64px */
  --spacing-20: 5rem;        /* 80px */
  --spacing-24: 6rem;        /* 96px */
  --spacing-32: 8rem;        /* 128px */
}
```

**Usage:**

```css
.card {
  padding: var(--spacing-6);      /* 24px */
  gap: var(--spacing-4);           /* 16px */
}

.button {
  padding: var(--spacing-2) var(--spacing-4);  /* 8px 16px */
}
```

### Design Tokens (W3C Format)

Export to `tokens.json`:

```json
{
  "spacing": {
    "0": { "value": "0", "type": "spacing" },
    "0.5": { "value": "0.125rem", "type": "spacing" },
    "1": { "value": "0.25rem", "type": "spacing" },
    "2": { "value": "0.5rem", "type": "spacing" },
    "4": { "value": "1rem", "type": "spacing" },
    "6": { "value": "1.5rem", "type": "spacing" }
  }
}
```

---

## Figma Auto Layout

Apply these spacing patterns in Figma using Auto Layout:

### Button Auto Layout

```
Direction: Horizontal
Padding: 16px × 8px (medium button)
Gap between items: 8px
Hug contents: Both directions
Alignment: Center
```

### Card Auto Layout

```
Direction: Vertical
Padding: 24px (all sides)
Gap between items: 16px
Fill container: Horizontal
Hug contents: Vertical
```

### List Stack Auto Layout

```
Direction: Vertical
Gap between items: 8px or 16px
Hug contents: Both directions
Padding: 0
```

---

## Quick Reference Table

Organized by use case for easy lookup:

| Use Case | Token | Pixels | Tailwind Class |
|----------|-------|--------|----------------|
| Icon padding | `0.5` or `1` | 2-4px | `p-0.5` or `p-1` |
| Badge padding | `1` or `2` | 4-8px | `px-2 py-1` |
| Button gap (icon + text) | `2` | 8px | `gap-2` |
| Button padding (vertical) | `2` | 8px | `py-2` |
| Button padding (horizontal) | `4` | 16px | `px-4` |
| Input padding | `3` × `2` | 12×8px | `px-3 py-2` |
| Input label gap | `1.5` | 6px | `space-y-1.5` |
| Card padding (default) | `6` | 24px | `p-6` |
| Card padding (compact) | `4` | 16px | `p-4` |
| Card padding (spacious) | `8` | 32px | `p-8` |
| Form field gap | `4` | 16px | `space-y-4` |
| Form group gap | `6` | 24px | `space-y-6` |
| Card grid gap | `6` | 24px | `gap-6` |
| Section spacing | `12` | 48px | `space-y-12` |
| Page margins (mobile) | `4` | 16px | `px-4` |
| Page margins (tablet) | `6` | 24px | `md:px-6` |
| Page margins (desktop) | `8` | 32px | `lg:px-8` |

---

**Last Updated:** 2025-11-17
**Version:** 1.0.0
**Baseline Grid:** 4px (0.25rem)
**Scale Range:** 0px → 128px (0 → 32 tokens)
