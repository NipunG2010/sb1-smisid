import React from 'react';
import { Target, RefreshCcw, Clock } from 'lucide-react';
import { ProblemCard } from './ProblemCard';
import { ComplexityGraph } from './ComplexityGraph';

const problems = [
  {
    icon: Target,
    title: "Overwhelming Competition",
    points: [
      "90% of pages get zero organic traffic from Google",
      "Traditional SEO methods are becoming obsolete",
      "Competitors are investing heavily in digital presence"
    ]
  },
  {
    icon: RefreshCcw,
    title: "Constant Algorithm Changes",
    points: [
      "Google makes 500+ algorithm updates yearly",
      "Manual SEO strategies struggle to keep pace",
      "Risk of penalties from outdated practices"
    ]
  },
  {
    icon: Clock,
    title: "Resource Drain",
    points: [
      "Hours spent on keyword research",
      "Costly trial and error approaches",
      "Delayed results impacting ROI"
    ]
  }
];

export function ProblemSection() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Traditional SEO Isn't Enough in Today's Digital Landscape
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The digital landscape is evolving faster than ever. Here's why conventional approaches fall short.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              icon={problem.icon}
              title={problem.title}
              points={problem.points}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <ComplexityGraph />
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary mb-6">
            Our AI-Powered SEO Solution Addresses These Challenges Head-On
          </h3>
          <button className="bg-secondary hover:bg-opacity-90 text-primary px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all">
            Discover How We Can Transform Your SEO Strategy →
          </button>
        </div>
      </div>
    </div>
  );
}