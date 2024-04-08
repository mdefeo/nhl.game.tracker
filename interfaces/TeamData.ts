// /interfaces/TeamData.ts
import Skaters from "@/app/components/Skaters";
import Goalies from "@/app/components/Goalies";

export interface TeamData {
  teamName: string;
  skaters: Skater[];
  goalies: Goalie[];
  // Other team-related properties
}

export interface Skater {
  playerId: number;
  headshot: string;
  firstName: { default: string };
  lastName: { default: string };
  positionCode: string;
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  penaltyMinutes: number;
  powerPlayGoals: number;
  shorthandedGoals: number;
  gameWinningGoals: number;
  shots: number;
  avgTimeOnIcePerGame: number;
  avgShiftsPerGame: number;
  faceoffWinPctg: number;
}

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
