export interface FAQItem {
  question: string;
  answer: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  readTime: number;
  content: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface BrancheChallenge {
  icon: string;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
