import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProblemCardProps {
  icon: LucideIcon;
  title: string;
  points: string[];
}

export function ProblemCard({ icon: Icon, title, points }: ProblemCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-12 h-12 text-secondary mb-6" />
      <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}