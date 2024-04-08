// /app/components/Team.tsx
import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { fetchDataFromApi } from '../helpers/api';
import SortableHeaderCell from './SortableHeaderCell';
import { Skater, TeamData } from '@/interfaces/Skaters';

interface Props {
  abbreviation: string;
}

interface SortState {
  column: keyof Skater | '';
  order: 'asc' | 'desc';
}

const Teams: React.FC<Props> = ({ abbreviation }) => {
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [sortState, setSortState] = useState<SortState>({ column: 'points', order: 'desc' });

  useEffect(() => {
    if (!abbreviation) return;

    const fetchData = async () => {
      try {
        const data: TeamData = await fetchDataFromApi(`https://api-web.nhle.com/v1/club-stats/${abbreviation}/now`);
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [abbreviation]);

  const sortedSkaters = useMemo(() => {
    if (!teamData) return [];

    return [...teamData.skaters].sort((a, b) => {
      if (sortState.column === '') return 0;

      const valueA = a[sortState.column];
      const valueB = b[sortState.column];

      return sortState.order === 'asc' ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
    });
  }, [teamData, sortState]);

  if (!teamData) {
    return( 
      <div className="flex flex-col gap-4 w-full">
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
        <div className="skeleton h-8 w-full"></div>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
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
          {sortedSkaters.map((player) => (
            <tr key={player.playerId}>
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
                        />
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link href={`/players/${player.playerId}`}>
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
  );
};

export default Teams;
