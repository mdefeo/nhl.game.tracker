// /interfaces/StandingsProps.ts
import SortColumn from './SortColumn';

interface StandingsProps {
  sortColumn: SortColumn | null;
  sortOrder: 'asc' | 'desc';
  handleSort: (column: SortColumn | null) => void;
}

export default StandingsProps;
