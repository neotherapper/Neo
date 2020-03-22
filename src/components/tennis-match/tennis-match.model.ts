export interface TennisMatchI {
  id: string;
  url: string;
  matchData: TennisMatchDataI;
  teamA: TennisTeamI;
  teamB: TennisTeamI;
}

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

export interface TennisMatchDataI {
  type: string;
  typeLabel: string;
  round: number;
  roundLabel: string;
  courtName: string;
  durationInMinutes: number;
  endTimestamp: number;
  status: string;
  statusLabel: string;
}
