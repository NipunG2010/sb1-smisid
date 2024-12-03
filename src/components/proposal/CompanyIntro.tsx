import React from 'react';
import { Shield, Target, Zap, Users, BarChart } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: 'Data-Driven Strategy',
    description: 'Custom SEO roadmaps based on real-time analytics'
  },
  {
    icon: Zap,
    title: 'AI-Powered Optimization',
    description: 'Advanced algorithms for maximum search visibility'
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Direct access to seasoned SEO professionals'
  },
  {
    icon: BarChart,
    title: 'Performance Tracking',
    description: 'Transparent reporting and ROI monitoring'
  }
];

export function CompanyIntro() {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-center mb-8">
        <Shield className="w-16 h-16 text-secondary" />
      </div>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Your Partner in Digital Success
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transforming businesses through innovative SEO strategies and measurable results
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-primary/5 rounded-xl p-8 mb-12">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              With over a decade of experience in digital excellence, we've helped hundreds of businesses achieve unprecedented growth through our data-driven SEO strategies. Our proven track record spans across industries, consistently delivering results that exceed expectations.
            </p>
            <p className="mb-6">
              What sets us apart is our unique blend of cutting-edge technology and human expertise. Our AI-powered tools analyze over 200 ranking factors in real-time, while our seasoned professionals craft strategies that align perfectly with your business goals. This combination has helped our clients achieve an average of 250% increase in organic traffic.
            </p>
            <p>
              We believe in complete transparency and measurable outcomes. Every strategy we implement is backed by data, and every decision is made with your ROI in mind. Our commitment to your success has earned us a 98% client retention rate and numerous industry accolades.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 group">
              <solution.icon className="w-12 h-12 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}