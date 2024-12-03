import React from 'react';
import { motion } from 'framer-motion';
import type { BentoItemProps } from './types';

export function BentoItem({ icon: Icon, title, description, className = '', delay = 0 }: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`
        group relative overflow-hidden rounded-2xl p-8
        backdrop-blur-sm transition-all duration-300
        hover:scale-[1.02] hover:shadow-xl
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <Icon className="w-10 h-10 text-secondary mb-4 transition-transform duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
}