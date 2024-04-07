// /interfaces/TeamRecord.ts
interface TeamRecord {
  team: {
    id: number;
    name: string;
  };
  leagueRecord: {
    wins: number;
    losses: number;
    ot: number;
    type: string;
  };
  goalsAgainst: number;
  goalsScored: number;
  points: number;
  divisionRank: string;
  conferenceRank: string;
  leagueRank: string;
  wildCardRank: string;
  row: number;
  gamesPlayed: number;
  streak: {
    streakType: string;
    streakNumber: number;
    streakCode: string;
  };
  lastUpdated: string;
}

export default TeamRecord;
