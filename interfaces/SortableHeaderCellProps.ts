// /interfaces/SortableHeaderCellProps.ts
import Team from './Team';

interface SortableHeaderCellProps {
  columnName: keyof Team;
  label: string;
  sortColumn: keyof Team | null;
  sortOrder: 'asc' | 'desc';
  handleSort: (sortParams: { column: keyof Team | null; order: 'asc' | 'desc' }) => void;
}

export default SortableHeaderCellProps;