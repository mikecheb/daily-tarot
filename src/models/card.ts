import { MajorArcana } from './major';
import { MinorArcana } from './minor';

export type Card = (
  | MajorArcana
  | MinorArcana
);
