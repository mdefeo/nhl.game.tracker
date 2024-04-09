// /pages/player/[playerId].tsx
import React from 'react';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';
import { useRouter } from 'next/router';
import Players from '@/app/components/players/Player';

const PlayerPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { playerId } = router.query;

  return (
    <div>
      <Players playerId={playerId as string} />
    </div>
  );
};

PlayerPage.getLayout = (page) => <Layout>{page}</Layout>;

export default PlayerPage;
