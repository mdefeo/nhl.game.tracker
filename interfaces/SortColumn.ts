// /interfaces/SortColumn.ts
import Team from './Team';
interface SortColumn {
  column: keyof Team | '';
  order: 'asc' | 'desc';
}

export default SortColumn;