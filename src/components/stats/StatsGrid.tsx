import React from 'react';
import { TrendingUp, Users, Search, BarChart } from 'lucide-react';
import { StatCard } from './StatCard';

const stats = [
  {
    icon: TrendingUp,
    value: "250%",
    label: "Average Traffic Increase"
  },
  {
    icon: Users,
    value: "85%",
    label: "Conversion Rate Growth"
  },
  {
    icon: Search,
    value: "Top 3",
    label: "Search Rankings"
  },
  {
    icon: BarChart,
    value: "10x",
    label: "ROI for Clients"
  }
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          value={stat.value}
          label={stat.label}
        />
      ))}
    </div>
  );
}