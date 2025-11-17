# Navigation

Bold, modern navigation components with gradient accents and smooth animations.

---

## Header Navigation

### Transparent Header (Over Hero)

Glass navigation bar for hero sections.

**Implementation:**
```tsx
<header className="
  fixed top-0 left-0 right-0
  z-50
  px-6 py-4
  bg-white/10
  backdrop-blur-xl
  backdrop-saturate-180
  border-b border-white/20
">
  <nav className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Logo */}
    <a href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-sunset rounded-lg" />
      <span className="font-display text-xl font-bold text-white">
        Brand
      </span>
    </a>

    {/* Nav Links */}
    <div className="hidden md:flex items-center gap-8">
      <a href="#" className="text-base text-white/90 hover:text-white transition-colors">
        Features
      </a>
      <a href="#" className="text-base text-white/90 hover:text-white transition-colors">
        Portfolio
      </a>
      <a href="#" className="text-base text-white/90 hover:text-white transition-colors">
        About
      </a>
      <a href="#" className="text-base text-white/90 hover:text-white transition-colors">
        Contact
      </a>
    </div>

    {/* CTA */}
    <button className="px-6 py-3 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
      Get Started
    </button>
  </nav>
</header>
```

---

### Solid Header (Standard)

**Implementation:**
```tsx
<header className="
  sticky top-0
  z-50
  px-6 py-4
  bg-white
  border-b border-gray-200
  shadow-sm
">
  <nav className="max-w-7xl mx-auto flex items-center justify-between">
    {/* Logo with gradient */}
    <a href="/" className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-sunset rounded-lg" />
      <span className="font-display text-xl font-bold text-gray-900">
        Brand
      </span>
    </a>

    {/* Nav Links with gradient underline on hover */}
    <div className="hidden md:flex items-center gap-8">
      {['Features', 'Portfolio', 'About', 'Contact'].map((item) => (
        <a
          key={item}
          href="#"
          className="
            relative
            text-base text-gray-600
            hover:text-gray-900
            transition-colors
            group
          "
        >
          {item}
          <span className="
            absolute -bottom-1 left-0
            w-full h-0.5
            bg-gradient-sunset
            scale-x-0 group-hover:scale-x-100
            origin-left
            transition-transform duration-300 ease-smooth
          " />
        </a>
      ))}
    </div>

    {/* Gradient CTA */}
    <button className="px-6 py-3 bg-gradient-sunset text-white font-semibold rounded-lg shadow-coral hover:shadow-glow-coral hover:scale-105 transition-all duration-300">
      Get Started
    </button>
  </nav>
</header>
```

---

## Sidebar Navigation

**Implementation:**
```tsx
<aside className="
  fixed left-0 top-0 bottom-0
  w-64
  p-6
  bg-white
  border-r border-gray-200
  overflow-y-auto
">
  {/* Logo */}
  <div className="flex items-center gap-3 mb-8">
    <div className="w-10 h-10 bg-gradient-sunset rounded-lg" />
    <span className="font-display text-xl font-bold text-gray-900">
      Brand
    </span>
  </div>

  {/* Nav Items */}
  <nav className="space-y-2">
    {/* Active item with gradient */}
    <a href="#" className="
      flex items-center gap-3
      px-4 py-3
      bg-gradient-to-r from-coral-500/10 to-purple-500/10
      border-l-4 border-coral-500
      rounded-lg
      transition-all duration-200
    ">
      <IconHome className="w-5 h-5 text-coral-500" />
      <span className="font-semibold text-coral-600">Dashboard</span>
    </a>

    {/* Inactive items */}
    <a href="#" className="
      flex items-center gap-3
      px-4 py-3
      text-gray-600
      rounded-lg
      hover:bg-gray-50
      hover:text-gray-900
      transition-all duration-200
    ">
      <IconFolder className="w-5 h-5" />
      <span>Projects</span>
    </a>

    <a href="#" className="
      flex items-center gap-3
      px-4 py-3
      text-gray-600
      rounded-lg
      hover:bg-gray-50
      hover:text-gray-900
      transition-all duration-200
    ">
      <IconUsers className="w-5 h-5" />
      <span>Team</span>
    </a>
  </nav>
</aside>
```

---

## Mobile Menu

**Implementation:**
```tsx
{/* Mobile menu toggle */}
<button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="md:hidden p-2 text-white"
>
  <IconMenu className="w-6 h-6" />
</button>

{/* Mobile menu overlay */}
{mobileMenuOpen && (
  <>
    {/* Backdrop */}
    <div
      className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
      onClick={() => setMobileMenuOpen(false)}
    />

    {/* Menu panel */}
    <div className="
      fixed top-0 right-0 bottom-0
      w-full max-w-sm
      bg-white
      shadow-2xl
      z-50
      transform transition-transform duration-300 ease-smooth
    ">
      {/* Close button */}
      <div className="flex justify-end p-6">
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="p-2 text-gray-600 hover:text-gray-900"
        >
          <IconX className="w-6 h-6" />
        </button>
      </div>

      {/* Menu items */}
      <nav className="px-6 space-y-2">
        <a href="#" className="block px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg">
          Features
        </a>
        <a href="#" className="block px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg">
          Portfolio
        </a>
        <a href="#" className="block px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg">
          About
        </a>
        <a href="#" className="block px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-50 rounded-lg">
          Contact
        </a>

        <div className="pt-6">
          <button className="w-full px-8 py-4 bg-gradient-sunset text-white font-semibold rounded-lg shadow-coral">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  </>
)}
```

---

## Breadcrumbs

**Implementation:**
```tsx
<nav className="flex items-center gap-2 text-sm">
  <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
    Home
  </a>
  <IconChevronRight className="w-4 h-4 text-gray-400" />
  <a href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
    Projects
  </a>
  <IconChevronRight className="w-4 h-4 text-gray-400" />
  <span className="font-semibold bg-gradient-sunset bg-clip-text text-transparent">
    Current Project
  </span>
</nav>
```

---

## Tabs

**Implementation:**
```tsx
<div className="border-b border-gray-200">
  <nav className="flex gap-8">
    {/* Active tab */}
    <button className="
      relative
      px-4 py-3
      font-semibold
      bg-gradient-sunset bg-clip-text text-transparent
    ">
      Overview
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-sunset" />
    </button>

    {/* Inactive tabs */}
    <button className="px-4 py-3 text-gray-600 hover:text-gray-900 transition-colors">
      Analytics
    </button>
    <button className="px-4 py-3 text-gray-600 hover:text-gray-900 transition-colors">
      Settings
    </button>
  </nav>
</div>
```

---

**Last Updated:** 2025-11-17
