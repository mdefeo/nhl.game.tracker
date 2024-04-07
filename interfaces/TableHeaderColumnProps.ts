// /interfaces/TableHeaderColumnProps.ts
import Team from './Team';
interface TableHeaderColumnProps {
  label: string;
  column: keyof Team;
  sortColumn: keyof Team | null;
  sortOrder: 'asc' | 'desc';
  handleSort: (column: keyof Team | null) => void;
}

export default TableHeaderColumnProps;