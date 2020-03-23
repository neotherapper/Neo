export interface TennisTeamI {
  players: TennisPlayerI[];
  sets: TennisSetI[];
  winner: boolean;
  seed: number;
  hasService: boolean;
  points: string;
  endCause: string;
  entryStatus: string;
}

export interface TennisPlayerI {
  firstName: string;
  lastName: string;
  shortName: string;
  ranking: number;
  rankingDouble: number;
  country: string;
  sex: string;
  playerCardUrl: string;
  birth: string;
  info: string;
  imageMarkup: string;
  imageUrl: string;
}

export interface TennisSetI {
  score: number;
  tieBreak: number;
  winner: boolean;
  inProgress: boolean;
}
