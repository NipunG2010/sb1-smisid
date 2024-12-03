import React from 'react';
import { LucideIcon } from 'lucide-react';

interface JourneyStepProps {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string[];
}

export function JourneyStep({ icon: Icon, step, title, description }: JourneyStepProps) {
  return (
    <div className="relative">
      {/* Step number bubble */}
      <div className="absolute -left-4 -top-4 w-8 h-8 bg-secondary text-primary rounded-full flex items-center justify-center font-bold">
        {step}
      </div>
      
      <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-100">
        <Icon className="w-12 h-12 text-secondary mb-6" />
        <h3 className="text-xl font-semibold text-primary mb-4">{title}</h3>
        <ul className="space-y-3">
          {description.map((item, index) => (
            <li key={index} className="flex items-start text-gray-600">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}