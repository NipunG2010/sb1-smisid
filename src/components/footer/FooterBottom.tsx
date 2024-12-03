import React from 'react';
import { Shield } from 'lucide-react';

export function FooterBottom() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-secondary" />
        <span className="text-white font-semibold">InnovateX</span>
      </div>
      <div className="text-gray-400 text-sm">
        © {new Date().getFullYear()} InnovateX. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a href="/privacy" className="text-gray-400 hover:text-secondary text-sm transition-colors">
          Privacy Policy
        </a>
        <a href="/terms" className="text-gray-400 hover:text-secondary text-sm transition-colors">
          Terms of Service
        </a>
      </div>
    </div>
  );
}