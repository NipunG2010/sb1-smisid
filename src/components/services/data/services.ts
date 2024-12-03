import { LucideIcon, Search, BarChart, Link2, MapPin, ShoppingCart, FileText, Brain, Gauge, LineChart, Rocket } from 'lucide-react';

export interface ServiceType {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

export const services: ServiceType[] = [
  {
    icon: Search,
    title: 'SEO Strategy & Audits',
    description: 'Comprehensive analysis and tailored plans to improve your website rankings.',
    features: [
      'In-depth website analysis',
      'Competitor research',
      'Custom strategy development',
      'Performance benchmarking'
    ],
    benefits: [
      'Clear roadmap for success',
      'Identify quick wins',
      'Long-term growth plan',
      'ROI forecasting'
    ]
  },
  {
    icon: BarChart,
    title: 'On-Page Optimization',
    description: 'Strategic enhancement of your content and website structure for maximum visibility.',
    features: [
      'Content optimization',
      'Meta tag optimization',
      'Internal linking strategy',
      'Schema markup implementation'
    ],
    benefits: [
      'Improved search rankings',
      'Better user experience',
      'Increased click-through rates',
      'Enhanced content relevance'
    ]
  },
  {
    icon: Link2,
    title: 'Off-Page Optimization',
    description: 'Building high-quality backlinks and improving domain authority.',
    features: [
      'Link building campaigns',
      'Digital PR strategies',
      'Brand mentions monitoring',
      'Authority building'
    ],
    benefits: [
      'Increased domain authority',
      'Better search rankings',
      'Brand credibility boost',
      'Referral traffic growth'
    ]
  },
  {
    icon: MapPin,
    title: 'Local SEO',
    description: 'Targeting nearby customers and dominating local search results.',
    features: [
      'Google Business optimization',
      'Local citation building',
      'Review management',
      'Local content strategy'
    ],
    benefits: [
      'Increased local visibility',
      'More foot traffic',
      'Better local rankings',
      'Enhanced community presence'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce SEO',
    description: 'Specialized optimization for online stores to increase product visibility.',
    features: [
      'Product page optimization',
      'Category structure improvement',
      'Shopping feed optimization',
      'Conversion rate optimization'
    ],
    benefits: [
      'Increased product visibility',
      'Higher conversion rates',
      'Better shopping rankings',
      'Improved user experience'
    ]
  },
  {
    icon: FileText,
    title: 'Content Optimization',
    description: 'Creating and optimizing SEO-friendly content that engages users.',
    features: [
      'Content strategy development',
      'Keyword optimization',
      'Content gap analysis',
      'Editorial calendar planning'
    ],
    benefits: [
      'Better content rankings',
      'Increased engagement',
      'More organic traffic',
      'Improved authority'
    ]
  },
  {
    icon: Brain,
    title: 'AI Keyword Research',
    description: 'Advanced AI-powered keyword research to identify opportunities.',
    features: [
      'AI trend analysis',
      'Semantic keyword clustering',
      'Competition analysis',
      'Search intent mapping'
    ],
    benefits: [
      'Data-driven insights',
      'Better targeting',
      'Higher relevance',
      'Competitive advantage'
    ]
  },
  {
    icon: Gauge,
    title: 'Technical SEO',
    description: 'Improving site speed, structure, and technical aspects.',
    features: [
      'Site speed optimization',
      'Mobile optimization',
      'Core Web Vitals',
      'Technical audits'
    ],
    benefits: [
      'Faster loading times',
      'Better user experience',
      'Improved crawlability',
      'Higher rankings'
    ]
  },
  {
    icon: LineChart,
    title: 'SEO Reporting',
    description: 'Detailed analytics and transparent performance insights.',
    features: [
      'Custom dashboards',
      'Real-time monitoring',
      'ROI tracking',
      'Competitive analysis'
    ],
    benefits: [
      'Clear performance metrics',
      'Data-driven decisions',
      'Transparent results',
      'Strategic insights'
    ]
  },
  {
    icon: Rocket,
    title: 'Startup SEO',
    description: 'Scalable solutions designed specifically for growing startups.',
    features: [
      'Growth strategy',
      'Market analysis',
      'Competitor benchmarking',
      'Scalable optimization'
    ],
    benefits: [
      'Rapid growth',
      'Market positioning',
      'Cost-effective solutions',
      'Sustainable results'
    ]
  }
];