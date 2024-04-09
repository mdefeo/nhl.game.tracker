// /app/components/Player.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { fetchDataFromApi } from '@/app/helpers/api';
import Skeleton from './Skeleton';
import { Player, PlayerStat } from '@/interfaces/Player';
import PlayerHero from './heroes/PlayerHero';

interface Props {
  playerId: string;
}

interface SortState {
  column: keyof PlayerStat | '';
  order: 'asc' | 'desc';
}

const Players: React.FC<Props> = ({ playerId }) => {
  const [playerData, setPlayerData] = useState<Player | null>(null);
  const [sortState, setSortState] = useState<SortState>({ column: 'points', order: 'desc' });
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

  useEffect(() => {
    if (!playerId) return;

    const fetchData = async () => {
      try {
        const data: Player = await fetchDataFromApi(`https://api-web.nhle.com/v1/player/${playerId}/landing`);
        setPlayerData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [playerId]);

  const handleSort = (column: keyof PlayerStat) => {
    const isAsc = sortState.column === column && sortState.order === 'asc';
    setSortState({ column, order: isAsc ? 'desc' : 'asc' });
  };

  const sortedStats = useMemo(() => {
    if (!playerData) return [];

    const regularSeasonStats = playerData.featuredStats?.regularSeason?.subSeason;
    let statsArray: PlayerStat[] = [regularSeasonStats].filter(Boolean) as PlayerStat[];

    const seasonYear = playerData.featuredStats?.season.toString().slice(2);
    const formattedSeasonYear = `${seasonYear.slice(0, 2)}-${seasonYear.slice(4, 6)}`; 
    return statsArray.map((stat, index) => ({ season: formattedSeasonYear, ...stat }));
  }, [playerData]);

  const careerStats = useMemo(() => {
    if (!playerData) return [];

    const careerStats = playerData.careerTotals?.regularSeason;
    if (!careerStats) return [];

    return [careerStats];
  }, [playerData]);

  const parseSeasonYear = (year: number): string => {
    const shortYear = year % 100;
    const prevShortYear = shortYear === 0 ? 99 : shortYear - 1;
    return `${prevShortYear < 10 ? '0' + prevShortYear : prevShortYear}-${shortYear < 10 ? '0' + shortYear : shortYear}`;
  };

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value, 10);
    setSelectedSeason(selectedYear);
  };

  if (!playerData || !playerData.featuredStats || !playerData.featuredStats.regularSeason || !playerData.featuredStats.regularSeason.subSeason) {
    return <Skeleton />;
  }

  return (
    <>
      <PlayerHero playerData={playerData} />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Season</th>
              <th onClick={() => handleSort('gamesPlayed')}>Games Played</th>
              <th onClick={() => handleSort('goals')}>Goals</th>
              <th onClick={() => handleSort('assists')}>Assists</th>
              <th onClick={() => handleSort('points')}>Points</th>
              <th onClick={() => handleSort('plusMinus')}>+/-</th>
              <th onClick={() => handleSort('pim')}>Penalty Minutes</th>
              <th onClick={() => handleSort('gameWinningGoals')}>Game-Winning Goals</th>
              <th onClick={() => handleSort('otGoals')}>OT Goals</th>
              <th onClick={() => handleSort('shots')}>Shots</th>
              <th onClick={() => handleSort('shootingPctg')}>Shooting %</th>
              <th onClick={() => handleSort('powerPlayGoals')}>Powerplay Goals</th>
              <th onClick={() => handleSort('powerPlayPoints')}>Powerplay Points</th>
              <th onClick={() => handleSort('shorthandedGoals')}>Shorthanded Goals</th>
              <th onClick={() => handleSort('shorthandedPoints')}>Shorthanded Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedStats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.season}</td>
                <td>{stat.gamesPlayed}</td>
                <td>{stat.goals}</td>
                <td>{stat.assists}</td>
                <td>{stat.points}</td>
                <td>{stat.plusMinus >= 0 ? `+${stat.plusMinus}` : stat.plusMinus}</td>
                <td>{stat.pim}</td>
                <td>{stat.gameWinningGoals}</td>
                <td>{stat.otGoals}</td>
                <td>{stat.shots}</td>
                <td>{stat.shootingPctg.toFixed(2)}</td>
                <td>{stat.powerPlayGoals}</td>
                <td>{stat.powerPlayPoints}</td>
                <td>{stat.shorthandedGoals}</td>
                <td>{stat.shorthandedPoints}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {careerStats.map((stat, index) => (
              <tr key={index}>
                <td>Career</td>
                <td>{stat.gamesPlayed}</td>
                <td>{stat.goals}</td>
                <td>{stat.assists}</td>
                <td>{stat.points}</td>
                <td>{stat.plusMinus >= 0 ? `+${stat.plusMinus}` : stat.plusMinus}</td>
                <td>{stat.pim}</td>
                <td>{stat.gameWinningGoals}</td>
                <td>{stat.otGoals}</td>
                <td>{stat.shots}</td>
                <td>{stat.shootingPctg.toFixed(2)}</td>
                <td>{stat.powerPlayGoals}</td>
                <td>{stat.powerPlayPoints}</td>
                <td>{stat.shorthandedGoals}</td>
                <td>{stat.shorthandedPoints}</td>
              </tr>
            ))}          
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Players;
