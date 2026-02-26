
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  // Detail fields for case study page
  challenge?: string;
  solution?: string;
  results?: string[];
  subtitle?: string;
}

export interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  icon?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export interface HobbyItem {
  id: string;
  title: string;
  type: 'Graphic Design' | 'Photography';
  image: string;
}
