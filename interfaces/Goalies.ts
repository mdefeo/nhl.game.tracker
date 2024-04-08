// /interfaces/Goalies.ts
export interface Goalie {
  playerId: number;
  headshot: string;
  firstName: {
    default: string;
    cs?: string;
    sk?: string;
  };
  lastName: {
    default: string;
    cs?: string;
    sk?: string;
  };
  positionCode: string;
  gamesPlayed: number;
  wins: number;
  losses: number;
  overtimeLosses: number;
  goalsAgainst: number;
  shotsAgainst: number;
  saves: number;
  savePercentage: number;
  goalsAgainstAverage: number;
  shutouts: number;
  timeOnIce: number;
}
