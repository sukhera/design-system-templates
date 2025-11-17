# Design Studio Website Example

Complete example of a creative design studio website using the Creative Agency design system.

---

## Page Overview

A bold, vibrant website for a fictional design studio showcasing services, portfolio, and team.

**Key Features:**
- Gradient hero with animated text
- Feature showcase with gradient cards
- Portfolio grid with hover effects
- Team section with glass cards
- Contact form with gradient accents
- Footer with gradient newsletter signup

---

## Hero Section

```tsx
<section className="
  relative
  min-h-screen
  bg-gradient-sunset
  overflow-hidden
">
  {/* Animated mesh overlay */}
  <div className="
    absolute inset-0
    bg-mesh-warm
    opacity-30
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
    <nav className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded-lg" />
        <span className="font-display text-xl font-bold text-white">
          Studio X
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a href="#work" className="text-white/90 hover:text-white">Work</a>
        <a href="#services" className="text-white/90 hover:text-white">Services</a>
        <a href="#team" className="text-white/90 hover:text-white">Team</a>
        <a href="#contact" className="text-white/90 hover:text-white">Contact</a>
      </div>

      <button className="px-6 py-3 bg-white text-coral-600 font-semibold rounded-lg hover:bg-gray-50">
        Start Project
      </button>
    </nav>
  </header>

  {/* Hero Content */}
  <div className="
    relative z-10
    container mx-auto px-6
    flex items-center justify-center
    min-h-[calc(100vh-80px)]
  ">
    <div className="max-w-5xl text-center">
      <h1 className="
        font-display
        text-7xl md:text-8xl
        font-bold
        text-white
        mb-6
      ">
        We Create
        <span className="
          block
          bg-white
          bg-clip-text
          text-transparent
          drop-shadow-lg
        ">
          Digital Magic
        </span>
      </h1>

      <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
        A creative design studio crafting bold, beautiful experiences
        for forward-thinking brands.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="
          px-12 py-6
          bg-white
          text-coral-600
          font-bold text-lg
          rounded-xl
          shadow-2xl
          hover:scale-105
          transition-all duration-300
        ">
          View Our Work
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
          transition-all duration-300
        ">
          Get in Touch
        </button>
      </div>
    </div>
  </div>
</section>
```

---

## Services Section

```tsx
<section id="services" className="py-24 bg-white">
  <div className="container mx-auto px-6">
    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <p className="text-sm font-bold text-coral-600 uppercase tracking-wide mb-4">
        What We Do
      </p>
      <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Our <span className="bg-gradient-sunset bg-clip-text text-transparent">Services</span>
      </h2>
      <p className="text-xl text-gray-600">
        We offer comprehensive design services to bring your vision to life.
      </p>
    </div>

    {/* Service Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Brand Identity */}
      <div className="
        group
        p-8
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
      ">
        <div className="
          inline-flex
          p-4
          bg-gradient-sunset
          rounded-xl
          shadow-coral
          mb-6
          group-hover:scale-110
          transition-transform duration-300 ease-bounce
        ">
          <IconPalette className="w-8 h-8 text-white" />
        </div>

        <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
          Brand Identity
        </h3>

        <p className="text-base text-gray-600 mb-6">
          Create a memorable brand with custom logos, color systems,
          and visual guidelines.
        </p>

        <a href="#" className="
          inline-flex items-center gap-2
          text-coral-600 font-semibold
          hover:gap-3
          transition-all duration-200
        ">
          Learn More <IconArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Web Design */}
      <div className="
        group
        p-8
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
      ">
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
          <IconLayout className="w-8 h-8 text-white" />
        </div>

        <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
          Web Design
        </h3>

        <p className="text-base text-gray-600 mb-6">
          Beautiful, responsive websites optimized for conversions
          and user experience.
        </p>

        <a href="#" className="
          inline-flex items-center gap-2
          text-purple-600 font-semibold
          hover:gap-3
          transition-all duration-200
        ">
          Learn More <IconArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* UI/UX Design */}
      <div className="
        group
        p-8
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all duration-300
      ">
        <div className="
          inline-flex
          p-4
          bg-gradient-aurora
          rounded-xl
          shadow-xl
          mb-6
          group-hover:scale-110
          transition-transform duration-300 ease-bounce
        ">
          <IconSparkles className="w-8 h-8 text-white" />
        </div>

        <h3 className="font-display text-2xl font-semibold text-gray-900 mb-3">
          UI/UX Design
        </h3>

        <p className="text-base text-gray-600 mb-6">
          Intuitive interfaces that delight users and drive engagement
          through thoughtful design.
        </p>

        <a href="#" className="
          inline-flex items-center gap-2
          text-pink-600 font-semibold
          hover:gap-3
          transition-all duration-200
        ">
          Learn More <IconArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
</section>
```

---

## Portfolio Section

```tsx
<section id="work" className="py-24 bg-gray-50">
  <div className="container mx-auto px-6">
    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <p className="text-sm font-bold text-purple-600 uppercase tracking-wide mb-4">
        Selected Works
      </p>
      <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Featured <span className="bg-gradient-ocean bg-clip-text text-transparent">Projects</span>
      </h2>
    </div>

    {/* Portfolio Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {/* Project 1 */}
      <div className="
        group
        relative
        overflow-hidden
        rounded-2xl
        shadow-lg
        hover:shadow-2xl
        transition-all duration-300
      ">
        <div className="aspect-video bg-gradient-sunset" />

        {/* Gradient overlay */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent
          opacity-80 group-hover:opacity-90
          transition-opacity duration-300
        " />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-sm font-semibold text-white/80 uppercase tracking-wide mb-2">
            Brand Identity
          </p>
          <h3 className="font-display text-3xl font-bold text-white mb-3">
            Sunrise Coffee Co.
          </h3>
          <p className="text-base text-white/90 mb-6">
            Complete brand redesign for a modern coffee company
          </p>
          <button className="
            px-6 py-3
            bg-white/20
            backdrop-blur-xl
            border border-white/30
            text-white
            font-semibold
            rounded-lg
            hover:bg-white/30
            transition-all duration-200
          ">
            View Case Study
          </button>
        </div>
      </div>

      {/* More projects... */}
    </div>
  </div>
</section>
```

---

## Team Section

```tsx
<section id="team" className="
  relative
  py-24
  bg-gradient-to-br from-purple-50 to-pink-50
  overflow-hidden
">
  {/* Background accent */}
  <div className="
    absolute top-0 right-0
    w-96 h-96
    bg-gradient-sunset
    rounded-full
    opacity-10
    blur-3xl
  " />

  <div className="relative container mx-auto px-6">
    <div className="max-w-3xl mb-16 text-center mx-auto">
      <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Meet Our <span className="bg-gradient-sunset bg-clip-text text-transparent">Team</span>
      </h2>
      <p className="text-xl text-gray-600">
        Passionate designers and developers creating extraordinary work
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {team.map((member) => (
        <div
          key={member.id}
          className="
            group
            text-center
            hover:-translate-y-2
            transition-transform duration-300
          "
        >
          {/* Avatar with gradient border */}
          <div className="relative p-1 bg-gradient-sunset rounded-full inline-block mb-4">
            <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <h3 className="font-display text-xl font-semibold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## Contact Section

```tsx
<section id="contact" className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
          Let's Create Something <span className="bg-gradient-sunset bg-clip-text text-transparent">Amazing</span>
        </h2>
        <p className="text-xl text-gray-600">
          Ready to start your project? Get in touch today.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              className="
                w-full px-4 py-3
                border-2 border-gray-200
                rounded-lg
                focus:border-transparent
                focus:ring-4
                focus:ring-coral-500/20
                focus:bg-gradient-to-r
                focus:from-coral-500/5
                focus:to-purple-500/5
                transition-all duration-200
              "
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              className="
                w-full px-4 py-3
                border-2 border-gray-200
                rounded-lg
                focus:border-transparent
                focus:ring-4
                focus:ring-coral-500/20
                focus:bg-gradient-to-r
                focus:from-coral-500/5
                focus:to-purple-500/5
                transition-all duration-200
              "
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message
          </label>
          <textarea
            rows={6}
            className="
              w-full px-4 py-3
              border-2 border-gray-200
              rounded-lg
              resize-none
              focus:border-transparent
              focus:ring-4
              focus:ring-purple-500/20
              focus:bg-gradient-to-r
              focus:from-purple-500/5
              focus:to-pink-500/5
              transition-all duration-200
            "
          />
        </div>

        <button className="
          w-full
          px-8 py-4
          bg-gradient-sunset
          text-white
          font-bold text-lg
          rounded-lg
          shadow-coral
          hover:shadow-glow-coral
          hover:scale-105
          transition-all duration-300
        ">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
```

---

**Last Updated:** 2025-11-17
