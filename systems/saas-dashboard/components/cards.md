# Cards

Card component specifications for content grouping and visual hierarchy.

---

## Overview

Cards are versatile containers for grouping related information. They're essential for dashboard layouts, content organization, and creating visual hierarchy.

---

## Base Card

### Visual Specs

```
Background: white (gray-0)
Border: 1px solid gray-200 (optional)
Radius: rounded-lg (8px)
Shadow: shadow-sm
Padding: p-6 (24px)
```

### Implementation

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
  <h3 className="text-xl font-medium text-gray-900 mb-2">
    Card Title
  </h3>
  <p className="text-sm text-gray-600">
    Card content goes here with supporting text and information.
  </p>
</div>
```

---

## Card Variants

### Flat Card (No Shadow)

```tsx
<div className="bg-white border border-gray-200 rounded-lg p-6">
  Card content
</div>
```

### Elevated Card

```tsx
<div className="bg-white rounded-lg shadow-md p-6">
  Card content
</div>
```

### Interactive Card (Hover)

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer">
  Clickable card content
</div>
```

### Selected Card

```tsx
<div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6">
  Selected card content
</div>
```

---

## Card Anatomy

### With Header & Footer

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
  {/* Header */}
  <div className="px-6 py-4 border-b border-gray-200">
    <h3 className="text-lg font-medium text-gray-900">
      Card Header
    </h3>
  </div>

  {/* Body */}
  <div className="p-6">
    <p className="text-sm text-gray-600">
      Main card content goes here.
    </p>
  </div>

  {/* Footer */}
  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
      View details →
    </button>
  </div>
</div>
```

### With Actions

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
  {/* Header with actions */}
  <div className="flex items-start justify-between mb-4">
    <h3 className="text-lg font-medium text-gray-900">
      Project Name
    </h3>
    <button className="text-gray-400 hover:text-gray-600">
      <IconMoreVertical className="h-5 w-5" />
    </button>
  </div>

  {/* Content */}
  <p className="text-sm text-gray-600 mb-4">
    Project description and details.
  </p>

  {/* Footer actions */}
  <div className="flex gap-2">
    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
      Edit
    </button>
    <button className="text-sm text-red-600 hover:text-red-700 font-medium">
      Delete
    </button>
  </div>
</div>
```

---

## Specialized Cards

### Stat Card

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500 mb-1">
        Total Revenue
      </p>
      <p className="text-3xl font-semibold text-gray-900">
        $45,231
      </p>
    </div>
    <div className="p-3 bg-blue-50 rounded-lg">
      <IconTrendingUp className="h-6 w-6 text-blue-600" />
    </div>
  </div>
  <div className="mt-4 flex items-center gap-2">
    <span className="inline-flex items-center text-sm text-green-600 font-medium">
      <IconArrowUp className="h-4 w-4 mr-1" />
      12.5%
    </span>
    <span className="text-sm text-gray-500">
      vs last month
    </span>
  </div>
</div>
```

### User Card

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
  <div className="flex items-start gap-4">
    <img
      src="/avatar.jpg"
      alt="User name"
      className="w-12 h-12 rounded-full"
    />
    <div className="flex-1">
      <h4 className="text-base font-medium text-gray-900">
        John Doe
      </h4>
      <p className="text-sm text-gray-500">
        john@example.com
      </p>
      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
          Follow
        </button>
        <button className="px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50">
          Message
        </button>
      </div>
    </div>
  </div>
</div>
```

### Feature Card

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 text-center">
  <div className="inline-flex p-3 bg-blue-50 rounded-lg mb-4">
    <IconZap className="h-8 w-8 text-blue-600" />
  </div>
  <h3 className="text-lg font-medium text-gray-900 mb-2">
    Fast Performance
  </h3>
  <p className="text-sm text-gray-600">
    Lightning-fast load times and optimized for speed.
  </p>
</div>
```

### Pricing Card

```tsx
<div className="bg-white border-2 border-blue-600 rounded-lg shadow-sm p-6">
  {/* Badge */}
  <div className="inline-flex px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full mb-4">
    Popular
  </div>

  {/* Title & Price */}
  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
    Pro Plan
  </h3>
  <div className="mb-6">
    <span className="text-4xl font-bold text-gray-900">$29</span>
    <span className="text-gray-500">/month</span>
  </div>

  {/* Features */}
  <ul className="space-y-3 mb-6">
    <li className="flex items-center gap-2 text-sm text-gray-600">
      <IconCheck className="h-5 w-5 text-green-600" />
      Unlimited projects
    </li>
    <li className="flex items-center gap-2 text-sm text-gray-600">
      <IconCheck className="h-5 w-5 text-green-600" />
      Priority support
    </li>
    <li className="flex items-center gap-2 text-sm text-gray-600">
      <IconCheck className="h-5 w-5 text-green-600" />
      Advanced analytics
    </li>
  </ul>

  {/* CTA */}
  <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
    Get Started
  </button>
</div>
```

---

## Card Sizes

### Compact

```
Padding: p-4 (16px)
Title: text-base font-medium
Content: text-sm
```

### Default

```
Padding: p-6 (24px)
Title: text-lg font-medium
Content: text-sm
```

### Spacious

```
Padding: p-8 (32px)
Title: text-xl font-semibold
Content: text-base
```

---

## Card Layouts

### Grid of Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Card content */}
    </div>
  ))}
</div>
```

### List of Cards

```tsx
<div className="space-y-4">
  {items.map(item => (
    <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Masonry Layout

```tsx
<div className="columns-1 md:columns-2 lg:columns-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="mb-6 break-inside-avoid bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Card content */}
    </div>
  ))}
</div>
```

---

## Empty State Card

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 text-center">
  <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
    <IconInbox className="h-8 w-8 text-gray-400" />
  </div>
  <h3 className="text-lg font-medium text-gray-900 mb-2">
    No items yet
  </h3>
  <p className="text-sm text-gray-500 mb-6">
    Get started by creating your first item.
  </p>
  <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
    Create Item
  </button>
</div>
```

---

## Loading Card

```tsx
<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
  <div className="space-y-3">
    <div className="h-3 bg-gray-200 rounded"></div>
    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
  </div>
</div>
```

---

## Usage Guidelines

### Do's ✅

- Group related content logically
- Use consistent padding (p-6 for most cards)
- Maintain clear hierarchy within cards
- Use shadows sparingly (shadow-sm default)
- Add hover states for interactive cards
- Use borders for flat, minimal designs
- Keep card actions visible and accessible
- Use white backgrounds for clarity

### Don'ts ❌

- Don't nest cards deeply (max 2 levels)
- Don't use heavy shadows everywhere
- Don't overcrowd cards with too much content
- Don't make non-clickable cards look clickable
- Don't use inconsistent padding across cards
- Don't forget mobile responsiveness
- Don't ignore empty and loading states

---

## Accessibility

```tsx
{/* Clickable card */}
<article
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 cursor-pointer hover:shadow-md transition-shadow focus:outline-none focus:ring-4 focus:ring-blue-100"
>
  Card content
</article>

{/* Link card */}
<a
  href="/item/123"
  className="block bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow focus:outline-none focus:ring-4 focus:ring-blue-100"
>
  Card content
</a>
```

---

## Figma Component

**Variants:**
- Property: `Type` → Default, Elevated, Interactive, Selected
- Property: `Size` → Compact, Default, Spacious
- Property: `Layout` → Simple, Header+Body, Header+Body+Footer

**Auto Layout:**
```
Padding: 24px (default)
Gap: 16px (between sections)
Corner radius: 8px
Fill: Horizontal
Hug: Vertical
```

---

## shadcn/ui Card Component

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 bg-white shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

**Usage:**

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>
```

---

**Last Updated:** 2025-11-17
