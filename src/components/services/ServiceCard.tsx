import React from 'react';
import { motion } from 'framer-motion';
import type { ServiceType } from './data/services';
import { ServiceFeatures } from './ServiceFeatures';

interface ServiceCardProps extends ServiceType {}

export function ServiceCard({ icon: Icon, title, description, features, benefits }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      whileHover={{ 
        scale: isExpanded ? 1 : 1.02,
        boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
      }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden bg-white/5 backdrop-blur-lg p-8 rounded-xl 
        border border-white/10 hover:border-secondary transition-all duration-300
        hover:bg-white/10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-12 h-12 text-secondary mb-6 transform transition-transform 
            duration-300 group-hover:rotate-6" />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-semibold text-white mb-4 transform transition-all 
            duration-300 group-hover:translate-x-2"
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-300 mb-6 transform transition-all duration-300 
            group-hover:translate-x-2"
        >
          {description}
        </motion.p>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-secondary font-medium 
            hover:text-white transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {isExpanded ? 'Show Less' : 'Learn More'} →
        </motion.button>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ServiceFeatures features={features} benefits={benefits} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}