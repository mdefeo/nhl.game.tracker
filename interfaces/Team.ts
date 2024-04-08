// /interfaces/Team.ts
interface Team {
  id: number;
  placeName: any;
  goalScored: number;
  abbreviation: string;
  logo: string;
  name: string;
  clinchIndicator: string;
  conferenceAbbrev: string;
  conferenceName: string;
  divisionAbbrev: string;
  divisionName: string;
  gamesPlayed: number;
  goalAgainst: number;
  goalDifferential: number;
  goalFor: number;
  points: number;
  teamAbbrev: { default: string };
  teamName: { default: string, fr?: string };
  teamLogo: string;
}

export default Team;
