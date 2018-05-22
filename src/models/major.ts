import { Arcana, BaseCard } from './base-card';

export interface MajorArcana extends BaseCard {
  type: Arcana.Major;
  name: string;
  number: number;
}
