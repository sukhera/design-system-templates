# Hero Section Layouts

Bold, gradient-heavy hero sections designed to make a powerful first impression.

---

## Overview

Hero sections are the most important visual element of creative sites. They use large typography, vibrant gradients, and dramatic animations to capture attention immediately.

---

## Gradient Hero with Glass Navigation

Full-screen hero with animated gradient background.

**Layout Structure:**
```
- Full viewport height (100vh)
- Gradient background with mesh overlay
- Glass navigation bar
- Centered content
- Large gradient text headline
- Animated CTA buttons
```

**Implementation:**
```tsx
<section className="
  relative
  min-h-screen
  bg-gradient-sunset
  overflow-hidden
">
  {/* Animated mesh gradient overlay */}
  <div className="
    absolute inset-0
    bg-mesh-warm
    opacity-40
    animate-gradient-shift
  " />

  {/* Glass Navigation */}
  <header className="
    relative z-20
    px-6 py-4
    bg-white/10
    backdrop-blur-xl
    border-b border-white/20
  ">
    {/* Navigation content */}
  </header>

  {/* Hero Content */}
  <div className="
    relative z-10
    container mx-auto px-6
    flex items-center justify-center
    min-h-[calc(100vh-80px)]
  ">
    <div className="max-w-4xl text-center">
      {/* Eyebrow text */}
      <p className="
        text-base font-semibold text-white/80
        uppercase tracking-wide
        mb-6
        animate-fadeInUp
      ">
        Welcome to the future
      </p>

      {/* Headline with gradient text */}
      <h1 className="
        font-display
        text-6xl md:text-7xl
        font-bold
        text-white
        mb-6
        animate-fadeInUp
        animation-delay-100
      ">
        Design Your
        <span className="
          block
          text-transparent
          bg-white
          bg-clip-text
          drop-shadow-lg
        ">
          Creative Vision
        </span>
      </h1>

      {/* Description */}
      <p className="
        text-xl text-white/90
        max-w-2xl mx-auto
        mb-12
        animate-fadeInUp
        animation-delay-200
      ">
        Build stunning experiences with our bold, gradient-first design system.
        Perfect for creative agencies and design studios.
      </p>

      {/* CTA Buttons */}
      <div className="
        flex flex-col sm:flex-row
        items-center justify-center
        gap-4
        animate-fadeInUp
        animation-delay-300
      ">
        <button className="
          px-12 py-6
          bg-white
          text-coral-600
          font-bold text-lg
          rounded-xl
          shadow-2xl
          hover:scale-105
          hover:shadow-glow-coral
          transition-all duration-300 ease-smooth
        ">
          Get Started Free
        </button>

        <button className="
          px-12 py-6
          bg-white/20
          backdrop-blur-xl
          border border-white/30
          text-white
          font-semibold text-lg
          rounded-xl
          hover:bg-white/30
          hover:scale-105
          transition-all duration-300 ease-smooth
        ">
          View Examples
        </button>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="
    absolute bottom-8 left-1/2 -translate-x-1/2
    z-10
    animate-bounce
  ">
    <IconChevronDown className="w-8 h-8 text-white/60" />
  </div>
</section>
```

---

## Split Hero (Content + Image)

Hero with content on left, visual on right.

**Implementation:**
```tsx
<section className="
  relative
  min-h-screen
  bg-white
  overflow-hidden
">
  {/* Background gradient accent */}
  <div className="
    absolute top-0 right-0
    w-1/2 h-full
    bg-gradient-sunset
    opacity-5
  " />

  <div className="
    relative z-10
    container mx-auto px-6
    min-h-screen
    flex items-center
  ">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Content */}
      <div>
        <p className="
          text-sm font-bold text-coral-600
          uppercase tracking-wide
          mb-4
        ">
          Creative Design System
        </p>

        <h1 className="
          font-display
          text-6xl md:text-7xl
          font-bold
          mb-6
        ">
          <span className="text-gray-900">Build</span>{' '}
          <span className="
            bg-gradient-sunset
            bg-clip-text
            text-transparent
          ">
            Beautiful
          </span>{' '}
          <span className="text-gray-900">Experiences</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-lg">
          A complete design system with vibrant gradients, bold typography,
          and playful animations for modern creative projects.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="
            px-8 py-4
            bg-gradient-sunset
            text-white
            font-semibold
            rounded-lg
            shadow-coral
            hover:shadow-glow-coral
            hover:scale-105
            transition-all duration-300
          ">
            Start Building
          </button>

          <button className="
            px-8 py-4
            border-2 border-gray-300
            text-gray-700
            font-semibold
            rounded-lg
            hover:border-coral-500
            hover:bg-coral-500/5
            transition-all duration-300
          ">
            View Documentation
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-12 flex items-center gap-8">
          <div>
            <p className="text-3xl font-bold bg-gradient-sunset bg-clip-text text-transparent">
              10K+
            </p>
            <p className="text-sm text-gray-600">Happy Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
              500+
            </p>
            <p className="text-sm text-gray-600">Components</p>
          </div>
        </div>
      </div>

      {/* Visual */}
      <div className="relative">
        {/* Gradient cards mockup */}
        <div className="
          relative
          space-y-6
          transform rotate-3
          hover:rotate-0
          transition-transform duration-500
        ">
          <div className="
            p-8
            bg-gradient-sunset
            rounded-2xl
            shadow-coral
            transform -translate-x-4
          ">
            <div className="w-32 h-4 bg-white/30 rounded mb-4" />
            <div className="w-48 h-3 bg-white/20 rounded" />
          </div>

          <div className="
            p-8
            bg-gradient-ocean
            rounded-2xl
            shadow-purple
            transform translate-x-4
          ">
            <div className="w-24 h-4 bg-white/30 rounded mb-4" />
            <div className="w-40 h-3 bg-white/20 rounded" />
          </div>

          <div className="
            p-8
            bg-gradient-aurora
            rounded-2xl
            shadow-xl
          ">
            <div className="w-28 h-4 bg-white/30 rounded mb-4" />
            <div className="w-44 h-3 bg-white/20 rounded" />
          </div>
        </div>

        {/* Floating accent elements */}
        <div className="
          absolute -top-8 -right-8
          w-32 h-32
          bg-gradient-sunset
          rounded-full
          opacity-20
          blur-2xl
          animate-pulse
        " />
        <div className="
          absolute -bottom-8 -left-8
          w-40 h-40
          bg-gradient-ocean
          rounded-full
          opacity-20
          blur-3xl
          animate-pulse
          animation-delay-500
        " />
      </div>
    </div>
  </div>
</section>
```

---

## Centered Hero with Background Video

**Implementation:**
```tsx
<section className="relative min-h-screen overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/hero-background.mp4" type="video/mp4" />
  </video>

  {/* Gradient overlay */}
  <div className="
    absolute inset-0
    bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-coral-900/60
  " />

  {/* Content */}
  <div className="
    relative z-10
    container mx-auto px-6
    min-h-screen
    flex items-center justify-center
    text-center
  ">
    <div className="max-w-4xl">
      <h1 className="
        font-display
        text-7xl md:text-8xl
        font-bold
        text-white
        mb-6
        drop-shadow-2xl
      ">
        Create. Design. Inspire.
      </h1>

      <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
        Where creativity meets technology. Build extraordinary digital experiences.
      </p>

      <button className="
        px-12 py-6
        bg-white
        text-gray-900
        font-bold text-lg
        rounded-xl
        shadow-2xl
        hover:scale-105
        transition-all duration-300 ease-smooth
      ">
        Explore Our Work
      </button>
    </div>
  </div>
</section>
```

---

## Minimal Hero with Animated Gradient Text

**Implementation:**
```tsx
<section className="
  min-h-screen
  bg-white
  flex items-center justify-center
  px-6
">
  <div className="max-w-5xl text-center">
    <h1 className="
      font-display
      text-7xl md:text-8xl lg:text-9xl
      font-bold
      mb-8
    ">
      <span className="
        bg-gradient-to-r
        from-coral-500
        via-pink-500
        to-purple-500
        bg-[length:200%_auto]
        bg-clip-text
        text-transparent
        animate-gradient-shift
      ">
        Design Systems
      </span>
      <br />
      <span className="text-gray-900">
        Reimagined
      </span>
    </h1>

    <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
      Bold gradients. Smooth animations. Creative confidence.
    </p>

    <div className="flex justify-center gap-4">
      <button className="
        px-8 py-4
        bg-gradient-sunset
        text-white
        font-semibold
        rounded-lg
        shadow-coral
        hover:shadow-glow-coral
        hover:scale-105
        transition-all duration-300
      ">
        Get Started
      </button>

      <button className="
        px-8 py-4
        text-gray-700
        font-semibold
        hover:text-gray-900
        transition-colors
      ">
        Learn More →
      </button>
    </div>
  </div>
</section>
```

---

## Usage Guidelines

### Do's ✅

- Use full viewport height for hero sections
- Apply bold, large typography (72px+)
- Include clear primary CTA
- Use gradient text for headlines
- Add subtle animations (fade in, scale)
- Ensure excellent contrast for readability
- Optimize background images/videos

### Don'ts ❌

- Don't overcrowd the hero with too much content
- Don't use low-contrast text over gradients
- Don't autoplay video with sound
- Don't forget mobile responsiveness
- Don't use too many competing CTAs
- Don't ignore performance (optimize assets)

---

**Last Updated:** 2025-11-17
