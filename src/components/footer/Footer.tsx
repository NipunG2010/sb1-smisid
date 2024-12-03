import React from 'react';
import { FooterServices } from './FooterServices';
import { FooterLinks } from './FooterLinks';
import { FooterBottom } from './FooterBottom';

export function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FooterServices />
        <div className="h-px bg-white/10 my-16" />
        <FooterLinks />
        <div className="h-px bg-white/10 my-8" />
        <FooterBottom />
      </div>
    </footer>
  );
}