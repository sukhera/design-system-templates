# Spacing System

Generous spacing scale optimized for bold, impactful layouts with breathing room.

---

## Philosophy

Spacing creates rhythm, hierarchy, and visual breathing room:

1. **Generous Scale** – Ample white space enhances bold design elements
2. **8px Base** – Larger base unit for more dramatic spacing
3. **Consistent Rhythm** – Predictable patterns throughout the interface
4. **Flexible Application** – Works for tight UI and expansive layouts

---

## Spacing Scale

Based on an **8px** increment system.

| Token | Value | Pixels | Rem | Use Case |
|-------|-------|--------|-----|----------|
| `0` | `0px` | 0px | 0rem | No spacing |
| `0.5` | `0.125rem` | 4px | 0.125rem | Micro adjustments |
| `1` | `0.5rem` | 8px | 0.5rem | Tight spacing, icon gaps |
| `2` | `1rem` | 16px | 1rem | Small gaps, padding |
| `3` | `1.5rem` | 24px | 1.5rem | Medium gaps |
| `4` | `2rem` | 32px | 2rem | **Default spacing unit** |
| `5` | `2.5rem` | 40px | 2.5rem | Large gaps |
| `6` | `3rem` | 48px | 3rem | Section padding |
| `8` | `4rem` | 64px | 4rem | Large sections |
| `10` | `5rem` | 80px | 5rem | Extra large gaps |
| `12` | `6rem` | 96px | 6rem | Hero section padding |
| `16` | `8rem` | 128px | 8rem | Massive spacing |
| `20` | `10rem` | 160px | 10rem | Extra massive |
| `24` | `12rem` | 192px | 12rem | Ultra spacing |

---

## Semantic Spacing

### Component Spacing

**Button Padding:**
- Small: `px-4 py-2` (16px × 16px)
- Medium: `px-6 py-3` (24px × 24px)
- Large: `px-8 py-4` (32px × 32px)

**Card Padding:**
- Compact: `p-6` (48px)
- Default: `p-8` (64px)
- Spacious: `p-12` (96px)

**Input Padding:**
- Default: `px-4 py-3` (16px × 24px)
- Large: `px-6 py-4` (24px × 32px)

### Layout Spacing

**Container Padding:**
- Mobile: `px-4` (16px)
- Tablet: `px-6` (24px)
- Desktop: `px-8` (32px)
- Large Desktop: `px-12` (48px)

**Section Spacing:**
- Small: `py-12` (96px)
- Medium: `py-16` (128px)
- Large: `py-24` (192px)

**Grid Gaps:**
- Tight: `gap-4` (32px)
- Default: `gap-6` (48px)
- Loose: `gap-8` (64px)

---

## Responsive Spacing

Adjust spacing based on viewport size.

```css
/* Mobile-first approach */
.hero-section {
  padding: 3rem 1rem; /* 48px top/bottom, 16px sides */
}

@media (min-width: 768px) {
  .hero-section {
    padding: 6rem 2rem; /* 96px top/bottom, 32px sides */
  }
}

@media (min-width: 1024px) {
  .hero-section {
    padding: 8rem 3rem; /* 128px top/bottom, 48px sides */
  }
}
```

---

## Usage Guidelines

### Do's ✅

- Use generous spacing around bold elements
- Maintain consistent gaps in component groups
- Increase spacing for sections with gradients/bold colors
- Use the 8px base grid for all measurements
- Apply responsive spacing adjustments
- Give headlines extra breathing room (mb-6, mb-8)

### Don'ts ❌

- Don't use arbitrary values outside the scale
- Don't crowd bold typography
- Don't ignore responsive spacing needs
- Don't use less than 32px between major sections
- Don't forget vertical rhythm

---

## Implementation

### CSS Variables

```css
:root {
  --spacing-0: 0;
  --spacing-0-5: 4px;
  --spacing-1: 8px;
  --spacing-2: 16px;
  --spacing-3: 24px;
  --spacing-4: 32px;
  --spacing-6: 48px;
  --spacing-8: 64px;
  --spacing-12: 96px;
  --spacing-16: 128px;
  --spacing-20: 160px;
  --spacing-24: 192px;
}
```

### Tailwind Configuration

```javascript
module.exports = {
  theme: {
    spacing: {
      '0': '0',
      '0.5': '4px',
      '1': '8px',
      '2': '16px',
      '3': '24px',
      '4': '32px',
      '5': '40px',
      '6': '48px',
      '8': '64px',
      '10': '80px',
      '12': '96px',
      '16': '128px',
      '20': '160px',
      '24': '192px',
    },
  },
}
```

---

**Last Updated:** 2025-11-17
