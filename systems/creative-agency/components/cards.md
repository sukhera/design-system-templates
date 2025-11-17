# Cards

Elevated, gradient-accented card components with dramatic shadows and smooth hover effects.

---

## Overview

Cards are versatile containers that showcase content with style. They use gradients, glassmorphism, and bold shadows to create visual hierarchy and depth.

---

## Standard Card

Clean card with hover lift effect.

**Visual Specs:**
```
Background: white (gray-0)
Border: 1px solid gray-200
Radius: rounded-2xl (24px)
Shadow: shadow-md
Padding: p-8 (64px)
```

**Implementation:**
```tsx
<div className="
  p-8
  bg-white
  border border-gray-200
  rounded-2xl
  shadow-md
  hover:shadow-2xl
  hover:-translate-y-2
  transition-all duration-300 ease-smooth
">
  <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
    Card Title
  </h3>
  <p className="text-base text-gray-600 mb-6">
    Card description with relevant content and information.
  </p>
  <button className="px-6 py-3 bg-gradient-sunset text-white rounded-lg">
    Learn More
  </button>
</div>
```

---

## Gradient Border Card

Card with gradient border accent.

**Implementation:**
```tsx
<div className="relative p-[2px] bg-gradient-sunset rounded-2xl group">
  <div className="
    relative
    p-8
    bg-white
    rounded-2xl
    hover:-translate-y-2
    transition-all duration-300 ease-smooth
  ">
    <div className="mb-4">
      <div className="inline-flex p-3 bg-gradient-sunset rounded-xl">
        <IconStar className="w-6 h-6 text-white" />
      </div>
    </div>

    <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
      Premium Feature
    </h3>
    <p className="text-base text-gray-600">
      Highlighted card with gradient border and icon.
    </p>
  </div>
</div>
```

---

## Gradient Background Card

Full gradient card with white text.

**Implementation:**
```tsx
<div className="
  p-8
  bg-gradient-sunset
  rounded-2xl
  shadow-coral
  hover:shadow-glow-coral
  hover:scale-105
  transition-all duration-300 ease-smooth
">
  <h3 className="font-display text-2xl font-bold text-white mb-3">
    Bold Card
  </h3>
  <p className="text-base text-white/90 mb-6">
    Card with gradient background perfect for CTAs and highlights.
  </p>
  <button className="px-6 py-3 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-50">
    Get Started
  </button>
</div>
```

---

## Glass Card

Glassmorphic card for use over gradient backgrounds.

**Implementation:**
```tsx
<div className="
  p-8
  bg-white/20
  backdrop-blur-xl
  backdrop-saturate-180
  border border-white/30
  rounded-2xl
  shadow-xl
  hover:bg-white/30
  hover:-translate-y-2
  transition-all duration-300 ease-smooth
">
  <h3 className="font-display text-2xl font-semibold text-white mb-3">
    Glass Card
  </h3>
  <p className="text-base text-white/90 mb-6">
    Beautiful glassmorphism effect with backdrop blur.
  </p>
  <button className="px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-lg">
    Explore
  </button>
</div>
```

---

## Feature Card

Card optimized for feature showcases.

**Implementation:**
```tsx
<div className="
  group
  p-8
  bg-white
  border border-gray-200
  rounded-2xl
  shadow-md
  hover:shadow-2xl
  hover:-translate-y-2
  transition-all duration-300 ease-smooth
">
  {/* Gradient icon */}
  <div className="
    inline-flex
    p-4
    bg-gradient-ocean
    rounded-xl
    shadow-purple
    mb-6
    group-hover:scale-110
    transition-transform duration-300 ease-bounce
  ">
    <IconZap className="w-8 h-8 text-white" />
  </div>

  <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
    Lightning Fast
  </h3>
  <p className="text-base text-gray-600">
    Optimized for speed with cutting-edge technology and best practices.
  </p>
</div>
```

---

## Pricing Card

Pricing card with gradient accent for featured plan.

**Implementation:**
```tsx
{/* Featured Plan */}
<div className="relative">
  {/* "Popular" badge */}
  <div className="
    absolute -top-4 left-1/2 -translate-x-1/2
    px-4 py-1
    bg-gradient-sunset
    text-white
    text-sm font-semibold
    rounded-full
    shadow-coral
  ">
    Most Popular
  </div>

  <div className="
    relative
    p-8
    bg-gradient-to-br from-coral-500/5 to-purple-500/5
    border-2 border-coral-500
    rounded-2xl
    shadow-xl
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all duration-300 ease-smooth
  ">
    <div className="text-center mb-6">
      <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
        Pro Plan
      </h3>
      <div className="flex items-baseline justify-center gap-2">
        <span className="font-display text-5xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
          $49
        </span>
        <span className="text-gray-600">/month</span>
      </div>
    </div>

    <ul className="space-y-3 mb-8">
      <li className="flex items-center gap-3 text-base text-gray-700">
        <IconCheck className="w-5 h-5 text-success-500" />
        Unlimited projects
      </li>
      <li className="flex items-center gap-3 text-base text-gray-700">
        <IconCheck className="w-5 h-5 text-success-500" />
        Priority support
      </li>
      <li className="flex items-center gap-3 text-base text-gray-700">
        <IconCheck className="w-5 h-5 text-success-500" />
        Advanced analytics
      </li>
    </ul>

    <button className="w-full px-8 py-4 bg-gradient-sunset text-white font-semibold rounded-lg shadow-coral hover:shadow-glow-coral">
      Get Started
    </button>
  </div>
</div>
```

---

## Testimonial Card

Customer testimonial with gradient accent.

**Implementation:**
```tsx
<div className="
  p-8
  bg-white
  border border-gray-200
  rounded-2xl
  shadow-md
  hover:shadow-xl
  transition-all duration-300 ease-smooth
">
  {/* Quote icon */}
  <div className="mb-6">
    <svg className="w-12 h-12 text-coral-500/20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  </div>

  <p className="text-lg text-gray-700 mb-6">
    "This design system transformed our creative workflow. The gradient components are stunning and the documentation is crystal clear."
  </p>

  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-gradient-sunset rounded-full" />
    <div>
      <p className="font-semibold text-gray-900">Sarah Johnson</p>
      <p className="text-sm text-gray-600">Creative Director</p>
    </div>
  </div>
</div>
```

---

## Image Card

Card with gradient overlay on image.

**Implementation:**
```tsx
<div className="
  group
  relative
  overflow-hidden
  rounded-2xl
  shadow-lg
  hover:shadow-2xl
  transition-all duration-300 ease-smooth
">
  {/* Image */}
  <img
    src="/project-image.jpg"
    alt="Project"
    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 ease-smooth"
  />

  {/* Gradient overlay */}
  <div className="
    absolute inset-0
    bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent
    opacity-80 group-hover:opacity-90
    transition-opacity duration-300
  " />

  {/* Content */}
  <div className="absolute bottom-0 left-0 right-0 p-6">
    <h3 className="font-display text-xl font-bold text-white mb-2">
      Project Name
    </h3>
    <p className="text-base text-white/90 mb-4">
      Brief description of the project and its highlights.
    </p>
    <button className="px-4 py-2 bg-white/20 backdrop-blur-xl border border-white/30 text-white rounded-lg hover:bg-white/30">
      View Case Study
    </button>
  </div>
</div>
```

---

## Usage Guidelines

### Do's ✅

- Use gradient accents to highlight featured cards
- Apply hover effects for interactive cards
- Use glassmorphism over gradient backgrounds
- Maintain adequate padding (48px+)
- Use shadows to create visual hierarchy
- Ensure text contrast over gradients
- Group related cards with consistent styling

### Don'ts ❌

- Don't use too many gradient cards in one view
- Don't sacrifice readability for visual style
- Don't ignore hover states
- Don't use inconsistent border radius
- Don't forget responsive spacing
- Don't use gradients on all cards (visual hierarchy)

---

**Last Updated:** 2025-11-17
