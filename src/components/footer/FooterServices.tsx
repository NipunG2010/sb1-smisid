import React from 'react';
import { motion } from 'framer-motion';
import { footerServices } from './data';

export function FooterServices() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {footerServices.map((service, index) => {
        const Icon = service.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <Icon className="w-8 h-8 text-secondary mb-4 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{service.description}</p>
            <a
              href="#contact"
              className="text-secondary hover:text-secondary/80 text-sm font-medium inline-flex items-center gap-1 transition-colors"
            >
              Learn more →
            </a>
          </motion.div>
        );
      })}
    </div>
  );
}