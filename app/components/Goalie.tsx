// /app/components/Goalie.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { fetchDataFromApi } from '@/app/helpers/api';
import Skeleton from './Skeleton';
import { Goalie, GoalieStat } from '@/interfaces/Goalie';
import GoalieHero from './heroes/GoalieHero';

interface Props {
  goalieId: string;
}

interface SortState {
  column: keyof GoalieStat | '';
  order: 'asc' | 'desc';
}

const Goalies: React.FC<Props> = ({ goalieId }) => { 
  const [goalieData, setGoalieData] = useState<Goalie | null>(null);
  const [sortState, setSortState] = useState<SortState>({ column: 'gamesPlayed', order: 'desc' });
  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

  useEffect(() => {
    if (!goalieId) return;

    const fetchData = async () => {
      try {
        const data: Goalie = await fetchDataFromApi(`https://api-web.nhle.com/v1/player/${goalieId}/landing`);
        console.log('---data: ', data);
        setGoalieData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [goalieId]);

  const handleSort = (column: keyof GoalieStat) => {
    const isAsc = sortState.column === column && sortState.order === 'asc';
    setSortState({ column, order: isAsc ? 'desc' : 'asc' });
  };

  const sortedStats = useMemo(() => {
    if (!goalieData) return [];

    const regularSeasonStats = goalieData.featuredStats?.regularSeason?.subSeason;
    let statsArray: GoalieStat[] = [regularSeasonStats].filter(Boolean) as GoalieStat[];

    const seasonYear = goalieData.featuredStats?.season.toString().slice(2);
    const formattedSeasonYear = `${seasonYear.slice(0, 2)}-${seasonYear.slice(4, 6)}`; 
    return statsArray.map((stat, index) => ({ ...stat, season: formattedSeasonYear }));
  }, [goalieData]);


  const careerStats = useMemo(() => {
    if (!goalieData) return [];

    const careerStats = goalieData.careerTotals?.regularSeason;
    if (!careerStats) return [];

    return [careerStats];
  }, [goalieData]);

  const parseSeasonYear = (year: number): string => {
    const shortYear = year % 100;
    const prevShortYear = shortYear === 0 ? 99 : shortYear - 1;
    return `${prevShortYear < 10 ? '0' + prevShortYear : prevShortYear}-${shortYear < 10 ? '0' + shortYear : shortYear}`;
  };

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = parseInt(event.target.value, 10);
    setSelectedSeason(selectedYear);
  };

  if (!goalieData || !goalieData.featuredStats || !goalieData.featuredStats.regularSeason || !goalieData.featuredStats.regularSeason.subSeason) {
    return <Skeleton />;
  }

  return (
    <>
      <GoalieHero goalieData={goalieData} />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Season</th>
              <th onClick={() => handleSort('gamesPlayed')}>Games Played</th>
              <th onClick={() => handleSort('wins')}>Wins</th>
              <th onClick={() => handleSort('losses')}>Losses</th>
              <th onClick={() => handleSort('otLosses')}>OT Losses</th>
              <th onClick={() => handleSort('shutouts')}>Shutouts</th>
              <th onClick={() => handleSort('goalsAgainstAvg')}>Goals Against Avg</th>
              <th onClick={() => handleSort('savePctg')}>Save Percentage</th>
            </tr>
          </thead>
          <tbody>
            {sortedStats.map((stat, index) => (
              <tr key={index}>
                <td>{stat.season}</td>
                <td>{stat.gamesPlayed}</td>
                <td>{stat.wins}</td>
                <td>{stat.losses}</td>
                <td>{stat.otLosses}</td>
                <td>{stat.shutouts}</td>
                <td>{stat.goalsAgainstAvg.toFixed(2)}</td>
                <td>{(stat.savePctg * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            {careerStats.map((stat, index) => (
              <tr key={index}>
                <td>Career</td>
                <td>{stat.gamesPlayed}</td>
                <td>{stat.wins}</td>
                <td>{stat.losses}</td>
                <td>{stat.otLosses}</td>
                <td>{stat.shutouts}</td>
                <td>{stat.goalsAgainstAvg.toFixed(2)}</td>
                <td>{(stat.savePctg * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tfoot>
        </table>

      </div>
    </>
  );
};

export default Goalies;