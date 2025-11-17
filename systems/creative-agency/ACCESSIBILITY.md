# Accessibility Guidelines

Making bold, gradient-heavy designs accessible to everyone.

---

## Philosophy

Creative, vibrant designs must be accessible to all users:

1. **Style with Substance** – Bold aesthetics never compromise usability
2. **Inclusive by Design** – Consider diverse abilities from the start
3. **Test Thoroughly** – Verify accessibility with real users and tools
4. **Flexible Experience** – Support user preferences and assistive tech

---

## Color & Contrast

### WCAG Standards

**Minimum Requirements:**
- **Normal text (< 24px):** 4.5:1 contrast ratio (WCAG AA)
- **Large text (≥ 24px):** 3:1 contrast ratio (WCAG AA)
- **UI elements:** 3:1 contrast ratio (WCAG AA)

### Gradient Text Guidelines

Gradients can reduce readability. Follow these rules:

✅ **Do:**
- Use gradient text only on large headlines (48px+)
- Ensure each color in the gradient meets 3:1 minimum contrast
- Provide solid color fallback
- Test with color blindness simulators

❌ **Don't:**
- Use gradient text for body copy (< 24px)
- Use low-contrast gradients (pastel to white)
- Rely solely on gradient for meaning

**Example:**
```css
/* Good: Fallback + gradient */
.headline {
  color: #FF6B6B; /* Solid fallback */
  background: linear-gradient(135deg, #FF6B6B 0%, #FE6B8B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Bad: No fallback */
.headline {
  background: linear-gradient(135deg, #FFD1FF 0%, #C1FBA4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Text Over Gradients

When placing text over gradient backgrounds:

```tsx
{/* Add semi-transparent overlay for contrast */}
<div className="relative bg-gradient-sunset">
  <div className="absolute inset-0 bg-gray-900/60" />
  <div className="relative z-10">
    <h2 className="text-white">Readable Text</h2>
  </div>
</div>
```

### Color Blind Friendly

Test all gradients with color blindness simulators:

- **Protanopia** (red-blind)
- **Deuteranopia** (green-blind)
- **Tritanopia** (blue-blind)

**Tools:**
- Stark (Figma plugin)
- Color Oracle (desktop app)
- Chrome DevTools (Rendering > Emulate vision deficiencies)

---

## Keyboard Navigation

### Focus Indicators

All interactive elements must have visible focus states.

**Button Focus:**
```tsx
<button className="
  focus:outline-none
  focus:ring-4
  focus:ring-coral-500/20
  focus:border-coral-500
">
  Accessible Button
</button>
```

**Link Focus:**
```tsx
<a href="#" className="
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-coral-500
  rounded
">
  Accessible Link
</a>
```

### Tab Order

Ensure logical tab order:

```tsx
{/* Good: Natural DOM order */}
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
</nav>

{/* Bad: Manual tabindex */}
<nav>
  <a href="#contact" tabIndex={3}>Contact</a>
  <a href="#home" tabIndex={1}>Home</a>
  <a href="#about" tabIndex={2}>About</a>
</nav>
```

### Skip Links

Provide skip navigation for keyboard users:

```tsx
<a
  href="#main-content"
  className="
    sr-only
    focus:not-sr-only
    focus:absolute
    focus:top-4
    focus:left-4
    focus:z-50
    focus:px-4
    focus:py-2
    focus:bg-coral-600
    focus:text-white
    focus:rounded-lg
  "
>
  Skip to main content
</a>
```

---

## Screen Readers

### Semantic HTML

Use proper HTML elements:

```tsx
{/* Good: Semantic */}
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
  </ul>
</nav>

{/* Bad: Divs */}
<div className="nav">
  <div className="nav-item" onClick={...}>Home</div>
</div>
```

### ARIA Labels

Provide context for icon-only buttons:

```tsx
<button
  aria-label="Close modal"
  className="..."
>
  <IconX className="w-5 h-5" />
</button>
```

### Live Regions

Announce dynamic content:

```tsx
<div
  role="alert"
  aria-live="polite"
  className="..."
>
  Form submitted successfully!
</div>
```

### Hidden Content

Hide decorative elements from screen readers:

```tsx
{/* Decorative gradient blob */}
<div
  aria-hidden="true"
  className="absolute top-0 right-0 w-64 h-64 bg-gradient-sunset opacity-20 blur-3xl"
/>
```

---

## Motion & Animation

### Reduced Motion

Respect user preferences:

```css
/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**React/Framer Motion:**
```tsx
import { useReducedMotion } from 'framer-motion'

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
    >
      Content
    </motion.div>
  )
}
```

### Safe Animation Guidelines

✅ **Safe:**
- Fade in/out
- Slide in (< 100px)
- Scale (0.9-1.1)
- Smooth color transitions

❌ **Avoid:**
- Rapid flashing (< 3 flashes/second)
- Parallax scrolling (can cause motion sickness)
- Auto-playing carousels
- Infinite spinning (without pause)

---

## Touch Targets

### Minimum Size

All interactive elements must meet minimum touch target size:

- **Mobile:** 44px × 44px minimum
- **Desktop:** 40px × 40px minimum

```tsx
{/* Good: Large enough */}
<button className="px-6 py-3 min-w-[44px] min-h-[44px]">
  Click Me
</button>

{/* Bad: Too small */}
<button className="px-2 py-1">
  Tiny
</button>
```

### Spacing

Maintain adequate spacing between touch targets:

```tsx
{/* Good: Spacing between buttons */}
<div className="flex gap-4">
  <button>Button 1</button>
  <button>Button 2</button>
</div>

{/* Bad: No spacing */}
<div className="flex">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

---

## Forms

### Labels

Always provide visible labels:

```tsx
{/* Good: Visible label */}
<div>
  <label htmlFor="email" className="block mb-2">
    Email Address
  </label>
  <input id="email" type="email" />
</div>

{/* Bad: Placeholder only */}
<input type="email" placeholder="Email Address" />
```

### Error Messages

Announce errors to screen readers:

```tsx
<div>
  <input
    id="email"
    type="email"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
  />

  {hasError && (
    <p id="email-error" role="alert" className="text-error-600">
      Please enter a valid email address
    </p>
  )}
</div>
```

### Required Fields

Indicate required fields:

```tsx
<label htmlFor="name">
  Name
  <span className="text-error-600" aria-label="required">*</span>
</label>
<input
  id="name"
  type="text"
  required
  aria-required="true"
/>
```

---

## Testing Checklist

### Automated Testing

Run these tools regularly:

- **axe DevTools** (Chrome/Firefox extension)
- **WAVE** (Web Accessibility Evaluation Tool)
- **Lighthouse** (Chrome DevTools)
- **Pa11y** (CLI tool)

### Manual Testing

Test with real users and assistive technology:

- [ ] Keyboard navigation (Tab, Enter, Escape, Arrows)
- [ ] Screen reader (NVDA, JAWS, VoiceOver)
- [ ] Color contrast (use Chrome DevTools)
- [ ] Zoom to 200% (layout should remain usable)
- [ ] Dark mode (check contrast)
- [ ] Reduced motion preference
- [ ] Touch targets on mobile devices
- [ ] Form validation and error messages

### User Testing

Include users with disabilities:

- Visual impairments
- Motor disabilities
- Cognitive disabilities
- Hearing impairments

---

## Resources

### Guidelines

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

### Tools

- [Stark](https://www.getstark.co/) - Color contrast checker
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Color Oracle](https://colororacle.org/) - Color blindness simulator
- [NVDA](https://www.nvaccess.org/) - Free screen reader

### Further Reading

- [WebAIM](https://webaim.org/)
- [A11y Style Guide](https://a11y-style-guide.com/)
- [Inclusive Components](https://inclusive-components.design/)

---

**Last Updated:** 2025-11-17
