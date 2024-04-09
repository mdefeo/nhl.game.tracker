// /pages/scores.tsx
import React from 'react';
import Scores from '@/app/components/Scores';
import Headline from '@/app/components/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const ScoresPage: NextPageWithLayout = () => {
  return (
    <div>
      <Headline title="Scores" />
      <Scores />
    </div>
  );
};

ScoresPage.getLayout = (page) => <Layout>{page}</Layout>;

export default ScoresPage;
