import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export function CTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 1 }}
      className="text-center"
    >
      <button
        className="
          group relative inline-flex items-center gap-2
          bg-secondary text-primary px-8 py-4 rounded-xl
          font-semibold text-lg transition-all duration-300
          hover:bg-opacity-90 hover:scale-[1.02]
          hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]
        "
      >
        <span>Book Your Free Strategy Call</span>
        <Calendar className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      </button>
    </motion.div>
  );
}