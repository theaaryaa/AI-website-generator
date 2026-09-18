export type ViewportMode = 'desktop' | 'tablet' | 'mobile';
export type ViewTab = 'preview' | 'code' | 'split';
export type CodeLanguage = 'html' | 'css' | 'js' | 'full';

export interface WebsiteVersion {
  id: string;
  version: number;
  prompt: string;
  title: string;
  html: string;
  css: string;
  js: string;
  timestamp: number;
  style: string;
  suggestedPrompts: string[];
}

export interface GenerationState {
  isGenerating: boolean;
  step: string;
  progress: number;
  error: string | null;
}

export interface PromptTemplate {
  id: string;
  label: string;
  prompt: string;
  category: 'portfolio' | 'landing' | 'ecommerce' | 'agency' | 'creative';
  style: string;
  icon: string;
}
