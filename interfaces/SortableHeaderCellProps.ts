// /interfaces/SortableHeaderCellProps.ts
import Team from './Team';

interface SortableHeaderCellProps {
  columnName: keyof Team;
  label: string;
  sortColumn: keyof Team | null;
  sortOrder: 'asc' | 'desc';
  handleSort: (column: keyof Team | null, order: 'asc' | 'desc') => void; // Update the function signature here
}

export default SortableHeaderCellProps;
