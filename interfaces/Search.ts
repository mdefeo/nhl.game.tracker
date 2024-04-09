// interfaces/Search.ts
export interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  type: 'skater' | 'goalie'; 
  logoUrl: string;
  headshot: string;
}

export interface Team {
  id: number;
  name: string;
  logoUrl: string;
  type: 'team';
  position: 'team';
}

export type SearchResult = Player | Team;
