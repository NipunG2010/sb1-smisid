import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users } from 'lucide-react';

export function CalendlyWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">
          Schedule Your Free Strategy Call
        </h3>
        <p className="text-gray-300">
          Book a 30-minute call with our SEO experts to discuss your goals and get actionable insights.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="flex items-center gap-4 text-gray-300">
          <Clock className="w-6 h-6 text-secondary" />
          <div>
            <h4 className="font-medium">Duration</h4>
            <p>30 minutes</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <Users className="w-6 h-6 text-secondary" />
          <div>
            <h4 className="font-medium">Participants</h4>
            <p>You and an SEO Expert</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <Calendar className="w-6 h-6 text-secondary" />
          <div>
            <h4 className="font-medium">Availability</h4>
            <p>Monday - Friday, 9 AM - 5 PM EST</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          // Calendly integration would go here
          window.open('https://calendly.com/your-link', '_blank');
        }}
        className="w-full bg-secondary text-primary px-6 py-3 rounded-lg font-semibold
          hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Schedule Now
      </button>

      <p className="text-gray-400 text-sm mt-4 text-center">
        Limited spots available. Book your call today!
      </p>
    </motion.div>
  );
}