# Motion System

Playful, smooth animations that delight users without sacrificing performance.

---

## Philosophy

Motion in this system serves clear purposes:

1. **Playful Delight** – Micro-interactions create joy and personality
2. **Smooth Transitions** – All state changes feel fluid and natural
3. **Performance First** – 60fps animations using GPU acceleration
4. **Purposeful Movement** – Every animation serves a functional purpose

---

## Duration Scale

| Token | Value | Use Case |
|-------|-------|----------|
| `instant` | `100ms` | Instant feedback (hovers, focus) |
| `fast` | `200ms` | Quick transitions (dropdowns, tooltips) |
| `normal` | `300ms` | **Default animations** (modals, slides) |
| `slow` | `500ms` | Deliberate movements (page transitions) |
| `slower` | `800ms` | Dramatic effects (hero animations) |

---

## Easing Functions

### Standard Easings

```css
/* Smooth, natural motion */
--ease-default: cubic-bezier(0.4, 0.0, 0.2, 1);

/* Gentle entrance */
--ease-in: cubic-bezier(0.4, 0.0, 1, 1);

/* Smooth exit */
--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);

/* Balanced in-out */
--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
```

### Custom Easings (Playful)

```css
/* Bouncy (playful buttons) */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);

/* Spring (card hover) */
--ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Smooth acceleration */
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

---

## Animation Types

### Hover Effects

**Button Hover (Gradient Shift)**
```css
.button {
  background: var(--gradient-sunset);
  background-size: 200% auto;
  transition: background-position 300ms var(--ease-smooth);
}

.button:hover {
  background-position: right center;
}
```

**Card Lift**
```css
.card {
  transition: transform 300ms var(--ease-smooth),
              box-shadow 300ms var(--ease-smooth);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

**Link Underline Slide**
```css
.link {
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--gradient-sunset);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 300ms var(--ease-out);
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

### Entrance Animations

**Fade In Up**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 500ms var(--ease-out) forwards;
}
```

**Scale In**
```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 300ms var(--ease-smooth) forwards;
}
```

**Slide In Right**
```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-32px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in-right {
  animation: slideInRight 400ms var(--ease-out) forwards;
}
```

### Loading Animations

**Gradient Shimmer**
```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #f8f8f8 50%,
    #f0f0f0 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s ease-in-out infinite;
}
```

**Spinner (Gradient)**
```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid transparent;
  border-top-color: #FF6B6B;
  border-right-color: #FE6B8B;
  border-radius: 50%;
  animation: spin 800ms linear infinite;
}
```

**Pulse**
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Gradient Animations

**Rotating Gradient Background**
```css
@keyframes gradient-rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-animated {
  background: linear-gradient(
    270deg,
    #FF6B6B,
    #FE6B8B,
    #8B5CF6,
    #667EEA
  );
  background-size: 400% 400%;
  animation: gradient-rotate 15s ease infinite;
}
```

**Gradient Text Shimmer**
```css
@keyframes text-shimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.text-shimmer {
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
  animation: text-shimmer 8s linear infinite;
}
```

### Micro-interactions

**Button Press**
```css
.button {
  transition: transform 100ms var(--ease-default);
}

.button:active {
  transform: scale(0.98);
}
```

**Checkbox Check**
```css
@keyframes check {
  0% {
    stroke-dashoffset: 24;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.checkbox-icon {
  stroke-dasharray: 24;
  animation: check 300ms var(--ease-bounce) forwards;
}
```

**Toast Notification**
```css
@keyframes toast-in {
  from {
    opacity: 0;
    transform: translateY(100%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes toast-out {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(100%) scale(0.9);
  }
}

.toast-enter {
  animation: toast-in 300ms var(--ease-smooth);
}

.toast-exit {
  animation: toast-out 200ms var(--ease-in);
}
```

---

## Framer Motion Variants

For React applications using Framer Motion:

### Fade In Up
```javascript
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}
```

### Stagger Children
```javascript
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

### Scale Bounce
```javascript
const scaleBounce = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}
```

---

## Performance Optimization

### GPU Acceleration

Only animate properties that can be GPU accelerated:

✅ **Performant:**
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (with caution)

❌ **Avoid animating:**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `background-position` (use transform instead when possible)

### Will-Change

Use sparingly for complex animations:

```css
.card:hover {
  will-change: transform, opacity;
}
```

---

## Accessibility

### Reduced Motion

Respect user preferences:

```css
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

### Framer Motion Reduced Motion

```javascript
import { motion, useReducedMotion } from 'framer-motion'

function Component() {
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

---

## Usage Guidelines

### Do's ✅

- Keep animations under 500ms for most interactions
- Use GPU-accelerated properties (transform, opacity)
- Add playful bounce to interactive elements
- Stagger list items for visual interest
- Respect `prefers-reduced-motion`
- Test animations at 60fps
- Use gradient animations for hero sections

### Don'ts ❌

- Don't animate layout properties (width, height, margin)
- Don't make animations longer than 1s without purpose
- Don't ignore performance on lower-end devices
- Don't animate on scroll without throttling
- Don't use too many simultaneous animations
- Don't forget reduced motion preferences

---

## Implementation

### CSS Variables

```css
:root {
  /* Durations */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;

  /* Easings */
  --ease-default: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0.0, 1, 1);
  --ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Tailwind Configuration

```javascript
module.exports = {
  theme: {
    transitionDuration: {
      'instant': '100ms',
      'fast': '200ms',
      'normal': '300ms',
      'slow': '500ms',
      'slower': '800ms',
    },
    transitionTimingFunction: {
      'default': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
  },
}
```

---

**Last Updated:** 2025-11-17
