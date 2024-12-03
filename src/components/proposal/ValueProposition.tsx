import React from 'react';
import { Award, Users, Briefcase, Trophy, Star } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: "Industry Recognition",
    content: "2023 Best SEO Agency Award winner & Google Premier Partner"
  },
  {
    icon: Users,
    title: "Client Success",
    content: "500+ businesses transformed with average 250% traffic increase"
  },
  {
    icon: Star,
    title: "Satisfaction Rate",
    content: "98% client retention rate with 5-star average rating"
  },
  {
    icon: Briefcase,
    title: "Project Delivery",
    content: "1,000+ successful SEO campaigns delivered on time"
  }
];

export function ValueProposition() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Why Choose InnovateX?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our unique combination of expertise, technology, and proven results sets us apart
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <achievement.icon className="w-12 h-12 text-secondary mb-4" />
              <h4 className="text-xl font-semibold text-primary mb-2">
                {achievement.title}
              </h4>
              <p className="text-gray-600">
                {achievement.content}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-xl p-8 text-white">
          <h4 className="text-2xl font-bold mb-6">Our Competitive Edge</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-secondary font-semibold mb-3">Proprietary Technology</h5>
              <p className="text-gray-300 mb-6">
                Our AI-powered SEO platform analyzes 200+ ranking factors in real-time, providing insights that traditional tools miss.
              </p>
              
              <h5 className="text-secondary font-semibold mb-3">Expert Team</h5>
              <p className="text-gray-300">
                Led by certified professionals with experience at Google, Amazon, and leading digital agencies.
              </p>
            </div>
            <div>
              <h5 className="text-secondary font-semibold mb-3">Proven Methodology</h5>
              <p className="text-gray-300 mb-6">
                Our 6-step optimization process has been refined through 1,000+ successful projects.
              </p>
              
              <h5 className="text-secondary font-semibold mb-3">Guaranteed Results</h5>
              <p className="text-gray-300">
                We're so confident in our approach that we offer a performance-based pricing model.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}