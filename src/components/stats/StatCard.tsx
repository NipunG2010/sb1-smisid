import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-secondary transition-all">
      <Icon className="w-8 h-8 text-secondary mb-3" />
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-300 text-sm">{label}</div>
    </div>
  );
}