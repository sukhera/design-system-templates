# Input Fields

Comprehensive input component specifications for forms and data entry.

---

## Overview

Input fields are essential for collecting user data. This system provides accessible, consistent inputs optimized for modern SaaS applications.

---

## Text Input (Base)

### Visual Specs

```
Background: white (gray-0)
Border: 1px solid gray-300
Text: text-base (14px) gray-900
Placeholder: text-gray-400
Radius: rounded (4px)
Shadow: none (or shadow-sm)
Padding: px-3 py-2 (12px × 8px)
Height: 40px
```

### States

**Default:**
```
border-gray-300
bg-white
text-gray-900
placeholder:text-gray-400
```

**Focus:**
```
border-blue-600
ring-4 ring-blue-100
outline-none
```

**Error:**
```
border-red-600
ring-4 ring-red-100
text-red-900
```

**Disabled:**
```
bg-gray-100
border-gray-200
text-gray-400
cursor-not-allowed
```

**Read-only:**
```
bg-gray-50
border-gray-200
cursor-default
```

### Implementation

```tsx
<input
  type="text"
  placeholder="Enter text..."
  className="
    w-full
    px-3 py-2
    text-base text-gray-900
    bg-white
    border border-gray-300
    rounded
    placeholder:text-gray-400
    focus:outline-none
    focus:border-blue-600
    focus:ring-4
    focus:ring-blue-100
    disabled:bg-gray-100
    disabled:border-gray-200
    disabled:text-gray-400
    disabled:cursor-not-allowed
    transition-colors duration-200
  "
/>
```

---

## Input with Label

Complete form field with label and helper text.

```tsx
<div className="space-y-1.5">
  {/* Label */}
  <label
    htmlFor="email"
    className="block text-sm font-medium text-gray-700"
  >
    Email address
  </label>

  {/* Input */}
  <input
    id="email"
    type="email"
    placeholder="you@example.com"
    className="w-full px-3 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />

  {/* Helper text */}
  <p className="text-xs text-gray-500">
    We'll never share your email with anyone else.
  </p>
</div>
```

---

## Input with Icon

### Leading Icon

```tsx
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <IconSearch className="h-4 w-4 text-gray-400" />
  </div>
  <input
    type="text"
    placeholder="Search..."
    className="w-full pl-10 pr-3 py-2 text-base border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />
</div>
```

### Trailing Icon

```tsx
<div className="relative">
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />
  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
    <IconMail className="h-4 w-4 text-gray-400" />
  </div>
</div>
```

---

## Input Variants

### Search Input

```tsx
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <IconSearch className="h-5 w-5 text-gray-400" />
  </div>
  <input
    type="search"
    placeholder="Search..."
    className="w-full pl-10 pr-3 py-2 text-base bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />
</div>
```

### Password Input

```tsx
<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter password"
    className="w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
  >
    {showPassword ? <IconEyeOff className="h-5 w-5" /> : <IconEye className="h-5 w-5" />}
  </button>
</div>
```

### Number Input

```tsx
<input
  type="number"
  min="0"
  max="100"
  step="1"
  placeholder="0"
  className="w-full px-3 py-2 text-base font-mono border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
/>
```

### URL Input

```tsx
<div className="flex">
  <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l">
    https://
  </span>
  <input
    type="text"
    placeholder="example.com"
    className="flex-1 px-3 py-2 text-base border border-gray-300 rounded-r focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />
</div>
```

---

## Textarea

Multi-line text input.

### Visual Specs

```
Min Height: 80px (5 lines)
Resize: vertical (user can adjust)
Padding: px-3 py-2
Font: text-base
Line Height: 20px
```

### Implementation

```tsx
<textarea
  rows={4}
  placeholder="Enter description..."
  className="
    w-full
    px-3 py-2
    text-base text-gray-900
    bg-white
    border border-gray-300
    rounded
    resize-y
    placeholder:text-gray-400
    focus:outline-none
    focus:border-blue-600
    focus:ring-4
    focus:ring-blue-100
  "
/>
```

---

## Select Dropdown

### Native Select

```tsx
<select className="
  w-full
  px-3 py-2
  text-base text-gray-900
  bg-white
  border border-gray-300
  rounded
  focus:outline-none
  focus:border-blue-600
  focus:ring-4
  focus:ring-blue-100
  cursor-pointer
">
  <option value="">Select option...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

### Custom Select (Recommended)

Use a library like Radix UI or Headless UI for better UX:

```tsx
import { Select } from '@/components/ui/select'

<Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select option..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
    <SelectItem value="3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

---

## Checkbox

### Single Checkbox

```tsx
<div className="flex items-start gap-2">
  <input
    type="checkbox"
    id="terms"
    className="
      mt-0.5
      h-4 w-4
      text-blue-600
      border-gray-300
      rounded
      focus:ring-4
      focus:ring-blue-100
      cursor-pointer
    "
  />
  <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
    I agree to the{' '}
    <a href="#" className="text-blue-600 hover:underline">
      terms and conditions
    </a>
  </label>
</div>
```

### Checkbox Group

```tsx
<fieldset className="space-y-3">
  <legend className="text-sm font-medium text-gray-700 mb-2">
    Select features
  </legend>

  {['Feature A', 'Feature B', 'Feature C'].map((feature) => (
    <div key={feature} className="flex items-center gap-2">
      <input
        type="checkbox"
        id={feature}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-4 focus:ring-blue-100"
      />
      <label htmlFor={feature} className="text-sm text-gray-700 cursor-pointer">
        {feature}
      </label>
    </div>
  ))}
</fieldset>
```

---

## Radio Buttons

```tsx
<fieldset className="space-y-3">
  <legend className="text-sm font-medium text-gray-700 mb-2">
    Select plan
  </legend>

  {['Free', 'Pro', 'Enterprise'].map((plan) => (
    <div key={plan} className="flex items-center gap-2">
      <input
        type="radio"
        id={plan}
        name="plan"
        value={plan}
        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-4 focus:ring-blue-100"
      />
      <label htmlFor={plan} className="text-sm text-gray-700 cursor-pointer">
        {plan}
      </label>
    </div>
  ))}
</fieldset>
```

---

## Toggle Switch

```tsx
<button
  type="button"
  role="switch"
  aria-checked={enabled}
  onClick={() => setEnabled(!enabled)}
  className={`
    relative inline-flex h-6 w-11 items-center rounded-full
    transition-colors
    focus:outline-none
    focus:ring-4
    focus:ring-blue-100
    ${enabled ? 'bg-blue-600' : 'bg-gray-200'}
  `}
>
  <span className="sr-only">Enable notifications</span>
  <span
    className={`
      inline-block h-4 w-4 transform rounded-full bg-white transition-transform
      ${enabled ? 'translate-x-6' : 'translate-x-1'}
    `}
  />
</button>
```

---

## Input Sizes

### Small

```
Height: 32px
Padding: px-2.5 py-1.5
Font: text-sm
Icon: 14px
```

### Medium (Default)

```
Height: 40px
Padding: px-3 py-2
Font: text-base
Icon: 16px
```

### Large

```
Height: 48px
Padding: px-4 py-3
Font: text-lg
Icon: 20px
```

---

## Validation States

### Error State

```tsx
<div className="space-y-1.5">
  <label htmlFor="email-error" className="block text-sm font-medium text-gray-700">
    Email
  </label>
  <input
    id="email-error"
    type="email"
    aria-invalid="true"
    aria-describedby="email-error-message"
    className="
      w-full px-3 py-2 text-base
      bg-white
      border border-red-600
      rounded
      focus:outline-none
      focus:ring-4
      focus:ring-red-100
    "
  />
  <p id="email-error-message" className="text-xs text-red-600 flex items-center gap-1">
    <IconAlertCircle className="h-3 w-3" />
    Please enter a valid email address
  </p>
</div>
```

### Success State

```tsx
<div className="space-y-1.5">
  <label className="block text-sm font-medium text-gray-700">
    Username
  </label>
  <div className="relative">
    <input
      type="text"
      className="
        w-full px-3 py-2 pr-10 text-base
        bg-white
        border border-green-600
        rounded
        focus:outline-none
        focus:ring-4
        focus:ring-green-100
      "
    />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <IconCheck className="h-5 w-5 text-green-600" />
    </div>
  </div>
  <p className="text-xs text-green-600">
    Username is available
  </p>
</div>
```

### Warning State

```tsx
<div className="space-y-1.5">
  <label className="block text-sm font-medium text-gray-700">
    Password
  </label>
  <input
    type="password"
    className="
      w-full px-3 py-2 text-base
      bg-white
      border border-amber-600
      rounded
      focus:outline-none
      focus:ring-4
      focus:ring-amber-100
    "
  />
  <p className="text-xs text-amber-600 flex items-center gap-1">
    <IconAlertTriangle className="h-3 w-3" />
    Password is weak. Consider adding numbers and symbols.
  </p>
</div>
```

---

## Input Addons

### Prefix/Suffix Text

```tsx
<div className="flex items-center">
  <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l">
    $
  </span>
  <input
    type="number"
    placeholder="0.00"
    className="flex-1 px-3 py-2 text-base border border-gray-300 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />
  <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-50 border border-l-0 border-gray-300 rounded-r">
    USD
  </span>
</div>
```

### Button Addon

```tsx
<div className="flex">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-1 px-3 py-2 text-base border border-gray-300 rounded-l focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  />
  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-r hover:bg-blue-700">
    Subscribe
  </button>
</div>
```

---

## Usage Guidelines

### Do's ✅

- Always provide labels for inputs
- Use placeholder text as examples, not labels
- Show validation errors inline
- Provide helpful error messages
- Use appropriate input types (email, tel, number)
- Mark required fields clearly
- Use autocomplete attributes
- Support keyboard navigation
- Provide clear focus indicators
- Group related fields logically

### Don'ts ❌

- Don't use placeholder as the only label
- Don't disable autocomplete unnecessarily
- Don't validate on every keystroke (use debounce)
- Don't use vague error messages ("Invalid input")
- Don't make optional fields look required
- Don't use custom styling that breaks native behavior
- Don't forget mobile optimization
- Don't ignore accessibility attributes

---

## Accessibility

### Required Attributes

```tsx
<input
  type="text"
  id="username"
  name="username"
  required
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? "username-error" : undefined}
  autoComplete="username"
/>
```

### Screen Reader Support

- Use `<label>` elements with `htmlFor`
- Provide `aria-label` for inputs without visible labels
- Use `aria-describedby` to link errors and helper text
- Mark required fields with `aria-required`
- Indicate invalid state with `aria-invalid`

---

## Figma Components

### Input Component

**Variants:**
- Property: `State` → Default, Focus, Error, Success, Disabled
- Property: `Size` → Small, Medium, Large
- Property: `Icon` → None, Leading, Trailing

**Auto Layout:**
```
Padding: 12px × 8px (medium)
Gap: 8px (for icon)
Hug contents: Vertical
Fill container: Horizontal
```

---

## shadcn/ui Input Component

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded border border-gray-300 bg-white px-3 py-2 text-base text-gray-900",
          "placeholder:text-gray-400",
          "focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100",
          "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
          "transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

---

**Last Updated:** 2025-11-17
