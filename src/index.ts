import { cards } from './data';
import * as fs from 'fs';

const date = new Date();
const card = cards[Math.floor(Math.random() * cards.length)];
const isReversed = Math.floor(Math.random() * 2) === 1;


const feedObject = {
  uid: date.toLocaleDateString("en-US"),
  updateDate: date.toISOString(),
  titleText: isReversed ? `${card.name} Reversed` : card.name,
  mainText: isReversed ? `${card.textName} Reversed: ${card.reversed}` : `${card.textName}: ${card.upright}`,
  redirectionUrl: card.url,
};

// TODO Write the JSON.
fs.writeFileSync('./generated/feed.json', JSON.stringify(feedObject));
