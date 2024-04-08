// /app/components/Standings.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchDataFromApi } from '@/app/helpers/api';
import SortableHeaderCell from './SortableHeaderCell';
import Sekeleton from './Skeleton';
import Team from '@/interfaces/Team';
import SortColumn from '@/interfaces/SortColumn';

const Standings: React.FC = () => {
  const [standings, setStandings] = useState<Team[]>([]);
  const [conferenceFilter, setConferenceFilter] = useState<string>('All');
  const [divisionFilter, setDivisionFilter] = useState<string>('All');
  const [conferences, setConferences] = useState<string[]>([]);
  const [divisions, setDivisions] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<SortColumn>({ column: '', order: 'asc' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromApi('https://api-web.nhle.com/v1/standings/now');
        console.log('data: ', data);
        setStandings(data.standings);

        const uniqueConferences = ['All', ...new Set(data.standings.map((team: Team) => team.conferenceName))] as string[];
        setConferences(uniqueConferences);

        const uniqueDivisions = ['All', ...new Set(data.standings.map((team: Team) => team.divisionName))] as string[];
        setDivisions(uniqueDivisions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleSort = (sortParams: { column: keyof Team | ''; order: 'asc' | 'desc' }) => {
    setSortColumn(sortParams);
  };


  const sortedAndFilteredStandings = standings
    .filter(team => conferenceFilter === 'All' || team.conferenceName === conferenceFilter)
    .filter(team => divisionFilter === 'All' || team.divisionName === divisionFilter)
    .sort((a, b) => {
      if (!sortColumn.column) return 0;
      const valueA = a[sortColumn.column];
      const valueB = b[sortColumn.column];
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortColumn.order === 'asc' ? valueA - valueB : valueB - valueA;
      }
      return sortColumn.order === 'asc' ? String(valueA).localeCompare(String(valueB)) : String(valueB).localeCompare(String(valueA));
    });

  if (!standings.length) {
    return <Sekeleton />
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse table-auto">
        <thead>
          <tr>
            <th>Team</th>
            <SortableHeaderCell<Team> columnName="gamesPlayed" label="GP" sortColumn={sortColumn.column} sortOrder={sortColumn.order} handleSort={handleSort} />
            <SortableHeaderCell<Team> columnName="points" label="PTS" sortColumn={sortColumn.column} sortOrder={sortColumn.order} handleSort={handleSort} />
            <SortableHeaderCell<Team> columnName="goalFor" label="GF" sortColumn={sortColumn.column} sortOrder={sortColumn.order} handleSort={handleSort} />
            <SortableHeaderCell<Team> columnName="goalAgainst" label="GA" sortColumn={sortColumn.column} sortOrder={sortColumn.order} handleSort={handleSort} />
            <SortableHeaderCell<Team> columnName="goalDifferential" label="DIFF" sortColumn={sortColumn.column} sortOrder={sortColumn.order} handleSort={handleSort} />
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredStandings.map((team, index) => (
            <tr key={index} className="hover:bg-secondary">
              <td className="py-2 px-4">
                <div className="flex items-center">
                  <Link href={`/team/${team.teamAbbrev.default}`} className='flex items-center'>
                    <Image src={team.teamLogo} alt={team.teamName.default} width={32} height={32} unoptimized />
                  </Link>
                  <Link href={`/team/${team.teamAbbrev.default}`}>
                    <span className="ml-2">{team.teamName.default}</span>
                  </Link>
                </div>
              </td>
              <td>{team.gamesPlayed}</td>
              <td>{team.points}</td>
              <td>{team.goalFor}</td>
              <td>{team.goalAgainst}</td>
              <td>{team.goalDifferential}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
