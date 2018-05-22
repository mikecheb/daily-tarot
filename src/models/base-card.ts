export enum Arcana {
  Major,
  Minor,
}

export interface BaseCard {
  type: Arcana;
  // TODO Remove all optional parameters.
  upright?: string;
  reversed?: string;
  url?: string;
}
