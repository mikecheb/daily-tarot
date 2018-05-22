import { Arcana, BaseCard } from './base-card';

export enum Suit {
  Wands,
  Cups,
  Swords,
  Pentacles,
}

export enum Rank {
  Ace = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Page,
  Knight,
  Queen,
  King,
}

export interface MinorArcana extends BaseCard {
  type: Arcana.Minor;
  suit: Suit;
  rank: Rank;
}
