import React from 'react';
import { BentoGrid } from './cta/BentoGrid';

export function CTASection() {
  return (
    <div className="bg-primary relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/10 opacity-50" />
      
      {/* Content */}
      <div className="relative">
        <BentoGrid />
      </div>
    </div>
  );
}