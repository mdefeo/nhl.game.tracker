// /pages/standings.tsx
import React from 'react';
import Standings from '@/app/components/Standings';
import Headline from '@/app/components/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const StandingsPage: NextPageWithLayout = () => {
  return (
    <div>
      <Headline title="Standings" />
      <Standings />
    </div>
  );
};

StandingsPage.getLayout = (page) => <Layout>{page}</Layout>;

export default StandingsPage;
