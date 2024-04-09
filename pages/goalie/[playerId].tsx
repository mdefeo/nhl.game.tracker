// /pages/goalie/[playerId].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Goalie from '@/app/components/Goalie';
import Headline from '@/app/components/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const GoaliePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { playerId } = router.query;

  return (
    <div>
      <Headline title="Goalie" />
      <Goalie goalieId={playerId as string} />
      <p></p>
    </div>
  );
};

GoaliePage.getLayout = (page) => <Layout>{page}</Layout>;

export default GoaliePage;
