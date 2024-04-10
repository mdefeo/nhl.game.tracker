// /pages/players.tsx
import React from 'react';
import { Players } from '@/app/components/players/Players';
import Headline from '@/app/components/utilities/Headline'; // Adjust path as necessary
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const PlayersPage: NextPageWithLayout = () => {
  return (
    <>
      <Headline title="Stat Leaders" />
      <Players />
    </>
  );
};

PlayersPage.getLayout = (page) => <Layout metadata={{ title: 'Players', description: 'Player stats'}}>{page}</Layout>;

export default PlayersPage;
