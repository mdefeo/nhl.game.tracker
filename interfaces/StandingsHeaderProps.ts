// /interfaces/StandingsHeaderProps.ts
import Team from './Team';

interface StandingsHeaderProps {
  sortColumn: keyof Team | null;
  sortOrder: 'asc' | 'desc';
  handleSort: (column: keyof Team | null) => void;
}

export default StandingsHeaderProps;