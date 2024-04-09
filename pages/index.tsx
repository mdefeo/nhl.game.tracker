// /pages/index.tsx
import React from 'react';
import Headline from '@/app/components/utilities/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <Headline title="Home" />
      <p></p>
    </div>
  );
};

HomePage.getLayout = (page) => <Layout>{page}</Layout>;

export default HomePage;
