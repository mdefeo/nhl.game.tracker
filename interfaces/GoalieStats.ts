// /interfaces/GoalieStat.ts
interface GoalieStat {
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
  season: string;
  seasonTotals: {
    wins: number;
    losses: number;
  };
  regularSeason: {
    subSeason: {
      gamesPlayed: number;
      wins: number;
      losses: number;
      otLosses: number;
      shutouts: number;
      goalsAgainstAvg: number;
      savePctg: number;
    };
    career: {
      gamesPlayed: number;
      wins: number;
      losses: number;
      otLosses: number;
      shutouts: number;
      goalsAgainstAvg: number;
      savePctg: number;
    };
  };
}

export default GoalieStat;
