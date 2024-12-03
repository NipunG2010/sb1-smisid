import React from 'react';
import { Users, Clock } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-center items-center space-x-2 text-primary font-semibold">
          <Users className="w-5 h-5" />
          <span>Only 2 client spots remaining!</span>
          <Clock className="w-5 h-5 ml-2" />
          <span>Limited time offer</span>
        </div>
      </div>
    </div>
  );
}