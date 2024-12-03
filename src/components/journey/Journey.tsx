import React from 'react';
import { Calendar, Rocket, Star } from 'lucide-react';
import { JourneyStep } from './JourneyStep';

const steps = [
  {
    icon: Calendar,
    title: "Book Your Free Strategy Call",
    description: [
      "Schedule a 30-minute discovery call",
      "Share your current challenges and goals",
      "Get immediate insights and action items",
      "Determine if we're the right fit for you"
    ]
  },
  {
    icon: Rocket,
    title: "We'll Get to Work",
    description: [
      "Receive your customized action plan within 48 hours",
      "Begin implementation with expert guidance",
      "Get access to our proven systems and resources",
      "Regular check-ins to track progress"
    ]
  },
  {
    icon: Star,
    title: "Achieve Lasting Results",
    description: [
      "See measurable improvements in rankings",
      "Maintain sustainable growth",
      "Ongoing optimization and support",
      "Join our community of successful clients"
    ]
  }
];

export function Journey() {
  return (
    <div className="bg-gray-50 py-24" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Your Journey to SEO <span className="text-secondary">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, proven process to transform your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-secondary/30" />
          
          {steps.map((step, index) => (
            <JourneyStep
              key={index}
              icon={step.icon}
              step={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block bg-primary/5 rounded-xl p-6 mb-8">
            <p className="text-primary font-semibold">
              Limited spots available - Book now to secure your preferred time slot
            </p>
          </div>
          <div>
            <button className="bg-secondary hover:bg-opacity-90 text-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all">
              Schedule Your Strategy Call <Calendar className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}