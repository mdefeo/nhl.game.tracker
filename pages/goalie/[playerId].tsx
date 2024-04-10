// /pages/goalie/[playerId].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Goalie from '@/app/components/players/Goalie';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const GoaliePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { playerId } = router.query;

  return (
    <Goalie goalieId={playerId as string} />
  );
};

GoaliePage.getLayout = (page) => <Layout metadata={{ title: 'Goalie', description: 'Goalie stats'}}>{page}</Layout>;

export default GoaliePage;
