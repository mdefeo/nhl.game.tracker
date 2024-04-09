// /pages/team/[teamAbbreviation].tsx

import React from 'react';
import Team from '@/app/components/teams/Team';
import Headline from '@/app/components/utilities/Headline';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';
import { useRouter } from 'next/router';

const TeamPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { teamAbbreviation } = router.query;

  return (
    <div>
      <Team abbreviation={teamAbbreviation as string} />
    </div>
  );
};

TeamPage.getLayout = (page) => <Layout>{page}</Layout>;

export default TeamPage;
