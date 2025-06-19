import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => JSX.Element); // Allow LucideIcon or custom SVG component
  image?: string; // Optional image URL for the service
  features?: string[]; // Optional list of key features or benefits
  dataAiHint?: string; // For placeholder image generation
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string; // Can be Markdown or HTML string
  imageUrl?: string;
  dataAiHint?: string; // For placeholder image generation
  tags?: string[];
}
