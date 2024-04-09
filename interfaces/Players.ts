
export interface PlayerLeader {
  playerId: number;
  id: number;
  firstName: { default: string };
  lastName: { default: string; cs?: string; sk?: string };
  sweaterNumber: number;
  headshot: string;
  teamAbbrev: string;
  teamName: { default: string };
  teamLogo: string;
  position: string;
  value: number;
  points?: number;
  goals?: number;
  assists?: number;
  goalsSh?: number;
  goalsPp?: number;
}

export interface PlayerLeadersState {
  players: PlayerLeader[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
