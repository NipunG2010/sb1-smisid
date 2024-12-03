import { Search, BarChart, Link2, MapPin, ShoppingCart, FileText, Brain, Gauge } from 'lucide-react';

export const footerServices = [
  {
    icon: Search,
    title: 'SEO Strategy',
    description: 'Comprehensive analysis and tailored plans for improved rankings'
  },
  {
    icon: BarChart,
    title: 'Performance',
    description: 'Track and optimize your SEO metrics for better results'
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Cutting-edge AI technology for smarter optimization'
  },
  {
    icon: Gauge,
    title: 'Technical SEO',
    description: 'Expert optimization of your technical infrastructure'
  }
];

export const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Services',
    links: [
      { label: 'SEO Audit', href: '/services/audit' },
      { label: 'Local SEO', href: '/services/local' },
      { label: 'Content Strategy', href: '/services/content' },
      { label: 'Technical SEO', href: '/services/technical' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/resources/cases' },
      { label: 'SEO Guide', href: '/resources/guide' },
      { label: 'Tools', href: '/resources/tools' },
      { label: 'FAQ', href: '/resources/faq' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR', href: '/gdpr' }
    ]
  }
];