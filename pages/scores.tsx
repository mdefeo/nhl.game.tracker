// /pages/scores.tsx
import React from 'react';
import Scores from '@/app/components/league/Scores';
import Headline from '@/app/components/utilities/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const ScoresPage: NextPageWithLayout = () => {
  return (
    <> 
      <Headline title="Scores" />
      <Scores />
    </>
  );
};

ScoresPage.getLayout = (page) => <Layout metadata={{ title: 'Scores', description: 'Recent game scores'}}>{page}</Layout>;

export default ScoresPage;
