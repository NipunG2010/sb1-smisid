import React from 'react';
import { CompanyIntro } from './CompanyIntro';

export function ProposalSection() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CompanyIntro />
      </div>
    </div>
  );
}