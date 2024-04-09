// /pages/schedule.tsx
import React from 'react';
import Headline from '@/app/components/Headline';
import Schedule from '@/app/components/Schedule';
import Layout from '@/app/layout';
import { NextPageWithLayout } from '@/types';

const SchedulePage: NextPageWithLayout = () => {
  return (
    <div>
      <Headline title="Upcoming Games" />
      <Schedule />
    </div>
  );
};

SchedulePage.getLayout = (page) => <Layout>{page}</Layout>;

export default SchedulePage;
