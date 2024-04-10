// /pages/index.tsx
import React from 'react';
import Link from 'next/link';
import Layout from '@/app/layout'; 
import { NextPageWithLayout } from '@/types';

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <p className="mb-4 mt-10">Welcome to the NHL Stat Tracker. This is an open source project that people are encouraged to use. Contributions are more than welcome! There is a public repository located on <Link href="https://github.com/mdefeo/nhl.game.tracker" >GitHub</Link>.</p>
      <p className="mb-4">This application is built using the following:</p>
      <ul className="list-disc list-outside ml-4">
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Redux</li>
        <li>Tailwind</li>
        <li>daisyUI</li>
      </ul>
    </>
  );
};

HomePage.getLayout = (page) => <Layout metadata={{ title: 'Home', description: 'NHL Stat Tracker App'}}>{page}</Layout>;

export default HomePage;
