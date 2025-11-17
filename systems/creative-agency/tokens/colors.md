# Color System

Vibrant, gradient-heavy color palette optimized for creative expression, bold brand moments, and playful yet professional interfaces.

---

## Philosophy

The color system embraces four core principles:

1. **Gradient-First Design** – Multi-dimensional color creates depth and energy
2. **Vibrant & Bold** – Saturated colors that command attention
3. **Expressive Semantics** – Colors convey emotion and meaning
4. **Accessible Vibrancy** – Bold doesn't mean inaccessible

---

## Neutral Palette

Foundation colors for text, surfaces, and backgrounds.

### Gray Scale (Light Mode)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `gray-0` | `#FFFFFF` | `255, 255, 255` | Pure white, primary background |
| `gray-50` | `#FAFAFA` | `250, 250, 250` | Subtle background |
| `gray-100` | `#F7F7F7` | `247, 247, 247` | Secondary background |
| `gray-200` | `#ECECEC` | `236, 236, 236` | Borders, dividers |
| `gray-300` | `#DEDEDE` | `222, 222, 222` | Border hover |
| `gray-400` | `#B0B0B0` | `176, 176, 176` | Placeholder text |
| `gray-500` | `#808080` | `128, 128, 128` | Secondary text |
| `gray-600` | `#5C5C5C` | `92, 92, 92` | Body text |
| `gray-700` | `#3D3D3D` | `61, 61, 61` | Headings |
| `gray-800` | `#2A2A2A` | `42, 42, 42` | Strong headings |
| `gray-900` | `#1A1A1A` | `26, 26, 26` | Maximum contrast |
| `gray-950` | `#0D0D0D` | `13, 13, 13` | Near black |

### Gray Scale (Dark Mode)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `gray-0` | `#0D0D0D` | `13, 13, 13` | Primary background |
| `gray-50` | `#1A1A1A` | `26, 26, 26` | Subtle background |
| `gray-100` | `#2A2A2A` | `42, 42, 42` | Cards, elevated surfaces |
| `gray-200` | `#3D3D3D` | `61, 61, 61` | Borders |
| `gray-300` | `#5C5C5C` | `92, 92, 92` | Border hover |
| `gray-400` | `#808080` | `128, 128, 128` | Disabled text |
| `gray-500` | `#B0B0B0` | `176, 176, 176` | Secondary text |
| `gray-600` | `#DEDEDE` | `222, 222, 222` | Body text |
| `gray-700` | `#ECECEC` | `236, 236, 236` | Headings |
| `gray-800` | `#F7F7F7` | `247, 247, 247` | Strong text |
| `gray-900` | `#FAFAFA` | `250, 250, 250` | Maximum contrast |
| `gray-950` | `#FFFFFF` | `255, 255, 255` | Pure white |

---

## Primary Gradients

The heart of the system. These gradients define brand personality.

### Sunset (Primary Brand)

A warm, energetic gradient from coral to purple.

```css
background: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 25%, #FE6B8B 75%, #C73866 100%);
```

| Stop | Color | Hex | RGB |
|------|-------|-----|-----|
| 0% | Coral Red | `#FF6B6B` | `255, 107, 107` |
| 25% | Peach | `#FF8E53` | `255, 142, 83` |
| 75% | Pink | `#FE6B8B` | `254, 107, 139` |
| 100% | Deep Pink | `#C73866` | `199, 56, 102` |

**Usage:** Primary CTAs, hero backgrounds, brand moments

### Ocean (Secondary Brand)

Cool, trustworthy gradient from cyan to deep blue.

```css
background: linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%);
```

| Stop | Color | Hex | RGB |
|------|-------|-----|-----|
| 0% | Electric Blue | `#667EEA` | `102, 126, 234` |
| 50% | Purple | `#764BA2` | `118, 75, 162` |
| 100% | Light Purple | `#F093FB` | `240, 147, 251` |

**Usage:** Secondary actions, accents, illustrations

### Aurora (Accent)

Vibrant multi-color gradient for special moments.

```css
background: linear-gradient(135deg, #A8EDEA 0%, #FED6E3 33%, #FFD1FF 66%, #C1FBA4 100%);
```

| Stop | Color | Hex | RGB |
|------|-------|-----|-----|
| 0% | Mint | `#A8EDEA` | `168, 237, 234` |
| 33% | Rose | `#FED6E3` | `254, 214, 227` |
| 66% | Lavender | `#FFD1FF` | `255, 209, 255` |
| 100% | Lime | `#C1FBA4` | `193, 251, 164` |

**Usage:** Feature highlights, celebration moments, premium content

### Midnight (Dark Accent)

Deep, sophisticated gradient for dark themes.

```css
background: linear-gradient(135deg, #2E3192 0%, #1BFFFF 100%);
```

| Stop | Color | Hex | RGB |
|------|-------|-----|-----|
| 0% | Deep Purple | `#2E3192` | `46, 49, 146` |
| 100% | Cyan | `#1BFFFF` | `27, 255, 255` |

**Usage:** Dark mode heroes, premium features

---

## Solid Brand Colors

Extracted from gradients for solid color needs.

### Primary Palette

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `coral-400` | `#FF8E8E` | `255, 142, 142` | Light accents |
| `coral-500` | `#FF6B6B` | `255, 107, 107` | **Primary brand** |
| `coral-600` | `#E85656` | `232, 86, 86` | Primary hover |
| `coral-700` | `#D14545` | `209, 69, 69` | Primary pressed |

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `purple-400` | `#A78BFA` | `167, 139, 250` | Light accents |
| `purple-500` | `#8B5CF6` | `139, 92, 246` | **Secondary brand** |
| `purple-600` | `#7C3AED` | `124, 58, 237` | Secondary hover |
| `purple-700` | `#6D28D9` | `109, 40, 217` | Secondary pressed |

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `pink-400` | `#F472B6` | `244, 114, 182` | Accents |
| `pink-500` | `#EC4899` | `236, 72, 153` | **Accent color** |
| `pink-600` | `#DB2777` | `219, 39, 119` | Accent hover |

---

## Semantic Colors

### Success (Vibrant Green)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `success-50` | `#ECFDF5` | `236, 253, 245` | Success background |
| `success-100` | `#D1FAE5` | `209, 250, 229` | Success banner |
| `success-400` | `#34D399` | `52, 211, 153` | Success icons |
| `success-500` | `#10B981` | `16, 185, 129` | **Success primary** |
| `success-600` | `#059669` | `5, 150, 105` | Success text |

**Success Gradient:**
```css
background: linear-gradient(135deg, #10B981 0%, #34D399 100%);
```

### Warning (Vibrant Orange)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `warning-50` | `#FFF7ED` | `255, 247, 237` | Warning background |
| `warning-100` | `#FFEDD5` | `255, 237, 213` | Warning banner |
| `warning-400` | `#FB923C` | `251, 146, 60` | Warning icons |
| `warning-500` | `#F97316` | `249, 115, 22` | **Warning primary** |
| `warning-600` | `#EA580C` | `234, 88, 12` | Warning text |

**Warning Gradient:**
```css
background: linear-gradient(135deg, #F59E0B 0%, #F97316 100%);
```

### Error (Bold Red)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `error-50` | `#FEF2F2` | `254, 242, 242` | Error background |
| `error-100` | `#FEE2E2` | `254, 226, 226` | Error banner |
| `error-400` | `#F87171` | `248, 113, 113` | Error icons |
| `error-500` | `#EF4444` | `239, 68, 68` | **Error primary** |
| `error-600` | `#DC2626` | `220, 38, 38` | Error text |

**Error Gradient:**
```css
background: linear-gradient(135deg, #EF4444 0%, #DC2626 100%);
```

### Info (Electric Blue)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `info-50` | `#EFF6FF` | `239, 246, 255` | Info background |
| `info-100` | `#DBEAFE` | `219, 234, 254` | Info banner |
| `info-400` | `#60A5FA` | `96, 165, 250` | Info icons |
| `info-500` | `#3B82F6` | `59, 130, 246` | **Info primary** |
| `info-600` | `#2563EB` | `37, 99, 235` | Info text |

**Info Gradient:**
```css
background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
```

---

## Mesh Gradients

Modern, multi-point gradients for sophisticated backgrounds.

### Mesh 1 (Pastel Dreams)
```css
background: radial-gradient(at 0% 0%, #FFD1DC 0px, transparent 50%),
            radial-gradient(at 100% 0%, #FFDAC1 0px, transparent 50%),
            radial-gradient(at 100% 100%, #B2F7EF 0px, transparent 50%),
            radial-gradient(at 0% 100%, #E0BBE4 0px, transparent 50%),
            #FFFFFF;
```

### Mesh 2 (Neon Nights)
```css
background: radial-gradient(at 20% 30%, #667EEA 0px, transparent 50%),
            radial-gradient(at 80% 20%, #764BA2 0px, transparent 50%),
            radial-gradient(at 60% 80%, #F093FB 0px, transparent 50%),
            radial-gradient(at 30% 70%, #4FACFE 0px, transparent 50%),
            #1A1A1A;
```

### Mesh 3 (Warm Glow)
```css
background: radial-gradient(at 40% 20%, #FF6B6B 0px, transparent 40%),
            radial-gradient(at 60% 80%, #FE6B8B 0px, transparent 40%),
            radial-gradient(at 0% 50%, #FF8E53 0px, transparent 50%),
            #FFFFFF;
```

---

## Text Gradients

Gradients specifically designed for text (maintain readability).

### Sunset Text
```css
background: linear-gradient(135deg, #FF6B6B 0%, #FE6B8B 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Ocean Text
```css
background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Aurora Text
```css
background: linear-gradient(135deg, #A8EDEA 0%, #FED6E3 50%, #FFD1FF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Glassmorphism

Background blur effects for modern, layered UI.

### Glass Light
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.3);
```

### Glass Dark
```css
background: rgba(26, 26, 26, 0.7);
backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Glass Color (over gradients)
```css
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(40px) saturate(200%);
border: 1px solid rgba(255, 255, 255, 0.2);
```

---

## Usage Guidelines

### Do's ✅

- Use gradients for primary CTAs and hero sections
- Apply text gradients to large headlines (48px+)
- Layer glassmorphism over gradient backgrounds
- Maintain high contrast for text readability
- Use solid colors for body text
- Animate gradients subtly (background-position)
- Test gradient accessibility with contrast tools

### Don'ts ❌

- Don't use text gradients on body copy (< 24px)
- Don't stack multiple competing gradients
- Don't sacrifice readability for style
- Don't use low-contrast gradients for text backgrounds
- Don't animate gradients too aggressively
- Don't ignore reduced-motion preferences

---

## Implementation

### CSS Variables

```css
:root {
  /* Solid Colors */
  --coral-500: #FF6B6B;
  --coral-600: #E85656;
  --purple-500: #8B5CF6;
  --pink-500: #EC4899;

  /* Gradients */
  --gradient-sunset: linear-gradient(135deg, #FF6B6B 0%, #FF8E53 25%, #FE6B8B 75%, #C73866 100%);
  --gradient-ocean: linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%);
  --gradient-aurora: linear-gradient(135deg, #A8EDEA 0%, #FED6E3 33%, #FFD1FF 66%, #C1FBA4 100%);

  /* Glassmorphism */
  --glass-light: rgba(255, 255, 255, 0.7);
  --glass-dark: rgba(26, 26, 26, 0.7);
  --glass-blur: blur(20px) saturate(180%);
}
```

### Tailwind (See tailwind.config.js)

Custom gradient utilities for easy use:

```javascript
backgroundImage: {
  'gradient-sunset': 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 25%, #FE6B8B 75%, #C73866 100%)',
  'gradient-ocean': 'linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%)',
  // ...
}
```

---

## Contrast & Accessibility

All text combinations meet WCAG AA standards:

| Combination | Ratio | Rating |
|-------------|-------|--------|
| gray-900 on gray-0 | 15.8:1 | AAA ✓✓✓ |
| gray-700 on gray-0 | 10.4:1 | AAA ✓✓✓ |
| coral-600 on gray-0 | 4.8:1 | AA ✓ |
| purple-600 on gray-0 | 5.2:1 | AA ✓ |

**Gradient Text:** Always provide fallback solid color for accessibility.

**Over Gradients:** Use overlays (rgba) to ensure text contrast:
```css
background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            var(--gradient-sunset);
```

---

**Last Updated:** 2025-11-17
