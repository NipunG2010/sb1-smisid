import React from 'react';
import { ScrollGroup } from '../animations/ScrollGroup';
import { ServiceCard } from './ServiceCard';
import { services } from './data/services';

export function Services() {
  return (
    <div className="bg-primary py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollGroup baseDelay={0.2} staggerDelay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our SEO <span className="text-secondary">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive SEO solutions to boost your online presence and drive sustainable growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </ScrollGroup>
      </div>
    </div>
  );
}