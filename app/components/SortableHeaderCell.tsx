// /app/components/SortableHeaderCell.tsx
import React from 'react';
import SortableHeaderCellProps from '@/interfaces/SortableHeaderCellProps';

const SortableHeaderCell: React.FC<SortableHeaderCellProps> = ({ columnName, label, sortColumn, sortOrder, handleSort }) => {
  const handleClick = () => {
    handleSort(columnName === sortColumn ? null : columnName);
  };

  return (
    <th className="py-7 px-6 text-left w-1/8" onClick={handleClick}>
      {label} {sortColumn === columnName ? (sortOrder === 'asc' ? '▲' : '▼') : ''}
    </th>
  );
};

export default SortableHeaderCell;
