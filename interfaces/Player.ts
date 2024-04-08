export interface FeaturedStats {
  season: number; // Assuming season is just a year here, based on your JSON
  regularSeason: {
    subSeason: PlayerStat; // Subseason stats as per the provided JSON structure
    career: PlayerStat; // Career stats within the same season context
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
  // Include other properties as needed
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
  fullTeamName: { default: string }; // Mark as optional to handle potential absence
  // fullTeamName: string;
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
  birthCity?: { default: string }; // Mark as optional to handle potential absence
  birthStateProvince?: { default: string }; // Mark as optional to handle potential absence
  birthCountry?: { default: string }; // Mark as optional to handle potential absence
  shootsCatches: string;
  featuredStats: FeaturedStats;
  careerTotals: {
    regularSeason: PlayerStat;
    playoffs?: PlayerStat;
  };
  draftDetails?: DraftDetails;
}

