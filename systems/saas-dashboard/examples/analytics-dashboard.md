# Analytics Dashboard Example

Complete example of an analytics dashboard using the SaaS Dashboard design system.

---

## Overview

This example demonstrates:
- Dashboard layout with sidebar navigation
- Stat cards with metrics
- Data visualization with charts
- Data tables
- Responsive grid layouts

---

## Full Implementation

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { LineChart, BarChart } from '@/components/charts'
import { DataTable } from '@/components/data-table'

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-sm text-gray-500 mt-1">
          Overview of your key metrics and performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$45,231"
          change="+12.5%"
          trend="up"
          icon={<IconDollar />}
        />
        <StatCard
          title="Active Users"
          value="2,345"
          change="+4.2%"
          trend="up"
          icon={<IconUsers />}
        />
        <StatCard
          title="Conversion Rate"
          value="3.24%"
          change="-0.5%"
          trend="down"
          icon={<IconTrendingUp />}
        />
        <StatCard
          title="Avg. Order Value"
          value="$142"
          change="+8.1%"
          trend="up"
          icon={<IconShoppingCart />}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Revenue Over Time</CardTitle>
                <CardDescription>Last 12 months</CardDescription>
              </div>
              <select className="px-3 py-1.5 text-sm border border-gray-300 rounded">
                <option>Last 12 months</option>
                <option>Last 6 months</option>
                <option>Last 30 days</option>
              </select>
            </div>
          </CardHeader>
          <CardContent>
            <LineChart
              data={revenueData}
              height={300}
              xKey="month"
              yKey="revenue"
            />
          </CardContent>
        </Card>

        {/* Top Products Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>By revenue this month</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChart
              data={productsData}
              height={300}
              xKey="product"
              yKey="sales"
            />
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest transactions</CardDescription>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700">
              View all →
            </button>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={orderColumns}
            data={recentOrders}
          />
        </CardContent>
      </Card>

      {/* Bottom Row - Traffic Sources & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Sources */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors come from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.name} className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {source.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {source.visitors}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 w-12 text-right">
                    {source.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <activity.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.text}</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Stat Card Component
function StatCard({ title, value, change, trend, icon }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">{title}</p>
            <p className="text-3xl font-semibold text-gray-900">{value}</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            {icon}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <span
            className={`inline-flex items-center text-sm font-medium ${
              trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {trend === 'up' ? (
              <IconArrowUp className="h-4 w-4 mr-1" />
            ) : (
              <IconArrowDown className="h-4 w-4 mr-1" />
            )}
            {change}
          </span>
          <span className="text-sm text-gray-500">vs last month</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Sample Data
const revenueData = [
  { month: 'Jan', revenue: 32000 },
  { month: 'Feb', revenue: 35000 },
  { month: 'Mar', revenue: 38000 },
  { month: 'Apr', revenue: 42000 },
  { month: 'May', revenue: 45000 },
  { month: 'Jun', revenue: 45231 },
]

const productsData = [
  { product: 'Product A', sales: 12500 },
  { product: 'Product B', sales: 10200 },
  { product: 'Product C', sales: 8900 },
  { product: 'Product D', sales: 7400 },
  { product: 'Product E', sales: 6200 },
]

const orderColumns = [
  { key: 'id', label: 'Order ID' },
  { key: 'customer', label: 'Customer' },
  { key: 'amount', label: 'Amount' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' },
]

const recentOrders = [
  {
    id: '#3210',
    customer: 'John Doe',
    amount: '$250.00',
    status: 'Completed',
    date: 'Jan 15, 2025',
  },
  // ... more orders
]

const trafficSources = [
  { name: 'Direct', visitors: '12,543', percentage: 45 },
  { name: 'Organic Search', visitors: '8,432', percentage: 30 },
  { name: 'Social Media', visitors: '4,521', percentage: 16 },
  { name: 'Referral', visitors: '2,513', percentage: 9 },
]

const recentActivity = [
  {
    icon: IconUser,
    text: 'New user registered',
    time: '2 minutes ago',
  },
  {
    icon: IconShoppingCart,
    text: 'Order #3210 completed',
    time: '5 minutes ago',
  },
  {
    icon: IconDollar,
    text: 'Payment received $250',
    time: '12 minutes ago',
  },
]
```

---

## Layout Structure

```
Dashboard Page
├── Page Header (title + description)
├── Stats Grid (4 columns)
├── Charts Row (2 columns)
├── Recent Orders Table
└── Bottom Row
    ├── Traffic Sources (2/3 width)
    └── Recent Activity (1/3 width)
```

---

## Responsive Behavior

```
Mobile (< 768px):
- Stats: 1 column
- Charts: 1 column stacked
- Table: Horizontal scroll
- Bottom row: 1 column stacked

Tablet (768px - 1024px):
- Stats: 2 columns
- Charts: 1 column stacked
- Bottom row: 1 column stacked

Desktop (> 1024px):
- Stats: 4 columns
- Charts: 2 columns side-by-side
- Bottom row: 2/3 + 1/3 split
```

---

## Key Patterns Used

1. **Consistent spacing:** All sections use `space-y-6`
2. **Card-based layout:** Every section in a Card component
3. **Grid system:** Responsive grids with proper breakpoints
4. **Visual hierarchy:** Clear heading sizes and text colors
5. **Interactive elements:** Hover states on buttons and links
6. **Data visualization:** Charts and progress bars
7. **Empty states:** Handle no-data scenarios
8. **Loading states:** Skeleton screens while loading

---

**Last Updated:** 2025-11-17
