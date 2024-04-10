import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/app/layout';
import Headline from '@/app/components/utilities/Headline'; 
import { NextPageWithLayout } from '@/types';

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
      <div className="flex justify-center items-center">
        <Image src="/logo.png" alt="NHL Stat Tracker Logo" width={200} height={200} />
      </div>

      <div>
        <Headline title="NHL Stat Tracker" />
        <p className="mb-4">Welcome to the NHL Stat Tracker. This is an open source project that people are encouraged to use. Contributions are more than welcome! There is a public repository located on <Link href="https://github.com/mdefeo/nhl.game.tracker">GitHub</Link>.</p>
        <p className="mb-4">This application is built using the following:</p>
        <ul className="list-disc list-outside ml-4 mb-4">
          <li>Node.js</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Redux</li>
          <li>Tailwind</li>
          <li>daisyUI</li>
        </ul>
      </div>
    </div>
  );
};

HomePage.getLayout = (page) => <Layout metadata={{ title: 'Home', description: 'NHL Stat Tracker App'}}>{page}</Layout>;

export default HomePage;
