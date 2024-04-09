// /pages/player/[playerId].tsx
import React from 'react';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';
import { useRouter } from 'next/router';
import Players from '@/app/components/Player';
import Headline from '@/app/components/Headline';

const PlayerPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { playerId } = router.query;

  return (
    <div>
      <Headline title="Player" />
      <Players playerId={playerId as string} />
    </div>
  );
};

PlayerPage.getLayout = (page) => <Layout>{page}</Layout>;

export default PlayerPage;
