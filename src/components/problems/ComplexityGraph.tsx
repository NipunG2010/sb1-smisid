import React from 'react';
import { TrendingUp } from 'lucide-react';

export function ComplexityGraph() {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-primary mb-2">SEO Complexity Growth</h3>
        <p className="text-gray-600">Year-over-Year Increase in SEO Factors</p>
      </div>
      
      <div className="relative h-64">
        {/* Graph Background */}
        <div className="absolute inset-0 grid grid-cols-4 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-t border-gray-200" style={{ top: `${i * 25}%` }} />
          ))}
        </div>
        
        {/* Graph Line */}
        <div className="absolute inset-0 flex items-end">
          <div 
            className="w-full bg-secondary/20 rounded-lg relative"
            style={{ 
              height: '85%',
              clipPath: 'polygon(0 100%, 0 15%, 33% 45%, 66% 25%, 100% 0%, 100% 100%)'
            }}
          >
            <div 
              className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-secondary/10"
            />
          </div>
        </div>
        
        {/* Trend Indicator */}
        <div className="absolute top-0 right-0 bg-secondary/10 text-secondary p-2 rounded-lg flex items-center gap-2">
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">+200%</span>
        </div>
      </div>
      
      {/* Years */}
      <div className="flex justify-between mt-4 text-gray-600">
        <span>2020</span>
        <span>2021</span>
        <span>2022</span>
        <span>2023</span>
        <span>2024</span>
      </div>
    </div>
  );
}