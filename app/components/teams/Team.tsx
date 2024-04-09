// /app/components/teams/Team.tsx
import React, { useEffect, useState } from 'react';
import Skaters from '../players/Skaters';
import Goalies from '../players/Goalies';
import Headline from '../utilities/Headline';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { fetchTeamData } from '@/features/team/teamSlice';
import Skeleton from '../utilities/Skeleton';

interface Props {
  abbreviation: string;
}

interface SortState {
  column: string;
  order: 'asc' | 'desc';
}

const Teams: React.FC<Props> = ({ abbreviation }) => {
  const dispatch = useAppDispatch();
  const { teamData, status, error } = useAppSelector((state) => state.team);
  
  const [sortState, setSortState] = useState<SortState>({ column: '', order: 'asc' });

  useEffect(() => {
    if (abbreviation) {
      dispatch(fetchTeamData(abbreviation));
    }
  }, [abbreviation, dispatch]);

  if (status === 'loading') return <Skeleton />;
  if (status === 'failed') return <div>Error: {error}</div>;

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
