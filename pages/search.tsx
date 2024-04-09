// /pages/stats.tsx
import React from 'react';
import Search from '@/app/components/Search';
import Headline from '@/app/components/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const SearchPage: NextPageWithLayout = () => {
  return (
    <div>
      <Headline title="Stats" />
      <Search />
    </div>
  );
};

SearchPage.getLayout = (page) => <Layout>{page}</Layout>;

export default SearchPage;
