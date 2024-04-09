// /app/components/players/Skaters.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Skater } from '@/interfaces/Skaters';
import Skeleton from '../utilities/Skeleton';

interface SortState {
  column: string;
  order: 'asc' | 'desc';
}

interface SortableHeaderCellProps<T> {
  columnName: keyof T | string;
  label: string;
  sortColumn: string;
  sortOrder: 'asc' | 'desc';
  handleSort: (sortState: SortState) => void;
}


function SortableHeaderCell<T>({ columnName, label, sortColumn, sortOrder, handleSort }: SortableHeaderCellProps<T>) {
  const handleClick = () => {
    const newOrder = sortColumn === columnName && sortOrder === 'asc' ? 'desc' : 'asc';
    handleSort({ column: columnName.toString(), order: newOrder });
  };

  return (
    <th onClick={handleClick}>
      {label} {sortColumn === columnName && (sortOrder === 'asc' ? '▲' : '▼')}
    </th>
  );
}

interface Props {
  skaters: Skater[];
  sortState: SortState;
  setSortState: React.Dispatch<React.SetStateAction<SortState>>;
}

const Skaters: React.FC<Props> = ({ skaters, sortState, setSortState }) => {
  if (!skaters) {
    return <Skeleton />;
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full table-zebra-zebra">
          <thead>
            <tr>
              <th>Player</th>

              <SortableHeaderCell<Skater> columnName="positionCode" label="Position" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="gamesPlayed" label="GP" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="goals" label="G" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="assists" label="A" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="points" label="PTS" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="plusMinus" label="+/-" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="penaltyMinutes" label="PIM" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="powerPlayGoals" label="PPG" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="shorthandedGoals" label="SHG" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="gameWinningGoals" label="GWG" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <SortableHeaderCell<Skater> columnName="shots" label="S" sortColumn={sortState.column} sortOrder={sortState.order} handleSort={({ column, order }) => setSortState({ column, order })} />
              <th>TOI/G</th>
              <th>Shifts/G</th>
              <th>FO%</th>
            </tr>
          </thead>
          <tbody>
            {skaters.map((player) => (
              <tr key={player.playerId} className="hover:bg-secondary">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 mask mask-squircle">
                        <Link href={`/player/${player.playerId}`}>
                          <Image 
                            src={player.headshot} 
                            alt={`${player.firstName.default} ${player.lastName.default}`} 
                            width={48} 
                            height={48}
                            style={{ objectFit: 'cover' }}
                            unoptimized={true}
                            className="rounded-full"
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link href={`/player/${player.playerId}`}>
                        {`${player.firstName.default} ${player.lastName.default}`}
                      </Link>
                    </div>
                  </div>
                </td>
                <td>{player.positionCode}</td>
                <td>{player.gamesPlayed}</td>
                <td>{player.goals}</td>
                <td>{player.assists}</td>
                <td>{player.points}</td>
                <td>{player.plusMinus >= 0 ? `+${player.plusMinus}` : player.plusMinus}</td>
                <td>{player.penaltyMinutes}</td>
                <td>{player.powerPlayGoals}</td>
                <td>{player.shorthandedGoals}</td>
                <td>{player.gameWinningGoals}</td>
                <td>{player.shots}</td>
                <td>{(player.avgTimeOnIcePerGame / 60).toFixed(2)}</td>
                <td>{player.avgShiftsPerGame.toFixed(2)}</td>
                <td>{(player.faceoffWinPctg * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
  );
};

export default Skaters;