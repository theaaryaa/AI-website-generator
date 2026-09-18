import { PromptTemplate } from '../types';

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'portfolio-designer',
    label: 'UI/UX Designer Portfolio',
    prompt: 'Create a modern portfolio website for a Senior Product & Interaction Designer with interactive case studies, design system showcase, awards, and contact form',
    category: 'portfolio',
    style: 'modern',
    icon: 'Sparkles',
  },
  {
    id: 'portfolio-dev',
    label: 'Full-Stack Developer Portfolio',
    prompt: 'Create a developer portfolio website with interactive project showcase, live tech stack badges, terminal bio hero, GitHub activity preview, and contact form',
    category: 'portfolio',
    style: 'dark',
    icon: 'Code',
  },
  {
    id: 'saas-landing',
    label: 'AI SaaS Product Landing Page',
    prompt: 'Create a modern SaaS landing page for an AI workflow automation tool with hero illustration, feature comparison matrix, pricing tiers, and interactive ROI calculator',
    category: 'landing',
    style: 'modern',
    icon: 'Layers',
  },
  {
    id: 'creative-agency',
    label: 'Boutique Creative Agency',
    prompt: 'Create an editorial creative studio website with bold typography, client roster marquee, interactive video/work reel section, and project inquiry form',
    category: 'agency',
    style: 'editorial',
    icon: 'Compass',
  },
  {
    id: 'artisan-coffee',
    label: 'Specialty Roastery & Cafe',
    prompt: 'Create a specialty coffee roaster website with seasonal bean origins map, brewing guide modal, cafe menu, and online subscription preview',
    category: 'ecommerce',
    style: 'warm',
    icon: 'Coffee',
  },
];

export const STYLE_OPTIONS = [
  { id: 'modern', label: 'Modern & Clean', desc: 'Sleek dark/light styling with subtle borders & vibrant accents' },
  { id: 'dark', label: 'Dark Cyber & Glass', desc: 'Deep neutral obsidian background with glowing neon accents' },
  { id: 'minimalist', label: 'Minimal Monochrome', desc: 'High-contrast black and off-white typography with generous space' },
  { id: 'editorial', label: 'Editorial Serif', desc: 'Classic editorial typography with warm neutrals and luxury feel' },
  { id: 'creative', label: 'Vibrant & Bold', desc: 'Playful vibrant gradients, card shadows, and rounded geometry' },
];
