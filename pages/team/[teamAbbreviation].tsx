// /pages/team/[teamAbbreviation].tsx
import Headline from '@/app/components/Headline';
import Teams from '@/app/components/Teams';
import { useRouter } from 'next/router';

const TeamPage = () => {
  const router = useRouter();
  const { teamAbbreviation } = router.query;

  return (
    <div>
      <Headline title="Team" />
      <Teams abbreviation={teamAbbreviation as string} />
    </div>
  );
};

export default TeamPage;
