# Dashboard Layout

Complete layout specifications for SaaS dashboard pages.

---

## Overview

Dashboard layouts provide the structural foundation for your application. This system uses a sidebar + main content pattern common in modern SaaS products.

---

## Base Layout Structure

```
┌─────────────────────────────────────────┐
│  Sidebar (64px or 256px)  │    Main     │
│                            │             │
│  Logo                      │   Header    │
│                            │             │
│  Navigation                │   Content   │
│                            │             │
│                            │             │
│  User                      │             │
└─────────────────────────────────────────┘
```

---

## Full Implementation

```tsx
export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`
        flex flex-col
        ${sidebarOpen ? 'w-64' : 'w-16'}
        h-screen
        bg-gray-900
        border-r border-gray-800
        transition-all duration-300
      `}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 h-16 border-b border-gray-800">
          <IconLogo className="h-8 w-8 text-white" />
          {sidebarOpen && (
            <span className="text-lg font-semibold text-white">Dashboard</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          <NavItem href="/" icon={IconHome} active>
            {sidebarOpen && 'Home'}
          </NavItem>
          <NavItem href="/projects" icon={IconFolder}>
            {sidebarOpen && 'Projects'}
          </NavItem>
          <NavItem href="/team" icon={IconUsers}>
            {sidebarOpen && 'Team'}
          </NavItem>
          <NavItem href="/settings" icon={IconSettings}>
            {sidebarOpen && 'Settings'}
          </NavItem>
        </nav>

        {/* User */}
        <div className="p-3 border-t border-gray-800">
          <button className="flex items-center gap-3 w-full px-3 py-2 rounded hover:bg-gray-800">
            <img src="/avatar.jpg" alt="User" className="w-8 h-8 rounded-full" />
            {sidebarOpen && (
              <div className="flex-1 text-left">
                <p className="text-sm font-medium text-white">John Doe</p>
                <p className="text-xs text-gray-400">john@example.com</p>
              </div>
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-gray-400 rounded hover:bg-gray-100"
            >
              <IconMenu className="h-5 w-5" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 rounded hover:bg-gray-100">
              <IconSearch className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 rounded hover:bg-gray-100">
              <IconBell className="h-5 w-5" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
```

---

## Page Templates

### Stats Dashboard

```tsx
<div className="space-y-6">
  {/* Stats Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <StatCard title="Total Revenue" value="$45,231" change="+12.5%" />
    <StatCard title="Active Users" value="2,345" change="+4.2%" />
    <StatCard title="Conversion" value="3.24%" change="-0.5%" />
    <StatCard title="Avg. Order" value="$142" change="+8.1%" />
  </div>

  {/* Charts */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <Card>
      <CardHeader>
        <CardTitle>Revenue Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <LineChart data={data} />
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent>
        <BarChart data={data} />
      </CardContent>
    </Card>
  </div>

  {/* Table */}
  <Card>
    <CardHeader>
      <CardTitle>Recent Orders</CardTitle>
    </CardHeader>
    <CardContent>
      <DataTable data={orders} columns={columns} />
    </CardContent>
  </Card>
</div>
```

### List View

```tsx
<div className="space-y-6">
  {/* Header */}
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
      <p className="text-sm text-gray-500 mt-1">Manage your projects and tasks</p>
    </div>
    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
      New Project
    </button>
  </div>

  {/* Filters */}
  <div className="flex items-center gap-3">
    <input
      type="search"
      placeholder="Search projects..."
      className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
    />
    <select className="px-3 py-2 text-sm border border-gray-300 rounded">
      <option>All Status</option>
      <option>Active</option>
      <option>Completed</option>
    </select>
  </div>

  {/* Items */}
  <div className="space-y-4">
    {projects.map(project => (
      <Card key={project.id}>
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{project.description}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <IconMoreVertical className="h-5 w-5" />
            </button>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
```

### Detail View

```tsx
<div className="space-y-6">
  {/* Breadcrumbs */}
  <nav className="flex items-center space-x-2 text-sm">
    <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
    <IconChevronRight className="h-4 w-4 text-gray-400" />
    <a href="/projects" className="text-gray-500 hover:text-gray-700">Projects</a>
    <IconChevronRight className="h-4 w-4 text-gray-400" />
    <span className="text-gray-900 font-medium">Project Name</span>
  </nav>

  {/* Header */}
  <div className="flex items-start justify-between">
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">Project Name</h1>
      <p className="text-sm text-gray-500 mt-2">Created on Jan 15, 2025</p>
    </div>
    <div className="flex gap-2">
      <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded hover:bg-gray-50">
        Edit
      </button>
      <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
        Share
      </button>
    </div>
  </div>

  {/* Tabs */}
  <div className="border-b border-gray-200">
    <nav className="-mb-px flex gap-6">
      <button className="px-1 py-3 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
        Overview
      </button>
      <button className="px-1 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
        Activity
      </button>
      <button className="px-1 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
        Settings
      </button>
    </nav>
  </div>

  {/* Content */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {/* Main content */}
    <div className="lg:col-span-2 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Project description and details go here...
          </p>
        </CardContent>
      </Card>
    </div>

    {/* Sidebar */}
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <p className="text-xs text-gray-500">Status</p>
            <p className="text-sm font-medium text-gray-900">Active</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Team Members</p>
            <p className="text-sm font-medium text-gray-900">5</p>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
```

---

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  - Hide sidebar by default
  - Stack content vertically
  - Full-width cards
  - Larger touch targets
}

/* Tablet */
@media (min-width: 640px) and (max-width: 1024px) {
  - Collapsed sidebar (64px)
  - 2-column grids
}

/* Desktop */
@media (min-width: 1024px) {
  - Full sidebar (256px)
  - 3-4 column grids
  - Hover states active
}
```

---

## Container Widths

```
Max Width: max-w-7xl (1280px)
Padding: px-6 (24px)
Responsive: px-4 md:px-6 lg:px-8
```

---

## Grid System

```
12-column grid
Gap: gap-6 (24px)
Responsive: gap-4 md:gap-6
```

---

**Last Updated:** 2025-11-17
