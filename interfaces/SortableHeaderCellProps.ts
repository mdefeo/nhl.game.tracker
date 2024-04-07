import Team from './Team';

interface SortableHeaderCellProps {
  columnName: keyof Team;
  label: string;
  sortColumn: keyof Team | null;
  sortOrder: 'asc' | 'desc';
  handleSort: (column: keyof Team | null) => void;
}

export default SortableHeaderCellProps;