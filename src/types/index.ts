export type Faction = 'autobot' | 'decepticon';

export interface Artifact {
  id: string;
  name: string;
  price: number;
  faction: Faction;
  robotImage: string;
  altModeImage: string;
  description: string;
  /**
   * CSS class string for grid layout control
   * e.g., 'col-span-1', 'col-span-2', 'row-span-2', etc.
   */
  gridSpan: string;
}
