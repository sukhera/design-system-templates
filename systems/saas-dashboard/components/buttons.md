# Buttons

Complete button component specifications for the SaaS Dashboard design system.

---

## Overview

Buttons are the primary interactive elements for triggering actions. This system provides a comprehensive set of button variants optimized for clarity, accessibility, and modern SaaS workflows.

---

## Variants

### Primary Button

The main call-to-action button. Use sparingly (1-2 per view).

**Visual Specs:**
```
Background: blue-600
Text: white (gray-0)
Border: none
Radius: rounded (4px)
Shadow: none (or shadow-xs on hover)
Font: text-sm font-medium
Padding: px-4 py-2 (16px × 8px)
Height: 36px (medium)
```

**States:**
```
Default:    bg-blue-600 text-white
Hover:      bg-blue-700
Pressed:    bg-blue-800
Focus:      ring-4 ring-blue-100
Disabled:   bg-gray-200 text-gray-400 cursor-not-allowed
Loading:    bg-blue-600 with spinner
```

**Implementation:**
```tsx
<button className="
  px-4 py-2
  text-sm font-medium
  text-white
  bg-blue-600
  rounded
  hover:bg-blue-700
  focus:outline-none
  focus:ring-4
  focus:ring-blue-100
  disabled:bg-gray-200
  disabled:text-gray-400
  disabled:cursor-not-allowed
  transition-colors duration-200
">
  Primary Action
</button>
```

---

### Secondary Button

Secondary actions, less emphasis than primary.

**Visual Specs:**
```
Background: transparent
Text: gray-700
Border: 1px solid gray-300
Radius: rounded (4px)
Shadow: none
Font: text-sm font-medium
Padding: px-4 py-2
```

**States:**
```
Default:    border-gray-300 text-gray-700 bg-white
Hover:      border-gray-400 bg-gray-50
Pressed:    border-gray-500 bg-gray-100
Focus:      ring-4 ring-gray-100
Disabled:   border-gray-200 text-gray-400
```

**Implementation:**
```tsx
<button className="
  px-4 py-2
  text-sm font-medium
  text-gray-700
  bg-white
  border border-gray-300
  rounded
  hover:bg-gray-50
  hover:border-gray-400
  focus:outline-none
  focus:ring-4
  focus:ring-gray-100
  disabled:border-gray-200
  disabled:text-gray-400
  disabled:cursor-not-allowed
  transition-colors duration-200
">
  Secondary Action
</button>
```

---

### Ghost Button

Minimal button for tertiary actions.

**Visual Specs:**
```
Background: transparent
Text: gray-600
Border: none
Radius: rounded (4px)
Shadow: none
Font: text-sm font-medium
Padding: px-3 py-2
```

**States:**
```
Default:    text-gray-600 bg-transparent
Hover:      bg-gray-100 text-gray-700
Pressed:    bg-gray-200
Focus:      ring-4 ring-gray-100
Disabled:   text-gray-400
```

**Implementation:**
```tsx
<button className="
  px-3 py-2
  text-sm font-medium
  text-gray-600
  bg-transparent
  rounded
  hover:bg-gray-100
  hover:text-gray-700
  focus:outline-none
  focus:ring-4
  focus:ring-gray-100
  disabled:text-gray-400
  disabled:cursor-not-allowed
  transition-colors duration-200
">
  Ghost Action
</button>
```

---

### Danger/Destructive Button

For destructive actions (delete, remove, etc.).

**Visual Specs:**
```
Background: red-600
Text: white
Border: none
Radius: rounded (4px)
Shadow: none
Font: text-sm font-medium
Padding: px-4 py-2
```

**States:**
```
Default:    bg-red-600 text-white
Hover:      bg-red-700
Pressed:    bg-red-800
Focus:      ring-4 ring-red-100
Disabled:   bg-gray-200 text-gray-400
```

**Implementation:**
```tsx
<button className="
  px-4 py-2
  text-sm font-medium
  text-white
  bg-red-600
  rounded
  hover:bg-red-700
  focus:outline-none
  focus:ring-4
  focus:ring-red-100
  disabled:bg-gray-200
  disabled:text-gray-400
  disabled:cursor-not-allowed
  transition-colors duration-200
">
  Delete
</button>
```

---

### Danger Outline Button

Less aggressive destructive action.

**Visual Specs:**
```
Background: transparent
Text: red-600
Border: 1px solid red-600
Radius: rounded (4px)
```

**States:**
```
Default:    border-red-600 text-red-600 bg-white
Hover:      bg-red-50
Pressed:    bg-red-100
Focus:      ring-4 ring-red-100
```

**Implementation:**
```tsx
<button className="
  px-4 py-2
  text-sm font-medium
  text-red-600
  bg-white
  border border-red-600
  rounded
  hover:bg-red-50
  focus:outline-none
  focus:ring-4
  focus:ring-red-100
  transition-colors duration-200
">
  Cancel Subscription
</button>
```

---

## Sizes

### Small
```
Padding: px-3 py-1.5 (12px × 6px)
Font: text-xs font-medium
Height: 28px
Icon Size: 14px
Gap: gap-1.5 (6px)
```

### Medium (Default)
```
Padding: px-4 py-2 (16px × 8px)
Font: text-sm font-medium
Height: 36px
Icon Size: 16px
Gap: gap-2 (8px)
```

### Large
```
Padding: px-6 py-3 (24px × 12px)
Font: text-base font-medium
Height: 48px
Icon Size: 20px
Gap: gap-2 (8px)
```

---

## Icon Buttons

Buttons with only an icon, no text.

### Sizes

**Small:** `32px × 32px`, icon `16px`
**Medium:** `40px × 40px`, icon `20px`
**Large:** `48px × 48px`, icon `24px`

**Implementation:**
```tsx
{/* Medium icon button */}
<button className="
  inline-flex items-center justify-center
  w-10 h-10
  text-gray-600
  rounded
  hover:bg-gray-100
  focus:outline-none
  focus:ring-4
  focus:ring-gray-100
  transition-colors duration-200
">
  <IconSettings className="w-5 h-5" />
</button>
```

---

## Button Groups

Adjacent buttons forming a logical group.

**Horizontal Group:**
```tsx
<div className="inline-flex rounded overflow-hidden border border-gray-300">
  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border-r border-gray-300">
    Left
  </button>
  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border-r border-gray-300">
    Middle
  </button>
  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
    Right
  </button>
</div>
```

**Split Button:**
```tsx
<div className="inline-flex">
  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-l hover:bg-blue-700">
    Save
  </button>
  <button className="px-2 py-2 text-white bg-blue-600 border-l border-blue-700 rounded-r hover:bg-blue-700">
    <IconChevronDown className="w-4 h-4" />
  </button>
</div>
```

---

## Loading State

Show loading spinner when action is processing.

**Implementation:**
```tsx
<button
  disabled
  className="
    px-4 py-2
    text-sm font-medium
    text-white
    bg-blue-600
    rounded
    inline-flex items-center gap-2
    cursor-wait
  "
>
  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
  Loading...
</button>
```

---

## Usage Guidelines

### Do's ✅

- Use **one primary button** per view
- Place primary action on the right (or bottom on mobile)
- Use semantic colors (red for destructive actions)
- Provide clear, action-oriented labels ("Save changes" not "OK")
- Include icons for clarity (but not required)
- Use loading states for async actions
- Ensure 40px minimum touch target on mobile
- Provide focus indicators for keyboard navigation
- Use full-width buttons on mobile when appropriate

### Don'ts ❌

- Don't use multiple primary buttons in one view
- Don't use vague labels ("Submit", "Continue")
- Don't disable buttons without explanation
- Don't make buttons too small (< 32px height)
- Don't use icons without accessible labels
- Don't ignore loading/error states
- Don't mix button styles inconsistently
- Don't use buttons for navigation (use links)

---

## Accessibility

### Requirements

- **ARIA labels** for icon-only buttons
- **Focus indicators** visible and high-contrast
- **Disabled state** communicated to screen readers
- **Loading state** announced to screen readers
- **Minimum touch target:** 40px × 40px (mobile)
- **Keyboard navigation:** Enter and Space trigger action

### Example

```tsx
<button
  aria-label="Delete item"
  aria-busy={isLoading}
  disabled={isLoading}
  className="..."
>
  {isLoading ? 'Deleting...' : 'Delete'}
</button>
```

---

## shadcn/ui Integration

If using shadcn/ui Button component:

```tsx
import { Button } from "@/components/ui/button"

{/* Primary */}
<Button variant="default">Primary</Button>

{/* Secondary */}
<Button variant="outline">Secondary</Button>

{/* Ghost */}
<Button variant="ghost">Ghost</Button>

{/* Destructive */}
<Button variant="destructive">Delete</Button>

{/* With icon */}
<Button>
  <IconPlus className="mr-2 h-4 w-4" />
  Add Item
</Button>

{/* Icon only */}
<Button variant="ghost" size="icon">
  <IconSettings className="h-5 w-5" />
  <span className="sr-only">Settings</span>
</Button>
```

---

## Figma Component

### Structure

**Figma Component:** `Button`

**Variants:**
- Property: `Variant` → Primary, Secondary, Ghost, Danger, Danger Outline
- Property: `Size` → Small, Medium, Large
- Property: `State` → Default, Hover, Pressed, Focus, Disabled, Loading
- Property: `Icon` → None, Left, Right, Only

**Auto Layout:**
```
Direction: Horizontal
Padding: 16px × 8px (medium)
Gap: 8px
Hug contents: Both
Corner radius: 4px
```

**Text Layer:**
```
Font: Inter Medium
Size: 13px (small), 14px (medium), 16px (large)
```

---

## Complete shadcn/ui Button Component

Reference implementation for React + Tailwind:

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-100",
        secondary: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-100",
        ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus-visible:ring-gray-100",
        destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-100",
        destructiveOutline: "border border-red-600 bg-white text-red-600 hover:bg-red-50 focus-visible:ring-red-100",
      },
      size: {
        sm: "h-7 px-3 text-xs gap-1.5",
        md: "h-9 px-4 text-sm gap-2",
        lg: "h-12 px-6 text-base gap-2",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

**Last Updated:** 2025-11-17
