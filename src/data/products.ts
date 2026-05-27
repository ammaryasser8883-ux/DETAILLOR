import type { Category, Product } from '@/lib/types';

export const categories: Category[] = [
  {
    id: 'buttons',
    title: 'Buttons',
    description: 'Precision resin, matte and metallic finishes engineered for couture garments.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop',
    tag: 'Engineered Detail',
  },
  {
    id: 'zippers',
    title: 'Zippers',
    description: 'High-performance closures with a refined industrial edge.',
    image: 'https://images.unsplash.com/photo-1518761845366-82b2effde8e8?q=80&w=1974&auto=format&fit=crop',
    tag: 'Precision Fit',
  },
  {
    id: 'hang-tags',
    title: 'Hang Tags',
    description: 'Minimal branded details crafted for premium garment storytelling.',
    image: 'https://images.unsplash.com/photo-1512438501559-4def71586bed?q=80&w=1974&auto=format&fit=crop',
    tag: 'Brand Identity',
  },
  {
    id: 'packaging',
    title: 'Packaging',
    description: 'Luxury presentation systems designed for premium unboxing moments.',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d8?q=80&w=1974&auto=format&fit=crop',
    tag: 'Signature Finish',
  },
  {
    id: 'woven-labels',
    title: 'Woven Labels',
    description: 'Tailored identity markers with lasting texture and precision.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop',
    tag: 'Crafted Precision',
  },
];

export const productHighlights: Product[] = [
  {
    id: 'resin-buttons',
    name: 'Premium Resin Buttons',
    category: 'Buttons',
    description: 'Engineered for timeless luxury and superior garment identity systems.',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop',
    highlights: ['Refined matte finishes', 'Precision molded detail', 'Custom tonal palettes'],
  },
  {
    id: 'matte-buttons',
    name: 'Matte Soft-Touch Buttons',
    category: 'Buttons',
    description: 'Soft matte finishes engineered for premium modern garments.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1970&auto=format&fit=crop',
    highlights: ['Textured surfaces', 'Hand-finished feel', 'Designer-friendly performance'],
  },
  {
    id: 'horn-effect-buttons',
    name: 'Horn Effect Resin',
    category: 'Buttons',
    description: 'Organic-inspired engineered textures for outerwear applications.',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1974&auto=format&fit=crop',
    highlights: ['Warm tonal depth', 'Durable resin shell', 'Luxury surface detail'],
  },
];
