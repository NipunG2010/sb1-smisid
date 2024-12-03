import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { CalendlyWidget } from './CalendlyWidget';

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to <span className="text-secondary">Transform</span> Your SEO?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule your free strategy call or drop us a message. Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
}