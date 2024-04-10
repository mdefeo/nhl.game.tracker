// /pages/schedule.tsx
import React from 'react';
import Headline from '@/app/components/utilities/Headline';
import Schedule from '@/app/components/league/Schedule';
import Layout from '@/app/layout';
import { NextPageWithLayout } from '@/types';

const SchedulePage: NextPageWithLayout = () => {
  return (
    <>
      <Headline title="Upcoming Games" />
      <Schedule />
    </>
  );
};

SchedulePage.getLayout = (page) => <Layout metadata={{ title: 'Schedule', description: 'Upcoming game schedule'}}> {page}</Layout>;

export default SchedulePage;
