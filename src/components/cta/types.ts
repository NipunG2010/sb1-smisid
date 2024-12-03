import { LucideIcon } from 'lucide-react';

export interface BentoItem {
  icon: LucideIcon;
  title: string;
  description: string;
  className: string;
}

export interface BentoItemProps extends BentoItem {
  delay?: number;
}