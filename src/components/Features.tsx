import React from 'react';
import { Shield, Zap, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protocols protecting your business data 24/7'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensuring quick response times'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built-in tools for seamless team coordination and communication'
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Advanced analytics to track and boost your business growth'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600">
            Discover the features that set us apart from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <feature.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}