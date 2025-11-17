# Navigation

Navigation components for SaaS dashboard interfaces.

---

## Overview

Navigation is critical for dashboard usability. This system provides sidebar, top nav, and breadcrumb patterns optimized for B2B applications.

---

## Sidebar Navigation

### Collapsed Sidebar (64px)

```tsx
<aside className="flex flex-col w-16 h-screen bg-gray-900 border-r border-gray-800">
  {/* Logo */}
  <div className="flex items-center justify-center h-16 border-b border-gray-800">
    <IconLogo className="h-8 w-8 text-white" />
  </div>

  {/* Nav items */}
  <nav className="flex-1 p-2 space-y-1">
    <button className="flex items-center justify-center w-full h-12 text-gray-400 rounded hover:bg-gray-800 hover:text-white">
      <IconHome className="h-5 w-5" />
    </button>
    <button className="flex items-center justify-center w-full h-12 text-white bg-gray-800 rounded">
      <IconDashboard className="h-5 w-5" />
    </button>
    <button className="flex items-center justify-center w-full h-12 text-gray-400 rounded hover:bg-gray-800 hover:text-white">
      <IconSettings className="h-5 w-5" />
    </button>
  </nav>

  {/* User */}
  <div className="p-2 border-t border-gray-800">
    <button className="flex items-center justify-center w-full h-12 rounded hover:bg-gray-800">
      <img src="/avatar.jpg" alt="User" className="w-8 h-8 rounded-full" />
    </button>
  </div>
</aside>
```

### Expanded Sidebar (256px)

```tsx
<aside className="flex flex-col w-64 h-screen bg-gray-900 border-r border-gray-800">
  {/* Header */}
  <div className="flex items-center gap-3 px-4 h-16 border-b border-gray-800">
    <IconLogo className="h-8 w-8 text-white" />
    <span className="text-lg font-semibold text-white">Dashboard</span>
  </div>

  {/* Nav */}
  <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
    {/* Active item */}
    <a
      href="/dashboard"
      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-gray-800 rounded"
    >
      <IconHome className="h-5 w-5" />
      Home
    </a>

    {/* Default item */}
    <a
      href="/projects"
      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 rounded hover:bg-gray-800 hover:text-white"
    >
      <IconFolder className="h-5 w-5" />
      Projects
    </a>

    {/* Section */}
    <div className="pt-4 pb-2">
      <h4 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Settings
      </h4>
    </div>

    <a
      href="/settings"
      className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 rounded hover:bg-gray-800 hover:text-white"
    >
      <IconSettings className="h-5 w-5" />
      Settings
    </a>
  </nav>

  {/* User */}
  <div className="p-3 border-t border-gray-800">
    <button className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded hover:bg-gray-800">
      <img src="/avatar.jpg" alt="User" className="w-8 h-8 rounded-full" />
      <div className="flex-1 text-left">
        <p className="text-sm font-medium text-white">John Doe</p>
        <p className="text-xs text-gray-400">john@example.com</p>
      </div>
      <IconChevronRight className="h-4 w-4 text-gray-400" />
    </button>
  </div>
</aside>
```

---

## Top Navigation

```tsx
<header className="sticky top-0 z-20 flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
  {/* Left */}
  <div className="flex items-center gap-4">
    <IconLogo className="h-8 w-8 text-blue-600" />
    <nav className="hidden md:flex items-center gap-1">
      <a href="/" className="px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded">
        Dashboard
      </a>
      <a href="/projects" className="px-3 py-2 text-sm font-medium text-gray-600 rounded hover:bg-gray-100">
        Projects
      </a>
      <a href="/team" className="px-3 py-2 text-sm font-medium text-gray-600 rounded hover:bg-gray-100">
        Team
      </a>
    </nav>
  </div>

  {/* Right */}
  <div className="flex items-center gap-3">
    <button className="p-2 text-gray-400 rounded hover:bg-gray-100 hover:text-gray-600">
      <IconSearch className="h-5 w-5" />
    </button>
    <button className="p-2 text-gray-400 rounded hover:bg-gray-100 hover:text-gray-600">
      <IconBell className="h-5 w-5" />
    </button>
    <div className="h-6 w-px bg-gray-200" />
    <button className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded hover:bg-gray-100">
      <img src="/avatar.jpg" alt="User" className="w-7 h-7 rounded-full" />
      <IconChevronDown className="h-4 w-4 text-gray-400" />
    </button>
  </div>
</header>
```

---

## Breadcrumbs

```tsx
<nav className="flex items-center space-x-2 text-sm">
  <a href="/" className="text-gray-500 hover:text-gray-700">
    Home
  </a>
  <IconChevronRight className="h-4 w-4 text-gray-400" />
  <a href="/projects" className="text-gray-500 hover:text-gray-700">
    Projects
  </a>
  <IconChevronRight className="h-4 w-4 text-gray-400" />
  <span className="text-gray-900 font-medium">
    Project Details
  </span>
</nav>
```

---

## Tabs

```tsx
<div className="border-b border-gray-200">
  <nav className="-mb-px flex gap-6">
    <button className="px-1 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
      Overview
    </button>
    <button className="px-1 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300">
      Activity
    </button>
    <button className="px-1 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300">
      Settings
    </button>
  </nav>
</div>
```

---

## Mobile Navigation

```tsx
{/* Mobile menu button */}
<button
  onClick={() => setMobileMenuOpen(true)}
  className="p-2 text-gray-600 md:hidden"
>
  <IconMenu className="h-6 w-6" />
</button>

{/* Mobile sidebar overlay */}
{mobileMenuOpen && (
  <>
    <div
      onClick={() => setMobileMenuOpen(false)}
      className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
    />
    <aside className="fixed top-0 left-0 bottom-0 z-50 w-64 bg-gray-900 md:hidden">
      {/* Same sidebar content as desktop */}
    </aside>
  </>
)}
```

---

## Usage Guidelines

### Do's ✅

- Keep navigation simple and scannable
- Use icons + labels for clarity
- Highlight current page/section
- Support keyboard navigation
- Provide clear hover states
- Use consistent navigation across app
- Make navigation accessible on mobile

### Don'ts ❌

- Don't nest navigation too deeply (max 2-3 levels)
- Don't use unclear icon-only navigation
- Don't hide primary navigation
- Don't forget mobile menu
- Don't use inconsistent patterns

---

**Last Updated:** 2025-11-17
