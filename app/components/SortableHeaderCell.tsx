// /app/components/SortableHeaderCell.tsx
import React from 'react';

interface SortableHeaderCellProps<T> {
  columnName: keyof T | '';
  label: string;
  sortColumn: keyof T | '';
  sortOrder: 'asc' | 'desc';
  handleSort: (sortParams: { column: keyof T | ''; order: 'asc' | 'desc' }) => void;
}

function SortableHeaderCell<T>({ columnName, label, sortColumn, sortOrder, handleSort }: SortableHeaderCellProps<T>) {
  const handleClick = () => {
    const newSortOrder = sortColumn === columnName && sortOrder === 'asc' ? 'desc' : 'asc';
    handleSort({ column: columnName, order: newSortOrder });
  };

  return (
    <th className="cursor-pointer py-7 px-6 text-left" onClick={handleClick}>
      {label} {sortColumn === columnName && (
        <span style={{ fontSize: '10px', marginLeft: '4px' }}>
          {sortOrder === 'asc' ? '▲' : '▼'}
        </span>
      )}
    </th>
  );
}

export default SortableHeaderCell;
