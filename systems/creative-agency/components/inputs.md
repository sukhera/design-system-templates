# Input Components

Creative, playful input components with smooth animations and delightful interactions.

---

## Overview

Input components balance bold aesthetics with excellent usability. They feature gradient accents, smooth focus transitions, and helpful feedback states.

---

## Text Input

### Standard Input

**Visual Specs:**
```
Background: white (gray-0)
Border: 2px solid gray-200
Radius: rounded-lg (12px)
Font: text-base
Padding: px-4 py-3 (32px horizontal × 24px vertical)
Height: 56px
```

**States:**
```
Default:    border-gray-200 bg-white
Hover:      border-gray-300
Focus:      border-transparent ring-4 ring-coral-500/20 bg-gradient-to-r from-coral-500/5 to-purple-500/5
Error:      border-error-500 ring-4 ring-error-500/20
Disabled:   bg-gray-100 border-gray-200 text-gray-400
```

**Implementation:**
```tsx
<div className="space-y-2">
  <label className="text-sm font-semibold text-gray-700">
    Email Address
  </label>
  <input
    type="email"
    placeholder="you@example.com"
    className="
      w-full
      px-4 py-3
      text-base
      bg-white
      border-2 border-gray-200
      rounded-lg
      placeholder:text-gray-400
      hover:border-gray-300
      focus:outline-none
      focus:border-transparent
      focus:ring-4
      focus:ring-coral-500/20
      focus:bg-gradient-to-r
      focus:from-coral-500/5
      focus:to-purple-500/5
      disabled:bg-gray-100
      disabled:text-gray-400
      transition-all duration-200 ease-smooth
    "
  />
</div>
```

---

### Gradient Border Input

Input with animated gradient border on focus.

**Implementation:**
```tsx
<div className="relative">
  {/* Gradient border container */}
  <div className="
    absolute inset-0
    bg-gradient-sunset
    rounded-lg
    opacity-0
    group-focus-within:opacity-100
    transition-opacity duration-300
    blur-sm
  " />

  <input
    type="text"
    placeholder="Enter text..."
    className="
      relative
      w-full
      px-4 py-3
      text-base
      bg-white
      border-2 border-gray-200
      rounded-lg
      focus:outline-none
      focus:border-transparent
      focus:ring-2
      focus:ring-coral-500
      transition-all duration-300 ease-smooth
    "
  />
</div>
```

---

### Glass Input

For use over gradient backgrounds.

**Implementation:**
```tsx
<input
  type="text"
  placeholder="Search..."
  className="
    w-full
    px-4 py-3
    text-base text-white
    placeholder:text-white/60
    bg-white/20
    backdrop-blur-xl
    border border-white/30
    rounded-lg
    focus:outline-none
    focus:ring-4
    focus:ring-white/20
    focus:bg-white/30
    transition-all duration-200 ease-smooth
  "
/>
```

---

## Textarea

**Implementation:**
```tsx
<div className="space-y-2">
  <label className="text-sm font-semibold text-gray-700">
    Message
  </label>
  <textarea
    rows={4}
    placeholder="Tell us about your project..."
    className="
      w-full
      px-4 py-3
      text-base
      bg-white
      border-2 border-gray-200
      rounded-lg
      placeholder:text-gray-400
      resize-none
      hover:border-gray-300
      focus:outline-none
      focus:border-transparent
      focus:ring-4
      focus:ring-purple-500/20
      focus:bg-gradient-to-r
      focus:from-purple-500/5
      focus:to-pink-500/5
      transition-all duration-200 ease-smooth
    "
  />
</div>
```

---

## Select Dropdown

**Implementation:**
```tsx
<div className="space-y-2">
  <label className="text-sm font-semibold text-gray-700">
    Choose Option
  </label>
  <div className="relative">
    <select className="
      w-full
      px-4 py-3
      pr-10
      text-base
      bg-white
      border-2 border-gray-200
      rounded-lg
      appearance-none
      cursor-pointer
      hover:border-gray-300
      focus:outline-none
      focus:border-transparent
      focus:ring-4
      focus:ring-coral-500/20
      transition-all duration-200 ease-smooth
    ">
      <option>Select an option...</option>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>

    {/* Custom gradient arrow */}
    <div className="
      absolute right-3 top-1/2 -translate-y-1/2
      pointer-events-none
    ">
      <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 20 20">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 8l4 4 4-4"
        />
      </svg>
    </div>
  </div>
</div>
```

---

## Checkbox

**Implementation:**
```tsx
<label className="inline-flex items-center gap-3 cursor-pointer group">
  <div className="relative">
    <input
      type="checkbox"
      className="
        peer
        w-6 h-6
        appearance-none
        border-2 border-gray-300
        rounded-md
        cursor-pointer
        checked:bg-gradient-sunset
        checked:border-transparent
        focus:outline-none
        focus:ring-4
        focus:ring-coral-500/20
        transition-all duration-200 ease-smooth
      "
    />

    {/* Checkmark */}
    <svg
      className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-4 h-4
        text-white
        opacity-0
        peer-checked:opacity-100
        pointer-events-none
        transition-opacity duration-200
      "
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </div>

  <span className="text-base text-gray-700 group-hover:text-gray-900">
    I agree to the terms
  </span>
</label>
```

---

## Radio Button

**Implementation:**
```tsx
<div className="space-y-3">
  <label className="inline-flex items-center gap-3 cursor-pointer group">
    <div className="relative">
      <input
        type="radio"
        name="plan"
        className="
          peer
          w-6 h-6
          appearance-none
          border-2 border-gray-300
          rounded-full
          cursor-pointer
          checked:border-coral-500
          focus:outline-none
          focus:ring-4
          focus:ring-coral-500/20
          transition-all duration-200 ease-smooth
        "
      />

      {/* Inner dot */}
      <div className="
        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-3 h-3
        bg-gradient-sunset
        rounded-full
        scale-0
        peer-checked:scale-100
        pointer-events-none
        transition-transform duration-200 ease-bounce
      " />
    </div>

    <span className="text-base text-gray-700">Starter Plan</span>
  </label>
</div>
```

---

## Toggle Switch

**Implementation:**
```tsx
<label className="inline-flex items-center gap-3 cursor-pointer group">
  <div className="relative">
    <input
      type="checkbox"
      className="peer sr-only"
    />

    {/* Track */}
    <div className="
      w-14 h-7
      bg-gray-200
      rounded-full
      peer-checked:bg-gradient-sunset
      peer-focus:ring-4
      peer-focus:ring-coral-500/20
      transition-all duration-300 ease-smooth
    " />

    {/* Thumb */}
    <div className="
      absolute top-0.5 left-0.5
      w-6 h-6
      bg-white
      rounded-full
      shadow-md
      peer-checked:translate-x-7
      transition-transform duration-300 ease-smooth
    " />
  </div>

  <span className="text-base text-gray-700">Enable notifications</span>
</label>
```

---

## Search Input

With gradient icon accent.

**Implementation:**
```tsx
<div className="relative">
  {/* Gradient icon */}
  <div className="absolute left-4 top-1/2 -translate-y-1/2">
    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 20 20">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 16a8 8 0 100-16 8 8 0 000 16zM18 18l-4-4"
      />
    </svg>
  </div>

  <input
    type="search"
    placeholder="Search anything..."
    className="
      w-full
      pl-12 pr-4 py-3
      text-base
      bg-white
      border-2 border-gray-200
      rounded-lg
      placeholder:text-gray-400
      hover:border-gray-300
      focus:outline-none
      focus:border-transparent
      focus:ring-4
      focus:ring-purple-500/20
      transition-all duration-200 ease-smooth
    "
  />
</div>
```

---

## File Upload

Drag-and-drop with gradient accent.

**Implementation:**
```tsx
<div className="
  relative
  p-12
  border-2 border-dashed border-gray-300
  rounded-xl
  text-center
  hover:border-coral-500
  hover:bg-gradient-to-br
  hover:from-coral-500/5
  hover:to-purple-500/5
  transition-all duration-300 ease-smooth
  cursor-pointer
  group
">
  <input
    type="file"
    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
  />

  {/* Upload icon with gradient */}
  <div className="mb-4 flex justify-center">
    <div className="p-4 bg-gradient-sunset rounded-xl group-hover:scale-110 transition-transform duration-300">
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
      </svg>
    </div>
  </div>

  <p className="text-base font-semibold text-gray-700 mb-1">
    Drop your files here
  </p>
  <p className="text-sm text-gray-500">
    or click to browse
  </p>
</div>
```

---

## Usage Guidelines

### Do's ✅

- Use gradient accents on focus for visual interest
- Provide clear focus indicators for accessibility
- Animate state changes smoothly
- Use appropriate input types (email, tel, etc.)
- Include helpful placeholder text
- Provide labels for all inputs
- Show validation states clearly

### Don'ts ❌

- Don't use gradients that reduce readability
- Don't animate inputs excessively
- Don't forget focus states
- Don't use placeholder as the only label
- Don't ignore error states
- Don't make touch targets too small (min 44px)

---

## Validation States

### Success
```tsx
<div className="space-y-2">
  <input
    type="email"
    className="
      w-full px-4 py-3
      border-2 border-success-500
      ring-4 ring-success-500/20
      rounded-lg
    "
  />
  <p className="text-sm text-success-600 flex items-center gap-2">
    <IconCheck className="w-4 h-4" />
    Email is valid
  </p>
</div>
```

### Error
```tsx
<div className="space-y-2">
  <input
    type="email"
    className="
      w-full px-4 py-3
      border-2 border-error-500
      ring-4 ring-error-500/20
      rounded-lg
    "
  />
  <p className="text-sm text-error-600 flex items-center gap-2">
    <IconX className="w-4 h-4" />
    Please enter a valid email
  </p>
</div>
```

---

**Last Updated:** 2025-11-17
