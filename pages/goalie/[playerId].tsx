// /pages/goalie/[playerId].tsx
import Headline from '@/app/components/Headline';
import { useRouter } from 'next/router';
import Goalie from '@/app/components/Goalie';

const GoaliePage = () => {
  const router = useRouter();
  const { playerId } = router.query;

  return (
    <div>
      <Headline title="Goalie" />
      <Goalie goalieId={playerId as string} />
    </div>
  );
};

export default GoaliePage;
