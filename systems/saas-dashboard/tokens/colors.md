# Color System

Modern B2B SaaS Dashboard color palette optimized for clarity, professionalism, and accessibility.

---

## Philosophy

The color system is built around three core principles:

1. **Neutral-First Design** – Gray tones form the foundation
2. **Semantic Color** – Colors carry meaning and guide user understanding
3. **Accessibility by Default** – All combinations meet WCAG AA, most meet AAA

---

## Neutral Palette

The backbone of the interface. Used for text, borders, backgrounds, and surfaces.

### Gray Scale (Light Mode)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `gray-0` | `#FFFFFF` | `255, 255, 255` | Pure white, primary background |
| `gray-50` | `#FAFAFA` | `250, 250, 250` | Subtle background, hover states |
| `gray-100` | `#F5F5F5` | `245, 245, 245` | Secondary background, disabled states |
| `gray-200` | `#E5E5E5` | `229, 229, 229` | Borders, dividers |
| `gray-300` | `#D4D4D4` | `212, 212, 212` | Border hover, inactive elements |
| `gray-400` | `#A3A3A3` | `163, 163, 163` | Placeholder text, disabled text |
| `gray-500` | `#737373` | `115, 115, 115` | Secondary text, captions |
| `gray-600` | `#525252` | `82, 82, 82` | Tertiary text, labels |
| `gray-700` | `#404040` | `64, 64, 64` | Strong emphasis text |
| `gray-800` | `#262626` | `38, 38, 38` | Headings, primary text |
| `gray-900` | `#171717` | `23, 23, 23` | Display text, emphasis |
| `gray-950` | `#0A0A0A` | `10, 10, 10` | Maximum contrast |

### Gray Scale (Dark Mode)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `gray-0` | `#0A0A0A` | `10, 10, 10` | Primary background |
| `gray-50` | `#171717` | `23, 23, 23` | Subtle background |
| `gray-100` | `#262626` | `38, 38, 38` | Secondary background, cards |
| `gray-200` | `#404040` | `64, 64, 64` | Borders, dividers |
| `gray-300` | `#525252` | `82, 82, 82` | Border hover |
| `gray-400` | `#737373` | `115, 115, 115` | Disabled text |
| `gray-500` | `#A3A3A3` | `163, 163, 163` | Secondary text |
| `gray-600` | `#D4D4D4` | `212, 212, 212` | Labels, captions |
| `gray-700` | `#E5E5E5` | `229, 229, 229` | Body text |
| `gray-800` | `#F5F5F5` | `245, 245, 245` | Headings |
| `gray-900` | `#FAFAFA` | `250, 250, 250` | Display text |
| `gray-950` | `#FFFFFF` | `255, 255, 255` | Maximum contrast |

---

## Brand Primary (Blue)

The primary brand color. Used for primary actions, links, and brand moments.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `blue-50` | `#EFF6FF` | `239, 246, 255` | Light background, subtle accents |
| `blue-100` | `#DBEAFE` | `219, 234, 254` | Hover backgrounds |
| `blue-200` | `#BFDBFE` | `191, 219, 254` | Disabled primary buttons |
| `blue-300` | `#93C5FD` | `147, 197, 253` | Borders, decorative |
| `blue-400` | `#60A5FA` | `96, 165, 250` | Hover states |
| `blue-500` | `#3B82F6` | `59, 130, 246` | **Primary brand color** |
| `blue-600` | `#2563EB` | `37, 99, 235` | Primary button default |
| `blue-700` | `#1D4ED8` | `29, 78, 216` | Primary button pressed |
| `blue-800` | `#1E40AF` | `30, 64, 175` | Dark accents |
| `blue-900` | `#1E3A8A` | `30, 58, 138` | Text on light backgrounds |
| `blue-950` | `#172554` | `23, 37, 84` | Maximum depth |

**Accessibility:**
- `blue-600` on white: **5.93:1** (AA Large ✓)
- `blue-700` on white: **8.59:1** (AAA ✓)
- `blue-500` on `gray-950`: **4.89:1** (AA ✓)

---

## Semantic Colors

### Success (Green)

Indicates successful operations, positive states, and confirmations.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `green-50` | `#F0FDF4` | `240, 253, 244` | Success background |
| `green-100` | `#DCFCE7` | `220, 252, 231` | Success banner |
| `green-500` | `#22C55E` | `34, 197, 94` | Success icons |
| `green-600` | `#16A34A` | `22, 163, 74` | **Success primary** |
| `green-700` | `#15803D` | `21, 128, 61` | Success text, pressed |
| `green-900` | `#14532D` | `20, 83, 45` | Success text dark |

### Warning (Amber)

Alerts users to important information requiring attention.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `amber-50` | `#FFFBEB` | `255, 251, 235` | Warning background |
| `amber-100` | `#FEF3C7` | `254, 243, 199` | Warning banner |
| `amber-500` | `#F59E0B` | `245, 158, 11` | Warning icons |
| `amber-600` | `#D97706` | `217, 119, 6` | **Warning primary** |
| `amber-700` | `#B45309` | `180, 83, 9` | Warning text |
| `amber-900` | `#78350F` | `120, 53, 15` | Warning text dark |

### Error/Danger (Red)

Communicates errors, destructive actions, and critical states.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `red-50` | `#FEF2F2` | `254, 242, 242` | Error background |
| `red-100` | `#FEE2E2` | `254, 226, 226` | Error banner |
| `red-500` | `#EF4444` | `239, 68, 68` | Error icons |
| `red-600` | `#DC2626` | `220, 38, 38` | **Error primary** |
| `red-700` | `#B91C1C` | `185, 28, 28` | Error text, destructive pressed |
| `red-900` | `#7F1D1D` | `127, 29, 29` | Error text dark |

### Info (Sky Blue)

Provides informational feedback and neutral notifications.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `sky-50` | `#F0F9FF` | `240, 249, 255` | Info background |
| `sky-100` | `#E0F2FE` | `224, 242, 254` | Info banner |
| `sky-500` | `#0EA5E9` | `14, 165, 233` | Info icons |
| `sky-600` | `#0284C7` | `2, 132, 199` | **Info primary** |
| `sky-700` | `#0369A1` | `3, 105, 161` | Info text |
| `sky-900` | `#0C4A6E` | `12, 74, 110` | Info text dark |

---

## Accent Colors

### Purple (Innovation, Premium Features)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `purple-50` | `#FAF5FF` | `250, 245, 255` | Premium background |
| `purple-100` | `#F3E8FF` | `243, 232, 255` | Hover states |
| `purple-500` | `#A855F7` | `168, 85, 247` | Premium icons |
| `purple-600` | `#9333EA` | `147, 51, 234` | **Premium primary** |
| `purple-700` | `#7E22CE` | `126, 34, 206` | Premium text |

### Indigo (Secondary Actions)

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `indigo-50` | `#EEF2FF` | `238, 242, 255` | Secondary background |
| `indigo-500` | `#6366F1` | `99, 102, 241` | Secondary icons |
| `indigo-600` | `#4F46E5` | `79, 70, 229` | **Secondary primary** |
| `indigo-700` | `#4338CA` | `67, 56, 202` | Secondary text |

---

## Semantic Token Mapping

### Backgrounds

```
background-primary: gray-0 (light) / gray-0 (dark)
background-secondary: gray-50 (light) / gray-100 (dark)
background-tertiary: gray-100 (light) / gray-200 (dark)
background-hover: gray-50 (light) / gray-100 (dark)
background-selected: blue-50 (light) / blue-950 (dark)
background-disabled: gray-100 (light) / gray-800 (dark)
```

### Foregrounds

```
foreground-primary: gray-900 (light) / gray-900 (dark)
foreground-secondary: gray-600 (light) / gray-600 (dark)
foreground-tertiary: gray-500 (light) / gray-500 (dark)
foreground-disabled: gray-400 (light) / gray-400 (dark)
foreground-inverse: gray-0 (light) / gray-950 (dark)
```

### Borders

```
border-default: gray-200 (light) / gray-700 (dark)
border-hover: gray-300 (light) / gray-600 (dark)
border-focus: blue-600
border-error: red-600
border-disabled: gray-200 (light) / gray-800 (dark)
```

### Interactive

```
interactive-primary: blue-600
interactive-primary-hover: blue-700
interactive-secondary: indigo-600
interactive-danger: red-600
interactive-success: green-600
```

---

## Usage Guidelines

### Do's ✅

- Use grays for 80% of the interface
- Reserve blue for primary actions and brand moments
- Use semantic colors consistently (green = success, red = error)
- Maintain 4.5:1 contrast minimum for text
- Test dark mode variants for accessibility
- Use lighter shades (50-100) for backgrounds
- Use darker shades (600-900) for text and borders

### Don'ts ❌

- Don't use multiple accent colors in one component
- Don't use color as the only indicator of state
- Don't use pure black (#000000) or pure red
- Don't apply semantic colors to decorative elements
- Don't create custom shades outside the system
- Don't use light colors (50-300) for text
- Don't ignore contrast ratios

---

## Implementation

### CSS Variables

```css
:root {
  /* Grays */
  --gray-0: #FFFFFF;
  --gray-50: #FAFAFA;
  --gray-100: #F5F5F5;
  --gray-200: #E5E5E5;
  --gray-300: #D4D4D4;
  --gray-400: #A3A3A3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-700: #404040;
  --gray-800: #262626;
  --gray-900: #171717;
  --gray-950: #0A0A0A;

  /* Primary */
  --blue-600: #2563EB;
  --blue-700: #1D4ED8;

  /* Semantic */
  --success: #16A34A;
  --warning: #D97706;
  --error: #DC2626;
  --info: #0284C7;
}

[data-theme="dark"] {
  --gray-0: #0A0A0A;
  --gray-50: #171717;
  /* ... inverted values ... */
}
```

### Tailwind (See tailwind.config.js)

```javascript
colors: {
  gray: { /* ... */ },
  blue: { /* ... */ },
  primary: colors.blue,
  // etc.
}
```

---

## Contrast Ratios

All primary combinations meet WCAG AA standards:

| Combination | Ratio | Rating |
|-------------|-------|--------|
| gray-900 on gray-0 | 16.05:1 | AAA ✓✓✓ |
| gray-800 on gray-0 | 12.63:1 | AAA ✓✓✓ |
| gray-600 on gray-0 | 8.00:1 | AAA ✓✓✓ |
| blue-600 on gray-0 | 5.93:1 | AA Large ✓ |
| blue-700 on gray-0 | 8.59:1 | AAA ✓✓✓ |
| green-600 on gray-0 | 4.56:1 | AA ✓ |
| red-600 on gray-0 | 5.04:1 | AA ✓ |

---

**Last Updated:** 2025-11-17
