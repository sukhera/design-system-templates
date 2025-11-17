# Typography System

A comprehensive type system optimized for readability, hierarchy, and modern SaaS interfaces.

---

## Philosophy

**Clarity First**
Typography in B2B SaaS must prioritize:
- **Readability** – Extended reading comfort for data-heavy interfaces
- **Hierarchy** – Clear visual levels to guide attention
- **Efficiency** – Optimal information density without strain
- **Professionalism** – Modern, trustworthy aesthetic

---

## Font Stack

### Primary (UI & Content)

**Inter** – Modern, highly legible, optimized for screens

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

**Why Inter:**
- Exceptional legibility at small sizes (12-14px)
- Extensive weight range (100-900)
- OpenType features (tabular numbers, etc.)
- Excellent on-screen rendering
- Free and open source

**Installation:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Or via `@fontsource/inter`:
```bash
npm install @fontsource/inter
```

### Monospace (Code & Data)

**JetBrains Mono** – Designed for developers, excellent readability

```css
font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono',
             Monaco, Consolas, monospace;
```

**Alternatives:**
- Fira Code (ligatures)
- SF Mono (Apple devices)
- Consolas (Windows)
- Monaco (fallback)

---

## Type Scale

### Size Ramp

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `xs` | 12px (0.75rem) | 16px (1.333) | 0.01em | Captions, metadata, badges |
| `sm` | 13px (0.8125rem) | 20px (1.538) | 0.005em | Secondary text, table cells |
| `base` | 14px (0.875rem) | 20px (1.428) | 0 | **Body text, forms, default** |
| `lg` | 16px (1rem) | 24px (1.5) | -0.005em | Emphasized body, large UI |
| `xl` | 18px (1.125rem) | 28px (1.555) | -0.01em | Subheadings, card titles |
| `2xl` | 24px (1.5rem) | 32px (1.333) | -0.015em | Section headings (H3) |
| `3xl` | 30px (1.875rem) | 36px (1.2) | -0.02em | Page headings (H2) |
| `4xl` | 36px (2.25rem) | 40px (1.111) | -0.025em | Display headings (H1) |
| `5xl` | 48px (3rem) | 48px (1.0) | -0.03em | Hero text, marketing |
| `6xl` | 60px (3.75rem) | 60px (1.0) | -0.03em | Large display text |

---

## Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `normal` | 400 | Body text, default |
| `medium` | 500 | Emphasized text, labels, nav items |
| `semibold` | 600 | Headings, buttons, important labels |
| `bold` | 700 | Strong emphasis, critical information |

**Weight Guidelines:**
- Use **400** for all body text and paragraphs
- Use **500** for subtle emphasis and UI labels
- Use **600** for headings and primary buttons
- Use **700** sparingly for maximum emphasis

---

## Typography Hierarchy

### Display (Marketing, Landing Pages)

```
Hero Title:          text-6xl font-bold      (60px, 700)
Hero Subtitle:       text-xl text-gray-600   (18px, 400)
```

### Headings (Application)

```
H1 (Page Title):     text-4xl font-semibold  (36px, 600)
H2 (Section):        text-3xl font-semibold  (30px, 600)
H3 (Subsection):     text-2xl font-semibold  (24px, 600)
H4 (Card Title):     text-xl font-medium     (18px, 500)
H5 (Small Heading):  text-lg font-medium     (16px, 500)
H6 (Micro Heading):  text-base font-medium   (14px, 500)
```

### Body Text

```
Body Large:          text-lg font-normal     (16px, 400)
Body Default:        text-base font-normal   (14px, 400)
Body Small:          text-sm font-normal     (13px, 400)
Caption:             text-xs text-gray-500   (12px, 400)
```

### UI Elements

```
Button (Large):      text-base font-medium   (14px, 500)
Button (Medium):     text-sm font-medium     (13px, 500)
Button (Small):      text-xs font-medium     (12px, 500)

Input Label:         text-sm font-medium     (13px, 500)
Input Text:          text-base               (14px, 400)
Input Helper:        text-xs text-gray-500   (12px, 400)

Navigation:          text-sm font-medium     (13px, 500)
Tabs:                text-sm font-medium     (13px, 500)
Badge:               text-xs font-medium     (12px, 500)
```

### Data Display

```
Table Header:        text-xs font-medium uppercase tracking-wider
Table Cell:          text-sm font-normal     (13px, 400)
Stat Label:          text-sm text-gray-500   (13px, 400)
Stat Value:          text-3xl font-semibold  (30px, 600)
```

---

## Line Height

Line height creates vertical rhythm and affects readability:

| Context | Line Height | Ratio |
|---------|-------------|-------|
| Display (4xl-6xl) | `1.0 - 1.1` | Tight, impactful |
| Headings (xl-3xl) | `1.2 - 1.333` | Balanced |
| Body (base-lg) | `1.428 - 1.5` | Comfortable reading |
| UI (sm-xs) | `1.538 - 1.333` | Compact interfaces |

**Guidelines:**
- **Tight (1.0-1.2)** for large display text
- **Normal (1.333-1.5)** for headings and UI
- **Relaxed (1.5-1.75)** for long-form content
- **Always align to 4px baseline grid**

---

## Letter Spacing (Tracking)

Subtle adjustments for optical balance:

| Size Range | Letter Spacing | Purpose |
|------------|----------------|---------|
| `xs-sm` | `0.005em - 0.01em` | Prevent crowding in small text |
| `base` | `0` (default) | Optimal at body size |
| `lg-2xl` | `-0.005em to -0.015em` | Tighten large text |
| `3xl-6xl` | `-0.02em to -0.03em` | Display text optical balance |
| `uppercase` | `0.05em - 0.1em` | Improve all-caps readability |

**Special Cases:**
- **Uppercase labels:** Add `tracking-wider` (0.05em)
- **Buttons:** Slight tightening `-0.005em`
- **Monospace:** No adjustments needed

---

## Text Colors

Use semantic color tokens for consistent text hierarchy:

### Light Mode

```
Primary Text:        text-gray-900       (Headings, body)
Secondary Text:      text-gray-600       (Labels, captions)
Tertiary Text:       text-gray-500       (Helper text, metadata)
Disabled Text:       text-gray-400       (Inactive elements)
Link Text:           text-blue-600       (Hyperlinks)
Error Text:          text-red-600        (Validation errors)
Success Text:        text-green-600      (Success messages)
```

### Dark Mode

```
Primary Text:        text-gray-100
Secondary Text:      text-gray-400
Tertiary Text:       text-gray-500
Disabled Text:       text-gray-600
Link Text:           text-blue-400
```

---

## Usage Guidelines

### Do's ✅

- Use consistent font sizes from the type scale
- Maintain clear hierarchy (3-4 levels per page)
- Use proper line heights for context
- Apply medium weight (500) for UI labels
- Use semibold (600) for headings
- Adjust letter spacing for display sizes
- Keep body text at 14px (base) for comfortable reading
- Use tabular numbers for data tables
- Test at actual size (don't zoom in design tools)

### Don'ts ❌

- Don't use more than 3 font weights in one view
- Don't use light weights (300 or less) for small text
- Don't set line-height below 1.2 for body text
- Don't use custom font sizes outside the scale
- Don't use uppercase for body text
- Don't set paragraphs wider than 75 characters
- Don't use pure black (#000) for text
- Don't ignore responsive typography

---

## Responsive Typography

### Mobile-First Approach

```html
<!-- Responsive heading -->
<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
  Page Title
</h1>

<!-- Responsive body -->
<p class="text-sm md:text-base lg:text-lg">
  Content text
</p>

<!-- Responsive display -->
<div class="text-4xl md:text-5xl lg:text-6xl font-bold">
  Hero Text
</div>
```

### Breakpoint Strategy

```
Mobile (< 640px):    Smaller sizes, tighter spacing
Tablet (640-1024px): Base sizes
Desktop (> 1024px):  Larger sizes for readability
```

---

## Component Examples

### Button Typography

```html
<!-- Large Button -->
<button class="text-base font-medium">
  Save Changes
</button>

<!-- Medium Button (Default) -->
<button class="text-sm font-medium">
  Save Changes
</button>

<!-- Small Button -->
<button class="text-xs font-medium">
  Save
</button>
```

### Card Typography

```html
<div class="space-y-2">
  <h3 class="text-xl font-medium text-gray-900">
    Card Title
  </h3>
  <p class="text-sm text-gray-600">
    Card description with secondary text color
  </p>
</div>
```

### Form Typography

```html
<div class="space-y-1.5">
  <label class="text-sm font-medium text-gray-700">
    Email Address
  </label>
  <input class="text-base" placeholder="you@example.com" />
  <p class="text-xs text-gray-500">
    We'll never share your email.
  </p>
</div>
```

### Table Typography

```html
<thead>
  <tr>
    <th class="text-xs font-medium text-gray-500 uppercase tracking-wider">
      Name
    </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="text-sm text-gray-900">
      John Doe
    </td>
  </tr>
</tbody>
```

---

## OpenType Features

Enable advanced typography features for enhanced readability:

```css
/* Tabular numbers for tables/data */
.font-tabular {
  font-variant-numeric: tabular-nums;
}

/* Proportional numbers for text */
.font-proportional {
  font-variant-numeric: proportional-nums;
}

/* Stylistic alternates */
.font-stylistic {
  font-feature-settings: 'ss01', 'ss02';
}
```

**Recommended:**
- Use tabular numbers in tables and dashboards
- Enable kerning for display text
- Use lining figures for UI, oldstyle for body (optional)

---

## Figma Typography Styles

### Style Naming Convention

```
Display / 6xl / Bold       → text-6xl font-bold
Heading / 4xl / Semibold   → text-4xl font-semibold
Heading / 3xl / Semibold   → text-3xl font-semibold
Heading / 2xl / Semibold   → text-2xl font-semibold
Heading / xl / Medium      → text-xl font-medium
Body / lg / Regular        → text-lg font-normal
Body / base / Regular      → text-base font-normal
Body / sm / Regular        → text-sm font-normal
Caption / xs / Regular     → text-xs font-normal
UI / Label / Medium        → text-sm font-medium
UI / Button / Medium       → text-sm font-medium
```

### Figma Settings

```
Font: Inter
Size: [Per scale]
Line Height: [Per scale]
Letter Spacing: [Per scale]
Paragraph Spacing: 16px (default)
Text Case: None (unless specified)
```

---

## Implementation

### Tailwind Config

```javascript
module.exports = {
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.8125rem', { lineHeight: '1.25rem' }],
      base: ['0.875rem', { lineHeight: '1.25rem' }],
      lg: ['1rem', { lineHeight: '1.5rem' }],
      xl: ['1.125rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3rem' }],
      '6xl': ['3.75rem', { lineHeight: '3.75rem' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
}
```

### CSS Variables

```css
:root {
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.8125rem;
  --text-base: 0.875rem;
  --text-lg: 1rem;
  --text-xl: 1.125rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
}
```

---

## Accessibility

### Contrast Requirements

- **Body text (14px):** 4.5:1 minimum
- **Large text (18px+):** 3:1 minimum
- **UI components:** 3:1 for essential elements

### Best Practices

- Use `gray-900` on `white` for maximum readability
- Never use `gray-400` or lighter for body text
- Provide sufficient line height (1.5+) for paragraphs
- Don't rely on color alone (use weight/size too)
- Support user font size preferences
- Test with browser zoom (200%+)

---

**Last Updated:** 2025-11-17
