import { TrendingUp, Users, Target, Shield, Award } from 'lucide-react';
import type { BentoItem } from './types';

export const bentoItems: BentoItem[] = [
  {
    icon: TrendingUp,
    title: '250% Average Growth',
    description: 'Our clients see significant traffic increases within 90 days',
    className: 'md:col-span-1 bg-gradient-to-br from-primary/80 to-primary'
  },
  {
    icon: Users,
    title: '500+ Success Stories',
    description: 'Join hundreds of businesses already crushing their SEO goals',
    className: 'md:col-span-2 bg-gradient-to-br from-secondary/10 to-secondary/5'
  },
  {
    icon: Target,
    title: 'Targeted Strategy',
    description: 'Custom action plan tailored to your specific business needs',
    className: 'md:col-span-2 bg-gradient-to-br from-primary/80 to-primary'
  },
  {
    icon: Shield,
    title: 'Guaranteed Results',
    description: 'We\'re so confident, we offer a performance-based pricing model',
    className: 'md:col-span-1 bg-gradient-to-br from-secondary/10 to-secondary/5'
  },
  {
    icon: Award,
    title: 'Limited Time Offer',
    description: 'Book your call now - only 2 spots remaining this month',
    className: 'md:col-span-3 bg-gradient-to-br from-secondary/20 to-secondary/10'
  }
];