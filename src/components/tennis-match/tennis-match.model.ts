import { TennisTeamI } from "../tennis-match-team/tennis-match-team.model";

export interface TennisMatchI {
  id: string;
  url: string;
  matchData: TennisMatchDataI;
  teamA: TennisTeamI;
  teamB: TennisTeamI;
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
