# Accessibility Guidelines

Comprehensive accessibility standards for the SaaS Dashboard design system.

---

## Overview

All components in this design system are built to meet **WCAG 2.1 Level AA** standards minimum, with AAA compliance for critical user paths.

---

## Color Contrast

### Text Contrast Requirements

**WCAG AA Standards:**
- Normal text (< 18px): **4.5:1** minimum
- Large text (≥ 18px or ≥ 14px bold): **3:1** minimum

**WCAG AAA Standards:**
- Normal text: **7:1** minimum
- Large text: **4.5:1** minimum

### Verified Combinations

✅ **Passing (AAA)**
```
gray-900 on white:   16.05:1
gray-800 on white:   12.63:1
gray-600 on white:    8.00:1
blue-700 on white:    8.59:1
```

✅ **Passing (AA)**
```
gray-500 on white:    4.79:1
blue-600 on white:    5.93:1
green-600 on white:   4.56:1
red-600 on white:     5.04:1
```

❌ **Failing**
```
gray-400 on white:    2.88:1  ⚠️ Use only for disabled states
gray-300 on white:    1.85:1  ⚠️ Never use for text
```

### Testing Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Stark Plugin](https://www.getstark.co/) for Figma
- Chrome DevTools Accessibility Panel

---

## Keyboard Navigation

### Requirements

All interactive elements must be:
1. Keyboard accessible (Tab, Shift+Tab)
2. Activatable via Enter or Space
3. Have visible focus indicators
4. Follow logical tab order

### Focus Indicators

**Required for all interactive elements:**

```tsx
<button className="
  focus:outline-none
  focus:ring-4
  focus:ring-blue-100
">
  Button
</button>
```

**Never remove focus styles without replacement:**

```css
/* ❌ DON'T */
button:focus {
  outline: none;
}

/* ✅ DO */
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

### Tab Order

Ensure logical flow:
1. Header navigation
2. Main content
3. Sidebar (if present)
4. Footer

Use `tabindex` sparingly:
- `tabindex="0"` – Include in tab order
- `tabindex="-1"` – Exclude from tab order (but focusable via JS)
- Never use `tabindex` > 0

---

## ARIA Attributes

### Common Patterns

#### Buttons

```tsx
{/* Icon button with label */}
<button aria-label="Close dialog">
  <IconX className="h-5 w-5" />
</button>

{/* Button with loading state */}
<button aria-busy={isLoading} disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</button>
```

#### Forms

```tsx
<div>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    required
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
  />
  {hasError && (
    <p id="email-error" role="alert">
      Please enter a valid email
    </p>
  )}
</div>
```

#### Navigation

```tsx
<nav aria-label="Main navigation">
  <a href="/" aria-current="page">Home</a>
  <a href="/projects">Projects</a>
</nav>
```

#### Modals

```tsx
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Confirm Action</h2>
  <p id="dialog-description">Are you sure you want to proceed?</p>
</div>
```

#### Tabs

```tsx
<div role="tablist" aria-label="Settings tabs">
  <button
    role="tab"
    aria-selected={activeTab === 'general'}
    aria-controls="general-panel"
    id="general-tab"
  >
    General
  </button>
</div>

<div
  role="tabpanel"
  id="general-panel"
  aria-labelledby="general-tab"
  hidden={activeTab !== 'general'}
>
  Panel content
</div>
```

---

## Screen Readers

### Requirements

- All images must have alt text
- Form inputs must have labels
- Interactive elements need accessible names
- Use semantic HTML
- Provide skip links for long navigation

### Semantic HTML

```tsx
/* ✅ DO - Semantic HTML */
<main>
  <article>
    <header>
      <h1>Article Title</h1>
    </header>
    <section>
      <h2>Section Title</h2>
      <p>Content</p>
    </section>
  </article>
</main>

/* ❌ DON'T - Div soup */
<div>
  <div>
    <div>Title</div>
  </div>
  <div>
    <div>Section</div>
    <div>Content</div>
  </div>
</div>
```

### Skip Links

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
    focus:bg-blue-600
    focus:text-white
    focus:rounded
  "
>
  Skip to main content
</a>

<main id="main-content">
  {/* Page content */}
</main>
```

### Screen Reader Only Text

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Touch Targets

### Minimum Sizes

**Mobile:** 44px × 44px (iOS), 48px × 48px (Android)
**Desktop:** 40px × 40px minimum

### Implementation

```tsx
{/* Small visual button with larger touch target */}
<button className="
  p-2                    /* Visual padding: 8px */
  min-h-[44px] min-w-[44px]  /* Touch target: 44px */
  inline-flex items-center justify-center
">
  <IconX className="h-5 w-5" />
</button>
```

---

## Motion & Animation

### Respect User Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Tailwind Implementation

```tsx
<div className="
  motion-safe:transition-all
  motion-safe:duration-300
  motion-reduce:transition-none
">
  Content
</div>
```

---

## Forms

### Best Practices

1. **Always label inputs**
```tsx
<label htmlFor="name">Name</label>
<input id="name" type="text" />
```

2. **Group related fields**
```tsx
<fieldset>
  <legend>Contact Information</legend>
  {/* Fields */}
</fieldset>
```

3. **Indicate required fields**
```tsx
<label htmlFor="email">
  Email <span className="text-red-600" aria-label="required">*</span>
</label>
<input id="email" type="email" required aria-required="true" />
```

4. **Provide clear error messages**
```tsx
<input
  aria-invalid={hasError}
  aria-describedby="email-error"
/>
{hasError && (
  <p id="email-error" className="text-red-600 text-sm" role="alert">
    Please enter a valid email address
  </p>
)}
```

5. **Use autocomplete**
```tsx
<input type="email" autoComplete="email" />
<input type="tel" autoComplete="tel" />
```

---

## Data Tables

### Accessible Tables

```tsx
<table>
  <caption className="sr-only">User list</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
  </tbody>
</table>
```

### Sortable Headers

```tsx
<th scope="col">
  <button
    aria-label="Sort by name"
    aria-sort={sortDirection}
  >
    Name
    <IconArrow />
  </button>
</th>
```

---

## Testing Checklist

### Manual Testing

- [ ] Tab through entire interface
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Check color contrast for all text
- [ ] Verify focus indicators are visible
- [ ] Test keyboard shortcuts
- [ ] Resize text to 200%
- [ ] Test with zoom at 200%
- [ ] Use high contrast mode
- [ ] Test with reduced motion enabled

### Automated Testing

Tools:
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Pa11y](https://pa11y.org/)
- [WAVE](https://wave.webaim.org/)

```bash
# Run automated tests
npm run test:a11y
```

---

## Common Issues

### Issue: Low Contrast Text

❌ Problem:
```tsx
<p className="text-gray-400">Secondary text</p>
```

✅ Solution:
```tsx
<p className="text-gray-600">Secondary text</p>
```

### Issue: Missing Alt Text

❌ Problem:
```tsx
<img src="/logo.png" />
```

✅ Solution:
```tsx
<img src="/logo.png" alt="Company logo" />
{/* For decorative images: */}
<img src="/decoration.png" alt="" role="presentation" />
```

### Issue: No Focus Indicator

❌ Problem:
```tsx
<button className="focus:outline-none">Click</button>
```

✅ Solution:
```tsx
<button className="focus:outline-none focus:ring-4 focus:ring-blue-100">
  Click
</button>
```

### Issue: Icon-Only Button

❌ Problem:
```tsx
<button>
  <IconTrash />
</button>
```

✅ Solution:
```tsx
<button aria-label="Delete item">
  <IconTrash />
  <span className="sr-only">Delete item</span>
</button>
```

---

## Resources

### Standards & Guidelines
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Testing Tools
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Stark](https://www.getstark.co/)

### Screen Readers
- [NVDA](https://www.nvaccess.org/) (Windows, Free)
- [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Windows)
- [VoiceOver](https://www.apple.com/accessibility/voiceover/) (macOS/iOS, Built-in)
- [TalkBack](https://support.google.com/accessibility/android/answer/6283677) (Android, Built-in)

---

**Last Updated:** 2025-11-17
