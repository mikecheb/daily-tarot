import * as fs from 'fs';
import { Deck } from './data/deck';
import { getCardName } from './utils';

const date = new Date();
const card = Deck[Math.floor(Math.random() * Deck.length)];
const isReversed = Math.floor(Math.random() * 2) === 1;

const titleText = isReversed ? `${getCardName(card)} Reversed` : getCardName(card);
const feedObject = {
  uid: date.toLocaleDateString('en-US'),
  updateDate: date.toISOString(),
  titleText,
  mainText: titleText,
  redirectionUrl: undefined,
};

if (!isReversed && card.upright) {
  feedObject.mainText += `: ${card.upright}`;
} else if (isReversed && card.reversed) {
  feedObject.mainText += `: ${card.reversed}`;
}

if (card.url) {
  feedObject.redirectionUrl = card.url;
}

fs.writeFileSync('./generated/feed.json', JSON.stringify(feedObject));
