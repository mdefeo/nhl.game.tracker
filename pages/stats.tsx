// /pages/stats.tsx
import React from 'react';
import Headline from '@/app/components/Headline';
import Stats from '@/app/components/Stats';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const StatsPage: NextPageWithLayout = () => {
  return (
    <div>
      <Headline title="Stats" />
      <Stats />
    </div>
  );
};

StatsPage.getLayout = (page) => <Layout>{page}</Layout>;

export default StatsPage;
