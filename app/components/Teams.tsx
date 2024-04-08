// /app/components/Teams.tsx
import React, { useEffect, useState } from 'react';
import Skaters from './Skaters';
import Goalies from './Goalies';
import Headline from './Headline';
import { fetchDataFromApi } from '../helpers/api';
import { TeamData } from '@/interfaces/TeamData';

interface Props {
  abbreviation: string;
}

interface SortState {
  column: string;
  order: 'asc' | 'desc';
}

const Teams: React.FC<Props> = ({ abbreviation }) => {
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [sortState, setSortState] = useState<SortState>({ column: '', order: 'asc' });

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const data: TeamData = await fetchDataFromApi(`https://api-web.nhle.com/v1/club-stats/${abbreviation}/now`);
        setTeamData(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    if (abbreviation) {
      fetchTeamData();
    }
  }, [abbreviation]);

  return (
    <>
      {teamData && (
        <>
          <Headline title="Skaters" />
          <Skaters skaters={teamData.skaters} sortState={sortState} setSortState={setSortState} />
          <Headline title="Goalies" />
          <Goalies goalies={teamData.goalies} />
        </>
      )}
    </>
  );
};

export default Teams;
