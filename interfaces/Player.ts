export interface FeaturedStats {
  season: number;
  regularSeason: {
    subSeason: PlayerStat;
    career: PlayerStat;
  };
}

export interface PlayerStat {
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number;
  gameWinningGoals: number;
  otGoals: number;
  shots: number;
  shootingPctg: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
}

export interface DraftDetails {
  year: number;
  teamAbbrev: string;
  round: number;
  pickInRound: number;
  overallPick: number;
}

export interface Player {
  playerId: number;
  isActive: boolean;
  firstName: { default: string };
  lastName: { default: string };
  fullTeamName: { default: string }; 
  currentTeamAbbrev: string;
  teamLogo: string;
  sweaterNumber: number;
  position: string;
  headshot: string;
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
    regularSeason: PlayerStat;
    playoffs?: PlayerStat;
  };
  draftDetails?: DraftDetails;
}

