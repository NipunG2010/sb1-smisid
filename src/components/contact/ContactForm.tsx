import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
      onSubmit={handleSubmit}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 
              focus:ring-secondary focus:border-transparent transition-all duration-300"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 
              focus:ring-secondary focus:border-transparent transition-all duration-300"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                focus:ring-secondary focus:border-transparent transition-all duration-300"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
            <a
              href={`tel:${formData.phone}`}
              className="absolute right-3 top-1/2 -translate-y-1/2 
                text-secondary hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary text-primary px-6 py-3 rounded-lg font-semibold
            hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50
            disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get Started'}
        </button>

        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm mt-2 text-center"
          >
            Thanks! We'll contact you shortly to schedule your call.
          </motion.p>
        )}

        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-2 text-center"
          >
            Something went wrong. Please try again later.
          </motion.p>
        )}

        <p className="text-gray-400 text-xs mt-4 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-secondary hover:text-white transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </motion.form>
  );
}