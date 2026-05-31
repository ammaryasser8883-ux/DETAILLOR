import type { Category, Material, Product, ProcessStep } from '@/lib/types';
import { assets } from '@/data/assets';

export const categories: Category[] = [
  {
    id: 'zippers',
    title: 'Zippers',
    description: 'Premium fastening systems in development.',
    image: assets.categories?.zippers ?? '',
    tag: 'Coming Soon',
  },
  {
    id: 'hangTags',
    title: 'Hang Tags',
    description: 'Luxury brand identity elements coming soon.',
    image: assets.categories?.hangTags ?? '',
    tag: 'Coming Soon',
  },
  {
    id: 'packaging',
    title: 'Packaging',
    description: 'Premium garment presentation systems coming soon.',
    image: assets.categories?.packaging ?? '',
    tag: 'Coming Soon',
  },
  {
    id: 'wovenLabels',
    title: 'Woven Labels',
    description: 'Identity woven systems coming soon.',
    image: assets.wovenLabels?.background ?? '',
    tag: 'Coming Soon',
  },
];

export const productHighlights: Product[] = [
  {
    id: 'premium-resin-buttons',
    name: 'Premium Resin Buttons',
    category: 'Buttons',
    description:
      'Engineered for exact precision with a tactile refinement, communicating classic timelessness and superior quality on dark fashion fabrics.',
    image: assets.buttons.premiumResin,
    highlights: ['Refined matte finishes', 'Precision molded detail', 'Custom tonal palettes'],
  },
  {
    id: 'matte-soft-touch-buttons',
    name: 'Matte Soft-Touch Buttons',
    category: 'Buttons',
    description:
      'A non-reflective, smooth surface engineered for modern minimalist garments requiring subtle luxury and an authentic matte finish.',
    image: assets.buttons.matteSoftTouch,
    highlights: ['Soft matte feel', 'Minimal reflection', 'Modern luxury surface'],
  },
  {
    id: 'horn-effect-resin',
    name: 'Horn Effect Resin',
    category: 'Buttons',
    description:
      'Classic organic striations replicated with absolute industrial consistency and authoritative presence for premium garment applications.',
    image: assets.buttons.hornEffectResin,
    highlights: ['Organic texture', 'Structured depth', 'Premium surface detail'],
  },
  {
    id: 'marble-effect-resin',
    name: 'Marble Effect Resin',
    category: 'Buttons',
    description:
      'Luxurious stone-like textures featuring unique veining patterns that elevate bespoke product identity with ultra realistic detail.',
    image: assets.buttons.marbleEffectResin,
    highlights: ['Veined marble finish', 'Bespoke luxury look', 'Textural precision'],
  },
  {
    id: 'custom-engraved-buttons',
    name: 'Custom Engraved Buttons',
    category: 'Buttons',
    description:
      'Precise laser-etched branding and engraved details executed with uncompromising industrial precision.',
    image: assets.buttons.customEngraved,
    highlights: ['Laser engraving', 'Brand personalization', 'Exacting finish'],
  },
  {
    id: 'metal-look-resin-buttons',
    name: 'Metal-Look Resin Buttons',
    category: 'Buttons',
    description:
      'The weightless durability of premium resin combined with an authentic, meticulously crafted metallic finish.',
    image: assets.buttons.metalLookResin,
    highlights: ['Metallic luster', 'Lightweight resin', 'Engineered durability'],
  },
  {
    id: 'frosted-resin-buttons',
    name: 'Frosted Resin Buttons',
    category: 'Buttons',
    description:
      'Translucent matte finishes that diffuse light, offering a subtle, contemporary aesthetic for avant-garde designs and engineered garments.',
    image: assets.buttons.frostedResin,
    highlights: ['Subtle translucency', 'Diffused light plays', 'Contemporary luxury'],
  },
  {
    id: 'shank-buttons',
    name: 'Shank Buttons',
    category: 'Buttons',
    description:
      'Seamless face designs featuring robust, engineered hidden attachment points for a flawless exterior and superior structural integrity.',
    image: assets.buttons.shankButtons,
    highlights: ['Hidden attachment', 'Flawless exterior', 'Structural reliability'],
  },
  {
    id: 'oversized-fashion-buttons',
    name: 'Oversized Fashion Buttons',
    category: 'Buttons',
    description:
      'Statement proportions engineered with structural integrity, designed to anchor bold outerwear silhouettes in premium collections.',
    image: assets.buttons.oversizedFashion,
    highlights: ['Statement scale', 'Bold luxury attitude', 'Engineered integrity'],
  },
];

export const materials: Material[] = [
  { id: 'matte-resin', name: 'Matte Resin', description: 'Soft, low-reflective finishes built for contemporary dark fashion.' },
  { id: 'horn-effect', name: 'Horn Effect', description: 'Organic mottled textures with industrial consistency and tactile depth.' },
  { id: 'marble-resin', name: 'Marble Resin', description: 'Stone-like finishes with unique veining and premium surface detail.' },
  { id: 'frosted-resin', name: 'Frosted Resin', description: 'Translucent matte coatings that diffuse light for subtle luxury.' },
  { id: 'metal-look', name: 'Metal-Look Resin', description: 'Authentic metallic surfaces without the excess weight.' },
  { id: 'soft-touch', name: 'Soft Touch Coating', description: 'Tactile finishes engineered for comfort and elevated feel.' },
  { id: 'laser-engraving', name: 'Laser Engraving', description: 'Precision branding and detail work executed with exact accuracy.' },
  { id: 'custom-textures', name: 'Custom Textures', description: 'Bespoke surface finishes tailored to premium brand identity systems.' },
];

export const processSteps: ProcessStep[] = [
  { id: 'concept', title: 'Concept & References', description: 'We begin with creative direction and reference material for a polished design brief.' },
  { id: 'material-selection', title: 'Material Selection', description: 'Premium resin systems and finishes are chosen to match the intended garment identity.' },
  { id: 'mold-development', title: 'Mold Development', description: 'Engineering the exact tooling and shaping required for consistent production.' },
  { id: 'sampling', title: 'Sampling', description: 'High-fidelity prototypes are produced and refined before the final run.' },
  { id: 'production', title: 'Production', description: 'Luxury manufacturing delivers exacting quality across every order.' },
];

export const manufacturingImages = [
  {
    id: 'precision-edge',
    title: 'Precision Edge Finishing',
    image: assets.manufacturing.precisionEdge,
    alt: 'Precision edge finishing detail',
  },
  {
    id: 'engineered-mold',
    title: 'Engineered Metal Mold',
    image: assets.manufacturing.engineeredMold,
    alt: 'Engineered metal mold close-up',
  },
];
