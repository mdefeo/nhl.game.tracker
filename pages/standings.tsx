// /pages/standings.tsx
import React from 'react';
import Standings from '@/app/components/league/Standings';
import Headline from '@/app/components/utilities/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const StandingsPage: NextPageWithLayout = () => {
  return (
    <>
      <Headline title="Standings" />
      <Standings />
    </>
  );
};

StandingsPage.getLayout = (page) => <Layout metadata={{ title: 'Standings', description: 'League standings'}}>{page}</Layout>;

export default StandingsPage;
