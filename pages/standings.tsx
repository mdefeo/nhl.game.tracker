// /pages/standings.tsx
import Standings from '@/app/components/Standings';
import Headline from '@/app/components/Headline';

const StandingsPage = () => {
  return (
    <div>
      <Headline title="Standings" />
      <Standings />
    </div>
  );
};

export default StandingsPage;
