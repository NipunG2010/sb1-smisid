import React from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { StatsGrid } from './stats/StatsGrid';

export function Hero() {
  return (
    <div className="relative bg-primary text-white">
      {/* Add diagonal shading effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Dominate Search Rankings with
            <span className="text-secondary"> Data-Driven SEO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join industry leaders who've transformed their online presence through our proven SEO strategies. 
            Our results speak for themselves.
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <button className="bg-secondary hover:bg-opacity-90 text-primary px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
              Book Your Call <Calendar className="w-5 h-5" />
            </button>
            <button className="border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
              View Case Studies <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          {/* Statistics Grid */}
          <div className="max-w-5xl mx-auto">
            <StatsGrid />
          </div>
        </div>
      </div>
      
      {/* Add bottom wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
      }}></div>
    </div>
  );
}