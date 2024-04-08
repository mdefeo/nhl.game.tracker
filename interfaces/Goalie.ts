// /interfaces/Goalie.ts
export interface FeaturedStats {
  season: number;
  regularSeason: {
    subSeason: GoalieStat;
    career: GoalieStat;
  };
}

export interface GoalieStat {
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
  otLosses: number;
  goalsAgainst: number;
  goalsAgainstAvg: number;
  shotsAgainst: number;
  saves: number;
  savePercentage: number;
  savePctg: number;
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
      goalsAgainstAverage: number;
      savePercentage: number;
      ties: number;
      goalsAgainstAvg: number;
      savePctg: number;
    };
    career: { // corrected career property name
      gamesPlayed: number;
      wins: number;
      losses: number;
      otLosses: number;
      shutouts: number;
      goalsAgainstAverage: number;
      savePercentage: number;
      ties: number;
      goalsAgainstAvg: number;
      savePctg: number;
      shotsAgainst: number;
      goalsAgainst: number;
      timeOnIce: number;
    };
  };
}

export interface DraftDetails {
  year: number;
  teamAbbrev: string;
  round: number;
  pickInRound: number;
  overallPick: number;
}

export interface Goalie {
  playerId: number;
  headshot: string;
  fullTeamName: { default: string }; 
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
  currentTeamAbbrev: string;
  positionCode: string;
  teamLogo: string;
  sweaterNumber: number;
  position: string;
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
  heroImage: string;
  heightInInches: number;
  heightInCentimeters: number;
  weightInPounds: number;
  weightInKilograms: number;
  birthDate: string;
  birthCity?: { default: string };
  birthStateProvince?: { default: string };
  birthCountry?: string;
  shootsCatches: string;

  featuredStats: FeaturedStats;
  careerTotals: {
    regularSeason: GoalieStat;
    playoffs?: GoalieStat;
  };
  draftDetails: DraftDetails;
}