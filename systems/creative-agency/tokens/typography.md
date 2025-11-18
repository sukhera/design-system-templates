# Typography System

Bold, expressive typography that commands attention while maintaining readability and hierarchy.

---

## Philosophy

Typography in this system serves four purposes:

1. **Command Attention** – Large, bold headlines create impact
2. **Express Personality** – Font choices convey creative confidence
3. **Guide Hierarchy** – Clear size relationships create scannable content
4. **Maintain Readability** – Style never compromises legibility

---

## Font Families

### Display Font (Headlines)

**Primary:** Cal Sans (or DM Sans, Plus Jakarta Sans)

```css
font-family: 'Cal Sans', 'DM Sans', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

**Characteristics:**
- Bold, geometric letterforms
- High x-height for impact
- Optimized for large sizes (32px+)
- Supports gradient text fills beautifully

**Usage:** Hero headlines, section titles, card headers

**Weights:**
- `600` – Semibold (default)
- `700` – Bold
- `800` – Extrabold (for extra impact)

### UI Font (Body & Interface)

**Primary:** Inter (or SF Pro, System UI)

```css
font-family: 'Inter', 'SF Pro', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

**Characteristics:**
- Excellent readability at all sizes
- Comprehensive weights and styles
- Optimized for screens
- Professional yet modern

**Usage:** Body text, buttons, forms, navigation

**Weights:**
- `400` – Regular (body text)
- `500` – Medium (UI elements)
- `600` – Semibold (emphasis)
- `700` – Bold (strong emphasis)

### Monospace Font (Code)

**Primary:** JetBrains Mono (or Fira Code, SF Mono)

```css
font-family: 'JetBrains Mono', 'Fira Code', 'SF Mono', 'Menlo', monospace;
```

**Usage:** Code snippets, technical details, API keys

---

## Type Scale

Generous scale optimized for bold, impactful design.

### Display Sizes (Headlines)

| Token | Size | Line Height | Letter Spacing | Weight | Use Case |
|-------|------|-------------|----------------|--------|----------|
| `display-2xl` | `96px` | `100px` (1.04) | `-2%` | `700-800` | Hero headlines (desktop) |
| `display-xl` | `72px` | `76px` (1.05) | `-1.5%` | `700-800` | Large headers |
| `display-lg` | `56px` | `60px` (1.07) | `-1%` | `600-700` | Page titles |
| `display-md` | `40px` | `48px` (1.2) | `-0.5%` | `600-700` | Section headers |
| `display-sm` | `32px` | `40px` (1.25) | `0%` | `600` | Subsection headers |

**Font Family:** Display font (Cal Sans)

**Implementation:**
```css
.display-2xl {
  font-family: var(--font-display);
  font-size: 96px;
  line-height: 100px;
  letter-spacing: -0.02em;
  font-weight: 700;
}
```

### Body Sizes (Content)

| Token | Size | Line Height | Letter Spacing | Weight | Use Case |
|-------|------|-------------|----------------|--------|----------|
| `text-2xl` | `24px` | `32px` (1.33) | `0%` | `400-600` | Large body, intro text |
| `text-xl` | `20px` | `28px` (1.4) | `0%` | `400-600` | Emphasized body |
| `text-lg` | `18px` | `28px` (1.55) | `0%` | `400-500` | **Default body** |
| `text-base` | `16px` | `24px` (1.5) | `0%` | `400-500` | UI text, descriptions |
| `text-sm` | `14px` | `20px` (1.43) | `0%` | `400-500` | Captions, labels |
| `text-xs` | `12px` | `16px` (1.33) | `0%` | `500` | Micro copy, metadata |

**Font Family:** UI font (Inter)

**Implementation:**
```css
.text-lg {
  font-family: var(--font-ui);
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0;
  font-weight: 400;
}
```

---

## Text Styles

### Headline Styles

**Hero Title**
```css
font-family: var(--font-display);
font-size: 72px;
line-height: 76px;
font-weight: 800;
letter-spacing: -0.015em;
background: var(--gradient-sunset);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**Section Title**
```css
font-family: var(--font-display);
font-size: 40px;
line-height: 48px;
font-weight: 700;
letter-spacing: -0.005em;
color: var(--gray-900);
```

**Card Title**
```css
font-family: var(--font-display);
font-size: 24px;
line-height: 32px;
font-weight: 600;
color: var(--gray-800);
```

### Body Styles

**Lead Paragraph** (intro text)
```css
font-family: var(--font-ui);
font-size: 20px;
line-height: 32px;
font-weight: 400;
color: var(--gray-600);
```

**Body Text** (default)
```css
font-family: var(--font-ui);
font-size: 18px;
line-height: 28px;
font-weight: 400;
color: var(--gray-600);
```

**Caption**
```css
font-family: var(--font-ui);
font-size: 14px;
line-height: 20px;
font-weight: 500;
color: var(--gray-500);
text-transform: uppercase;
letter-spacing: 0.05em;
```

### UI Styles

**Button Text**
```css
font-family: var(--font-ui);
font-size: 16px;
line-height: 24px;
font-weight: 600;
letter-spacing: 0;
```

**Label**
```css
font-family: var(--font-ui);
font-size: 14px;
line-height: 20px;
font-weight: 600;
color: var(--gray-700);
```

**Input Text**
```css
font-family: var(--font-ui);
font-size: 16px;
line-height: 24px;
font-weight: 400;
color: var(--gray-900);
```

---

## Gradient Text

Text with gradient fills for maximum impact.

### Implementation

```css
/* Gradient text utility */
.text-gradient {
  background: linear-gradient(135deg, #FF6B6B 0%, #FE6B8B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Specific gradient variants */
.text-gradient-sunset {
  background: var(--gradient-sunset);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-ocean {
  background: var(--gradient-ocean);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-aurora {
  background: var(--gradient-aurora);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Usage Guidelines

✅ **Do use gradient text for:**
- Hero headlines (72px+)
- Large section titles (40px+)
- Feature callouts
- Brand moments

❌ **Don't use gradient text for:**
- Body copy (< 24px)
- Form inputs or UI elements
- Long passages of text
- Over busy backgrounds

---

## Responsive Typography

Scale adjusts for different viewports.

### Mobile (< 640px)

| Desktop Size | Mobile Size | Reduction |
|--------------|-------------|-----------|
| `display-2xl` (96px) | `48px` | 50% |
| `display-xl` (72px) | `40px` | 44% |
| `display-lg` (56px) | `32px` | 43% |
| `display-md` (40px) | `28px` | 30% |
| `display-sm` (32px) | `24px` | 25% |
| `text-2xl` (24px) | `20px` | 17% |
| `text-xl` (20px) | `18px` | 10% |
| `text-lg` (18px) | `16px` | 11% |

**Implementation:**
```css
.display-xl {
  font-size: 40px;
  line-height: 44px;
}

@media (min-width: 640px) {
  .display-xl {
    font-size: 72px;
    line-height: 76px;
  }
}
```

### Tablet (640px - 1024px)

Use 80% of desktop sizes or specific breakpoints:

```css
@media (min-width: 640px) and (max-width: 1023px) {
  .display-2xl {
    font-size: 64px;
    line-height: 68px;
  }
}
```

---

## Text Effects

### Animated Gradient Text

```css
@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.text-gradient-animated {
  background: linear-gradient(
    90deg,
    #FF6B6B 0%,
    #FE6B8B 25%,
    #8B5CF6 50%,
    #667EEA 75%,
    #FF6B6B 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 8s ease infinite;
}
```

### Text Shadow (for emphasis)

```css
/* Subtle glow on dark backgrounds */
.text-glow {
  text-shadow: 0 0 20px rgba(255, 107, 107, 0.5),
               0 0 40px rgba(255, 107, 107, 0.3);
}

/* Soft shadow for depth */
.text-shadow-soft {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Bold shadow for headlines */
.text-shadow-bold {
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}
```

---

## Usage Guidelines

### Do's ✅

- Use display font for all headlines 32px+
- Apply gradient text to large headlines (48px+)
- Maintain generous line-height for readability (1.4-1.6)
- Use negative letter-spacing on large text (-1% to -2%)
- Scale typography responsively
- Limit font weights to 3-4 per project
- Ensure high contrast for body text

### Don'ts ❌

- Don't use display font for body text
- Don't apply gradients to small text (< 24px)
- Don't use too many font weights (stick to 400, 600, 700)
- Don't ignore responsive scaling
- Don't set line-height below 1.2 for body text
- Don't use all-caps for long text passages
- Don't animate text excessively

---

## Accessibility

### Contrast Requirements

- **Large text (24px+):** Minimum 3:1 contrast ratio (WCAG AA)
- **Body text (< 24px):** Minimum 4.5:1 contrast ratio (WCAG AA)
- **Bold text (18px+ at 700 weight):** Minimum 3:1 contrast ratio

### Gradient Text Accessibility

Always provide a fallback solid color:

```css
.gradient-headline {
  color: #FF6B6B; /* Fallback */
  background: var(--gradient-sunset);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Or use @supports */
.headline {
  color: #FF6B6B;
}

@supports (background-clip: text) {
  .headline {
    background: var(--gradient-sunset);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
```

### Font Loading

Use `font-display: swap` to prevent invisible text:

```css
@font-face {
  font-family: 'Cal Sans';
  src: url('/fonts/CalSans-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
```

---

## Implementation

### CSS Variables

```css
:root {
  /* Font Families */
  --font-display: 'Cal Sans', 'DM Sans', sans-serif;
  --font-ui: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Font Sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;

  --display-sm: 32px;
  --display-md: 40px;
  --display-lg: 56px;
  --display-xl: 72px;
  --display-2xl: 96px;

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
}
```

### Tailwind Configuration

```javascript
module.exports = {
  theme: {
    fontFamily: {
      display: ['Cal Sans', 'DM Sans', 'sans-serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '28px' }],
      '2xl': ['24px', { lineHeight: '32px' }],
      '3xl': ['32px', { lineHeight: '40px' }],
      '4xl': ['40px', { lineHeight: '48px' }],
      '5xl': ['56px', { lineHeight: '60px' }],
      '6xl': ['72px', { lineHeight: '76px' }],
      '7xl': ['96px', { lineHeight: '100px' }],
    },
  },
}
```

---

## Example Compositions

### Hero Section
```html
<h1 class="font-display text-6xl md:text-7xl font-bold text-gradient-sunset">
  Design Your Future
</h1>
<p class="font-sans text-xl md:text-2xl text-gray-600 mt-6">
  Create stunning experiences with our bold, gradient-first design system.
</p>
```

### Card Header
```html
<h3 class="font-display text-2xl font-semibold text-gray-900">
  Feature Title
</h3>
<p class="font-sans text-base text-gray-600 mt-2">
  Description text with excellent readability.
</p>
```

---

**Last Updated:** 2025-11-17
