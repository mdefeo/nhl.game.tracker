// /pages/players.tsx
import Headline from '@/app/components/Headline';
import Players from '@/app/components/Players';
import { useRouter } from 'next/router';

const PlayersPage = () => {
  const router = useRouter();
  const { playerId } = router.query;

  return (
    <div>
      <Headline title="Players" />
      <Players playerId={playerId as string} />
    </div>
  );
};

export default PlayersPage;
