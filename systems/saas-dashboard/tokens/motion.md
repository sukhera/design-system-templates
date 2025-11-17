# Motion & Animation System

Animation and interaction guidelines for smooth, purposeful motion.

---

## Philosophy

**Purposeful, Not Decorative**

Motion in B2B SaaS should:
- Guide attention to important changes
- Provide feedback for user actions
- Smooth transitions between states
- Never distract from the content
- Respect user preferences (prefers-reduced-motion)

---

## Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `fast` | 150ms | Small interactions (hover, focus) |
| `normal` | 200ms | Standard transitions (buttons, dropdowns) |
| `slow` | 300ms | Larger animations (modals, sidebars) |
| `slower` | 500ms | Page transitions, complex animations |

---

## Easing Curves

### Ease Out (Default)

Most common - elements decelerate as they finish.

```css
transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
/* Tailwind: ease-out */
```

**Use for:**
- Elements entering the viewport
- Hover states
- Focus states
- Dropdown menus

### Ease In

Elements accelerate as they start.

```css
transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
/* Tailwind: ease-in */
```

**Use for:**
- Elements exiting the viewport
- Closing modals
- Dismissing toasts

### Ease In-Out

Smooth acceleration and deceleration.

```css
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
/* Tailwind: ease-in-out */
```

**Use for:**
- Position changes
- Size changes
- Continuous animations

---

## Common Animations

### Hover States

```tsx
<button className="
  transition-colors duration-200 ease-out
  bg-blue-600 hover:bg-blue-700
">
  Button
</button>
```

### Focus States

```tsx
<input className="
  transition-all duration-200 ease-out
  border border-gray-300
  focus:border-blue-600
  focus:ring-4 focus:ring-blue-100
" />
```

### Shadow Changes

```tsx
<div className="
  transition-shadow duration-200 ease-out
  shadow-sm hover:shadow-md
">
  Card
</div>
```

### Opacity Fade

```tsx
<div className="
  transition-opacity duration-300 ease-in-out
  opacity-0 data-[state=open]:opacity-100
">
  Tooltip
</div>
```

### Scale

```tsx
<button className="
  transition-transform duration-150 ease-out
  active:scale-95
">
  Button
</button>
```

### Slide In

```tsx
<div className="
  transition-transform duration-300 ease-out
  translate-x-full data-[state=open]:translate-x-0
">
  Sidebar
</div>
```

---

## Component-Specific Animations

### Button

```tsx
{/* Hover + Active */}
<button className="
  transition-all duration-200
  bg-blue-600
  hover:bg-blue-700
  active:scale-95
">
  Click Me
</button>
```

### Card

```tsx
{/* Hover elevation */}
<div className="
  transition-shadow duration-200
  shadow-sm
  hover:shadow-md
">
  Card Content
</div>
```

### Modal

```tsx
{/* Backdrop fade + content scale */}
<div className="fixed inset-0 z-50">
  {/* Backdrop */}
  <div className="
    fixed inset-0
    bg-black
    transition-opacity duration-300
    opacity-0 data-[state=open]:opacity-50
  " />

  {/* Modal */}
  <div className="
    relative
    transition-all duration-300
    scale-95 opacity-0
    data-[state=open]:scale-100
    data-[state=open]:opacity-100
  ">
    Modal Content
  </div>
</div>
```

### Dropdown

```tsx
<div className="
  transition-all duration-200 ease-out
  origin-top-right
  scale-95 opacity-0
  data-[state=open]:scale-100
  data-[state=open]:opacity-100
">
  Dropdown Menu
</div>
```

### Toast Notification

```tsx
<div className="
  transition-all duration-300 ease-out
  translate-x-full
  data-[state=open]:translate-x-0
">
  Notification
</div>
```

### Loading Spinner

```tsx
<svg className="animate-spin h-5 w-5 text-blue-600">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
</svg>
```

---

## Micro-interactions

### Checkbox Check

```tsx
<input
  type="checkbox"
  className="
    transition-all duration-150
    checked:bg-blue-600
    checked:border-blue-600
  "
/>
```

### Toggle Switch

```tsx
<button className="
  relative w-11 h-6 rounded-full
  transition-colors duration-200
  bg-gray-200 data-[state=checked]:bg-blue-600
">
  <span className="
    absolute w-4 h-4 bg-white rounded-full
    transition-transform duration-200
    translate-x-1 data-[state=checked]:translate-x-6
  " />
</button>
```

### Progress Bar

```tsx
<div className="h-2 bg-gray-200 rounded-full overflow-hidden">
  <div
    className="h-full bg-blue-600 transition-all duration-500 ease-out"
    style={{ width: `${progress}%` }}
  />
</div>
```

---

## Page Transitions

### Fade In

```tsx
<div className="
  animate-in fade-in
  duration-300
">
  Page Content
</div>
```

### Slide Up

```tsx
<div className="
  animate-in slide-in-from-bottom-4
  duration-300
">
  Page Content
</div>
```

---

## Loading States

### Skeleton Loading

```tsx
<div className="animate-pulse space-y-4">
  <div className="h-4 bg-gray-200 rounded w-3/4" />
  <div className="h-4 bg-gray-200 rounded w-1/2" />
</div>
```

### Shimmer Effect

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer {
  animation: shimmer 2s infinite;
  background: linear-gradient(
    to right,
    #f0f0f0 4%,
    #e0e0e0 25%,
    #f0f0f0 36%
  );
  background-size: 1000px 100%;
}
```

---

## Accessibility

### Respect User Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
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

## Usage Guidelines

### Do's ✅

- Use consistent durations (150ms, 200ms, 300ms)
- Animate only necessary properties (transform, opacity)
- Respect `prefers-reduced-motion`
- Use hardware-accelerated properties
- Keep animations under 500ms
- Use `ease-out` for most interactions
- Test on slower devices

### Don'ts ❌

- Don't animate `width`, `height` directly (use `transform: scale`)
- Don't use animations longer than 500ms
- Don't animate on scroll unnecessarily
- Don't use too many simultaneous animations
- Don't ignore performance
- Don't forget to test with reduced motion
- Don't use animations without purpose

---

## Performance Tips

**Hardware Accelerated Properties:**
- `transform`
- `opacity`
- `filter`

**Avoid Animating:**
- `width`, `height` (use `transform: scale` instead)
- `top`, `left` (use `transform: translate` instead)
- `margin`, `padding`
- Complex `box-shadow`

---

**Last Updated:** 2025-11-17
