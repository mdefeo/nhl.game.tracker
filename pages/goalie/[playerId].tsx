// /pages/goalie/[playerId].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Goalie from '@/app/components/players/Goalie';
import Headline from '@/app/components/utilities/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const GoaliePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { playerId } = router.query;

  return (
    <div>
      <Goalie goalieId={playerId as string} />
      <p></p>
    </div>
  );
};

GoaliePage.getLayout = (page) => <Layout>{page}</Layout>;

export default GoaliePage;
