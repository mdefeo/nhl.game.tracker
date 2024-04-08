interface PlayerStats {
  gamesPlayed: number;
  goals: number;
  assists: number;
  points: number;
  plusMinus: number;
  pim: number; // Penalty Minutes
  gameWinningGoals: number;
  otGoals: number; // Overtime Goals
  shots: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shorthandedGoals: number;
  shorthandedPoints: number;
}

export default PlayerStats;
