// /pages/team/[teamAbbreviation].tsx

import React from 'react';
import Team from '@/app/components/teams/Team';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';
import { useRouter } from 'next/router';

const TeamPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { teamAbbreviation } = router.query;

  return (
    <Team abbreviation={teamAbbreviation as string} />
  );
};

TeamPage.getLayout = (page) => <Layout metadata={{ title: 'Team', description: 'Team stats'}}>{page}</Layout>;

export default TeamPage;
