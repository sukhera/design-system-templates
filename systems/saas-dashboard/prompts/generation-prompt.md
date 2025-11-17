# Generation Prompts

Documentation of the AI prompts used to generate this design system.

---

## Initial Request

**User Request:**
```
Start with: SaaS Dashboard – Modern B2B (Linear/Vercel/Notion style)
```

---

## System Prompt

The design system was generated using Claude with the following specialized prompt:

```markdown
You are a Senior Product Designer, UX Architect, and Design System Expert specialized in
top-tier design practices inspired by 2025-level standards (Apple, Linear, Vercel, Superhuman,
Notion, Stripe, Shopify, Arc Browser).

Your task is to generate COMPLETE, PRODUCTION-READY design systems for modern web products.

You think and work like a hybrid:
- Figma power-user (auto-layout, variants, constraints, typography styles, grid frameworks)
- shadcn/ui + Tailwind component architect
- Canva visual system generator (marketing + brand assets)
- Design tokens specialist (W3C tokens spec)
- UI/UX strategist with deep understanding of heuristics & interaction patterns
- Systematic writer who formats everything in clean Markdown

Your outputs must always be:
- Extremely thorough
- Highly structured
- Reusable across multiple projects
- Consistent with modern 2025 design aesthetics
- Suitable for implementation in shadcn/ui, Tailwind, React, Next.js, and Figma

For every new design system, produce a COMPLETE UX direction + visual identity foundation including:

1. **Design Philosophy**
   - Core principles, personality, brand voice
   - Experience goals and tone (calm, minimal, bold, playful)

2. **Grid System**
   - Container widths
   - Column options
   - Baseline grid
   - Auto-layout rules (Figma + shadcn-compatible)

3. **Spacing Scale**
   - 4–8 based scale
   - Naming conventions
   - Application rules (components vs layouts)

4. **Typography System**
   - Font pairings
   - Type ramp (xs–6xl)
   - Line height guidance
   - Use cases per component/page
   - Tailwind + Figma styles

5. **Color System**
   - Semantic colors (primary, success, warning, danger)
   - Neutrals scale (0–1000)
   - Accent variations
   - Background/foreground mappings
   - Accessibility contrasts
   - Output as tokens AND Tailwind theme config

6. **Elevation, Shadows & Radii**
   - Soft minimalistic shadows (1–4 levels)
   - Layer depth rules
   - Curvature philosophy (rounding scale)

7. **Interaction & States**
   - Hover / Focus / Pressed / Disabled / Loading
   - Motion easing rules
   - Cursor behavior
   - State transitions (CSS, Tailwind, shadcn patterns)

8. **Iconography**
   - Style (outline, duotone, filled)
   - Stroke rules
   - Corner rules
   - Sizes (sm–xl)
   - Alignment & padding rules

9. **Motion & Animation**
   - Duration scale (fast–slow)
   - Easing curves (cubic-bezier)
   - Micro-interactions (buttons, cards, modals)
   - Page transitions

10. **Accessibility & UX Heuristics**
    - Color contrast
    - Interaction target sizing
    - Focus visibility
    - Keyboard navigation rules
    - Form validation patterns

11. **Dos and Don'ts**
    - Component usage guidelines
    - Red flags
    - Anti-patterns
    - Visual examples in textual form

12. **Example Use Cases**
    - Dashboard
    - Auth flows
    - Marketing pages
    - E-commerce product page
    - Data tables & filtering UX
```

---

## Specific Design Decisions

### Why Linear/Vercel/Notion Inspiration?

These products represent the gold standard for modern B2B SaaS:

1. **Linear** – Clean, fast, keyboard-first, purposeful
2. **Vercel** – Minimal, high contrast, developer-focused
3. **Notion** – Flexible, content-first, elegant data display

### Key Design Principles Applied

1. **Clarity Over Decoration**
   - Minimal use of color and shadows
   - High contrast for readability
   - Clear visual hierarchy

2. **Data-First Design**
   - Optimized for dense information
   - Scannable layouts
   - Thoughtful use of white space

3. **Power User Optimization**
   - Keyboard navigation throughout
   - Fast interactions (150-200ms transitions)
   - Predictable patterns

4. **Professional Aesthetics**
   - Neutral-first color palette (80% grays)
   - Inter font for readability
   - Subtle shadows and borders

---

## Design Token Decisions

### Colors

- **Neutral scale:** Based on Tailwind's neutral palette
- **Primary blue:** `#2563EB` (blue-600) for professional, trustworthy feel
- **Semantic colors:** Standard green/red/amber for success/error/warning
- **Dark mode:** True dark (#0A0A0A) not pure black

### Typography

- **Font:** Inter (exceptional at small sizes, professional)
- **Base size:** 14px (optimal for dense UIs)
- **Scale:** Tailored for dashboard use (not marketing)
- **Line heights:** Tight for headings, relaxed for body

### Spacing

- **Base:** 4px grid for pixel-perfect alignment
- **Common values:** 4, 8, 12, 16, 24, 32, 48px
- **Card padding:** 24px (6 in Tailwind) as default

### Shadows

- **Philosophy:** Subtle, minimal (inspired by Linear)
- **Levels:** 5 levels (xs, sm, md, lg, xl)
- **Opacity:** Low (0.05-0.1) for light mode
- **Dark mode:** Increase opacity 2-3x

---

## Component Decisions

### Buttons

- **Default height:** 36px (medium)
- **Padding:** 16px × 8px
- **Radius:** 4px (subtle)
- **States:** Clear hover/focus/active differentiation

### Inputs

- **Height:** 40px (larger touch target)
- **Border:** 1px solid (not 2px)
- **Focus ring:** 4px for visibility
- **States:** Error/success/disabled clearly communicated

### Cards

- **Default padding:** 24px
- **Radius:** 8px (more pronounced than buttons)
- **Shadow:** shadow-sm default
- **Hover:** Lift with shadow-md

---

## Implementation Stack

### Recommended Technologies

```
Framework:     React + Next.js 14+ (App Router)
Styling:       Tailwind CSS 3.4+
Components:    shadcn/ui
Icons:         Lucide Icons or Heroicons
Charts:        Recharts or Tremor
Forms:         React Hook Form + Zod
Animation:     Framer Motion (minimal usage)
```

### Why These Choices?

- **Next.js:** Best-in-class React framework
- **Tailwind:** Utility-first, design system friendly
- **shadcn/ui:** Composable, customizable, production-ready
- **Lucide:** Consistent, professional icon set

---

## Figma Implementation

### Plugin Recommendations

1. **Tokens Studio** – For design token management
2. **Stark** – Accessibility contrast checking
3. **Auto Layout** – Built-in, use extensively
4. **Component** – Built-in, create variants

### Structure in Figma

```
Design System File
├── 📄 Cover
├── 🎨 Tokens
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   └── Effects (Shadows)
├── 🧱 Components
│   ├── Buttons
│   ├── Inputs
│   ├── Cards
│   └── Navigation
├── 📐 Layouts
│   ├── Dashboard
│   ├── Forms
│   └── Tables
└── 🖼️ Examples
    ├── Analytics Dashboard
    ├── Settings Page
    └── User Profile
```

---

## Iteration & Refinement

This design system was generated in a single session but should be considered a foundation. Recommended next steps:

1. **User testing** – Validate with actual users
2. **Component expansion** – Add dropdowns, tooltips, toasts
3. **Pattern library** – Document common UX patterns
4. **Accessibility audit** – Test with assistive technologies
5. **Performance testing** – Ensure fast load times
6. **Documentation site** – Build interactive component docs

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-11-17 | Initial generation |

---

## License

This design system is provided as-is for use in your projects. Attribution appreciated but not required.

---

## Credits

**Generated by:** Claude (Anthropic)
**Inspired by:** Linear, Vercel, Notion, Stripe, Superhuman
**Design tokens spec:** W3C Design Tokens Community Group
**Component architecture:** shadcn/ui patterns

---

**Last Updated:** 2025-11-17
