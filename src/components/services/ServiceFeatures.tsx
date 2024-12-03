import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceFeaturesProps {
  features: string[];
  benefits: string[];
}

export function ServiceFeatures({ features, benefits }: ServiceFeaturesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div>
        <h4 className="text-white font-semibold mb-4">Key Features</h4>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-4">Benefits</h4>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-2 text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Check className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>{benefit}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}