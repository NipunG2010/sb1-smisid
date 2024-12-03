import React from 'react';
import { motion } from 'framer-motion';
import { bentoItems } from './data';
import { BentoItem } from './BentoItem';
import { CTAButton } from './CTAButton';

export function BentoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-secondary">Transform</span> Your SEO?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Book your free strategy call and discover how we can help you dominate search rankings
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {bentoItems.map((item, index) => (
          <BentoItem
            key={index}
            {...item}
            delay={index * 0.2}
          />
        ))}
      </div>

      <CTAButton />
    </div>
  );
}