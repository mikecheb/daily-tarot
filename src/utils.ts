import { Arcana } from './models/base-card';
import { Card } from './models/card';
import { Rank, Suit } from './models/minor';

export function getCardName(card: Card) {
  if (card.type === Arcana.Major) {
    return card.name;
  } else {
    return `The ${Rank[card.rank]} of ${Suit[card.suit]}`;
  }
}

export function isCourtCard(card: Card) {
  return card.type === Arcana.Minor && card.rank > 10;
}
