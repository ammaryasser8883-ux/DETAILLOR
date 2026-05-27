export interface Material {
  id: string;
  name: string;
  description: string;
}

export interface Finish {
  id: string;
  name: string;
  accent: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}
