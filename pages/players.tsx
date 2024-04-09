// /pages/players.tsx
import React from 'react';
import { Players } from '@/app/components/players/Players';
import Headline from '@/app/components/utilities/Headline'; // Adjust path as necessary
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const PlayersPage: NextPageWithLayout = () => {
  return (
    <div>
      <Headline title="Stat Leaders" />
      <Players />
    </div>
  );
};

PlayersPage.getLayout = (page) => <Layout>{page}</Layout>;

export default PlayersPage;
