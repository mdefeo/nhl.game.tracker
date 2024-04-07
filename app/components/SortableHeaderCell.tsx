// /app/components/SortableHeaderCell.tsx
import React from 'react';
import SortableHeaderCellProps from '@/interfaces/SortableHeaderCellProps';

const SortableHeaderCell: React.FC<SortableHeaderCellProps> = ({ columnName, label, sortColumn, sortOrder, handleSort }) => {
  const handleClick = () => {
    const newSortOrder = sortColumn === columnName && sortOrder === 'asc' ? 'desc' : 'asc';
    handleSort({ column: columnName, order: newSortOrder });
  };

  return (
    <th className="py-7 px-6 text-left w-1/8" onClick={handleClick}>
      {label} {sortColumn === columnName && (
        <span style={{ fontSize: '10px', marginLeft: '4px' }}>
          {sortOrder === 'asc' ? '▲' : '▼'}
        </span>
      )}
    </th>
  );
};

export default SortableHeaderCell;
