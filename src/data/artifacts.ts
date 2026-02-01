export type Faction = 'Autobot' | 'Decepticon' | 'Maximal' | 'Predacon';

export interface Artifact {
  id: string;
  name: string;
  subtitle: string;
  faction: Faction;
  price: number;
  rating: number;
  image: string;
  description: string;
  tags: string[];
  layout: {
    colSpan: 1 | 2 | 3 | 4;
    rowSpan: 1 | 2;
  };
}

export const artifacts: Artifact[] = [
  {
    id: 'opt-001',
    name: 'Optimus Prime',
    subtitle: 'MP-44 Convoy Ver. 3.0',
    faction: 'Autobot',
    price: 450.00,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1606660265514-358ebbadc80d?q=80&w=2070&auto=format&fit=crop',
    description: 'The definitive Masterpiece edition of the Autobot Leader. Features cartoon-accurate styling, voice clips from the original series, and a trailer that converts into a combat deck.',
    tags: ['Masterpiece', 'Leader Class', 'Die-cast'],
    layout: {
      colSpan: 2,
      rowSpan: 2
    }
  },
  {
    id: 'meg-001',
    name: 'Megatron',
    subtitle: 'MP-36 Destron Leader',
    faction: 'Decepticon',
    price: 320.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1574146059637-230554b7c128?q=80&w=2000&auto=format&fit=crop',
    description: 'The Emperor of Destruction rendered in stunning detail. Includes multiple face plates, damaged chest armor, and his iconic fusion cannon.',
    tags: ['Masterpiece', 'Leader Class', 'Vintage'],
    layout: {
      colSpan: 1,
      rowSpan: 2
    }
  },
  {
    id: 'bum-002',
    name: 'Bumblebee',
    subtitle: 'VW Beetle Edition',
    faction: 'Autobot',
    price: 85.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1635862215456-65476a6b8c8d?q=80&w=2000&auto=format&fit=crop',
    description: 'Small, eager, and brave, Bumblebee acts as a messenger and spy. This figure transforms into a licensed Volkswagen Beetle.',
    tags: ['Scout Class', 'G1', 'Licensed'],
    layout: {
      colSpan: 1,
      rowSpan: 1
    }
  },
  {
    id: 'snd-003',
    name: 'Soundwave',
    subtitle: 'Legacy Core Class',
    faction: 'Decepticon',
    price: 120.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1563086976-563dff55227d?q=80&w=2000&auto=format&fit=crop',
    description: 'Decepticon communications officer. Capable of ejecting cassette minions (sold separately) from his chest compartment.',
    tags: ['Voyager Class', 'Cassettes', 'Communication'],
    layout: {
      colSpan: 1,
      rowSpan: 1
    }
  },
  {
    id: 'star-004',
    name: 'Starscream',
    subtitle: 'Coronation Edition',
    faction: 'Decepticon',
    price: 160.00,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1606735584880-e349868bb210?q=80&w=2000&auto=format&fit=crop',
    description: 'The treacherous Air Commander. This set includes the crown, cape, and shoulder pads from his brief moment as Decepticon leader.',
    tags: ['Seeker', 'Leader Class', 'Movie 86'],
    layout: {
      colSpan: 2,
      rowSpan: 1
    }
  },
  {
    id: 'grim-005',
    name: 'Grimlock',
    subtitle: 'Studio Series 86',
    faction: 'Autobot',
    price: 199.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1534065609659-d8e96dc65471?q=80&w=2000&auto=format&fit=crop',
    description: 'Me Grimlock King! The leader of the Dinobots transforms into a massive mechanical T-Rex. Includes Wheelie figure.',
    tags: ['Dinobot', 'Leader Class', 'Studio Series'],
    layout: {
      colSpan: 2,
      rowSpan: 1
    }
  },
  {
    id: 'dev-006',
    name: 'Devastator',
    subtitle: 'Combiner Wars Set',
    faction: 'Decepticon',
    price: 550.00,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1634975548657-3f8221c97695?q=80&w=2000&auto=format&fit=crop',
    description: 'The first Combiner. Formed by the six Constructicons, this massive figure stands 18 inches tall and dominates any shelf.',
    tags: ['Combiner', 'Titan Class', 'Construction'],
    layout: {
      colSpan: 3,
      rowSpan: 2
    }
  },
  {
    id: 'jazz-007',
    name: 'Jazz',
    subtitle: 'Special Ops',
    faction: 'Autobot',
    price: 75.00,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?q=80&w=2000&auto=format&fit=crop',
    description: 'Do it with style or don\'t do it at all. Jazz loves Earth culture and transforms into a sleek racing car.',
    tags: ['Deluxe Class', 'Spec Ops', 'G1'],
    layout: {
      colSpan: 1,
      rowSpan: 1
    }
  },
  {
    id: 'shock-008',
    name: 'Shockwave',
    subtitle: 'Galactic Man',
    faction: 'Decepticon',
    price: 95.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1616012480717-fd9867059ca0?q=80&w=2000&auto=format&fit=crop',
    description: 'Driven by pure logic, Shockwave commands Cybertron in Megatron\'s absence. Features light-up eye and cannon arm.',
    tags: ['Voyager Class', 'Logic', 'Scientist'],
    layout: {
      colSpan: 1,
      rowSpan: 1
    }
  },
  {
    id: 'prim-009',
    name: 'Optimal Optimus',
    subtitle: 'Throne of the Primes',
    faction: 'Maximal',
    price: 210.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1588636402800-349f2b8449c2?q=80&w=2000&auto=format&fit=crop',
    description: 'The massive quadruple changer from Beast Wars. Transforms between robot, gorilla, jet, and transport tank.',
    tags: ['Beast Wars', 'Leader Class', 'Primal'],
    layout: {
      colSpan: 2,
      rowSpan: 2
    }
  }
];
