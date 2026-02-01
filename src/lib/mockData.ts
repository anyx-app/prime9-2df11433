import { Artifact } from '../types';

export const MOCK_ARTIFACTS: Artifact[] = [
  {
    id: 'opt-prime-ldr-001',
    name: 'Optimus Prime - Leader Class',
    description: 'The fearless leader of the Autobots. Features intricate detailing, die-cast parts, and a fully articulated matrix chamber. Transforms from robot to truck in 35 steps.',
    price: 129.99,
    stock_level: 15,
    category: 'Autobot',
    series: 'War for Cybertron',
    images: [
      'https://images.unsplash.com/photo-1635235839218-0909c2c62c2f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1599839556209-66b96317d7b3?auto=format&fit=crop&q=80&w=800'
    ],
    tech_specs: {
      strength: 10,
      intelligence: 10,
      speed: 6,
      endurance: 10,
      rank: 10,
      courage: 10,
      firepower: 8,
      skill: 10
    },
    features: [
      'Die-cast metal parts',
      'LED light-up eyes and Matrix',
      'Includes Ion Blaster and Energon Axe',
      'Premium metallic finish'
    ],
    is_featured: true
  },
  {
    id: 'meg-tron-ldr-001',
    name: 'Megatron - Emperor of Destruction',
    description: 'Ruthless leader of the Decepticons. This figure commands respect with a imposing silhouette and fusion cannon accessory. Transforms into a cybertronian tank.',
    price: 119.99,
    stock_level: 8,
    category: 'Decepticon',
    series: 'Generation 1',
    images: [
      'https://images.unsplash.com/photo-1606660265514-358ebbadc80d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1603520859590-785d95d82065?auto=format&fit=crop&q=80&w=800'
    ],
    tech_specs: {
      strength: 10,
      intelligence: 10,
      speed: 4,
      endurance: 9,
      rank: 10,
      courage: 9,
      firepower: 10,
      skill: 9
    },
    features: [
      'Fusion Cannon lights up',
      'Voice clips from the original series',
      'Includes energy mace',
      'Weathered battle-damage paint application'
    ],
    is_featured: true
  },
  {
    id: 'bb-bee-dlx-001',
    name: 'Bumblebee - Deluxe Scout',
    description: 'Small, eager, and brave, Bumblebee acts as a messenger and spy. This deluxe figure captures his classic VW Beetle mode with modern engineering.',
    price: 29.99,
    stock_level: 42,
    category: 'Autobot',
    series: 'Cinematic Universe',
    images: [
      'https://images.unsplash.com/photo-1579619179040-2c7c5b61405a?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1627855364177-3e847c2105c9?auto=format&fit=crop&q=80&w=800'
    ],
    tech_specs: {
      strength: 2,
      intelligence: 8,
      speed: 9,
      endurance: 6,
      rank: 7,
      courage: 10,
      firepower: 1,
      skill: 7
    },
    features: [
      'Interchangeable battle mask',
      'Stinger blaster accessory',
      'Highly articulated ankle tilts',
      'Compact alt-mode'
    ],
    is_featured: false
  },
  {
    id: 'snd-wave-voy-001',
    name: 'Soundwave - Communications Officer',
    description: 'Soundwave superior, others inferior. This Voyager class figure includes Laserbeak and Ravage cassettes that fit inside his chest compartment.',
    price: 49.99,
    stock_level: 12,
    category: 'Decepticon',
    series: 'Generation 1',
    images: [
      'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800'
    ],
    tech_specs: {
      strength: 8,
      intelligence: 9,
      speed: 2,
      endurance: 6,
      rank: 8,
      courage: 5,
      firepower: 6,
      skill: 10
    },
    features: [
      'Eject mechanism for cassettes',
      'Includes 2 cassette minions',
      'Shoulder cannon accessory',
      'Box art inspired packaging'
    ],
    is_featured: false
  },
  {
    id: 'grim-lock-ldr-001',
    name: 'Grimlock - Dinobot King',
    description: 'Me Grimlock King! A massive figure that dominates the shelf. Transforms into a mechanical T-Rex. Features jaw-chomping action.',
    price: 89.99,
    stock_level: 5,
    category: 'Autobot',
    series: 'Beast Wars',
    images: [
      'https://images.unsplash.com/photo-1581557991964-125469da3b8a?auto=format&fit=crop&q=80&w=800'
    ],
    tech_specs: {
      strength: 10,
      intelligence: 7,
      speed: 3,
      endurance: 10,
      rank: 9,
      courage: 10,
      firepower: 8,
      skill: 10
    },
    features: [
      'Light-up sword',
      'Articulated dino jaw',
      'Gold chrome detailing',
      'Includes crown accessory'
    ],
    is_featured: true
  }
];
