// /app/components/Standings.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchDataFromApi } from '@/app/helpers/api';
import Team from '@/interfaces/Team';
import SortColumn from '@/interfaces/SortColumn';
import SortableHeaderCell from './SortableHeaderCell';

const Standings: React.FC = () => {
  const [standings, setStandings] = useState<Team[]>([]);
  const [conferenceFilter, setConferenceFilter] = useState<string>('All');
  const [divisionFilter, setDivisionFilter] = useState<string>('All');
  const [conferences, setConferences] = useState<string[]>([]);
  const [divisions, setDivisions] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<SortColumn | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date();
        const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        const data = await fetchDataFromApi(`standings/${formattedDate}`);
        setStandings(data.standings);

        const uniqueConferences = ['All', ...new Set<string>(data.standings.map((team: Team) => team.conferenceName))];
        setConferences(uniqueConferences);

        const uniqueDivisions = ['All', ...new Set<string>(data.standings.map((team: Team) => team.divisionName))];
        setDivisions(uniqueDivisions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleConferenceFilterChange = (value: string) => {
    setConferenceFilter(value);
    setDivisionFilter('All'); // Reset division filter to "All" when conference filter changes
  };


  const handleDivisionFilterChange = (value: string) => {
    setDivisionFilter(value);
    // Find the corresponding conference for the selected division
    const selectedDivisionTeam = standings.find(team => team.divisionName === value);
    if (selectedDivisionTeam) {
      setConferenceFilter(selectedDivisionTeam.conferenceName);
    }
  };

  const handleSort = ({ column, order }: { column: keyof Team | null; order: 'asc' | 'desc' }) => {
    setSortColumn(column);
    setSortOrder(order);
  };


  const sortedStandings = standings.slice().sort((a, b) => {
    if (sortColumn !== null) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        const aString = String(aValue);
        const bString = String(bValue);
        return sortOrder === 'asc' ? aString.localeCompare(bString) : bString.localeCompare(aString);
      }
    } else {
      return 0;
    }
  });

  const filteredStandings = sortedStandings.filter(team => {
    const conferenceFilterCondition = conferenceFilter === 'All' || team.conferenceName === conferenceFilter;
    const divisionFilterCondition = divisionFilter === 'All' || team.divisionName === divisionFilter;
    return conferenceFilterCondition && divisionFilterCondition;
  });

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center space-x-4 mb-4">
        <select
          value={conferenceFilter}
          onChange={e => handleConferenceFilterChange(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
          id="selectConference"
        >
          {conferences.map((conference, index) => (
            <option key={index} value={conference}>{conference}</option>
          ))}
        </select>
        <select
          value={divisionFilter}
          onChange={e => handleDivisionFilterChange(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded"
          id="selectDivision"
        >
          {conferenceFilter === 'All' ? divisions.map((division, index) => (
            <option key={index} value={division}>{division}</option>
          )) : ['All', ...Array.from(new Set(standings.filter(team => team.conferenceName === conferenceFilter).map(team => team.divisionName)))].map((division, index) => (
            <option key={index} value={division}>{division}</option>
          ))}
        </select>
      </div>
      <table className="w-full border-collapse table-fixed table-zebra table-pin-rows table-pin-cols">
        <thead className="bg-neutral">
          <tr>
            <SortableHeaderCell columnName="teamName" label="Team" sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
            <SortableHeaderCell columnName="gamesPlayed" label="GP" sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
            <SortableHeaderCell columnName="points" label="PTS" sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
            <SortableHeaderCell columnName="goalFor" label="GF" sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
            <SortableHeaderCell columnName="goalAgainst" label="GA" sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
            <SortableHeaderCell columnName="goalDifferential" label="DIFF" sortColumn={sortColumn} sortOrder={sortOrder} handleSort={handleSort} />
          </tr>
        </thead>
        <tbody className="text-sm text-left">
          {filteredStandings.map((team, index) => {
            let teamName = team.teamName.default;
            return (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-800">
                <td className="py-3 px-6 whitespace-nowrap">
                  <Link href={`/teams/${team.id}`}>
                    {teamName}
                  </Link>
                </td>
                <td className="p-6 whitespace-nowrap">{team.gamesPlayed}</td>
                <td className="p-6 whitespace-nowrap">{team.points}</td>
                <td className="p-6 whitespace-nowrap">{team.goalFor}</td>
                <td className="p-6 whitespace-nowrap">{team.goalAgainst}</td>
                <td className="p-6 whitespace-nowrap">{team.goalDifferential}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
