// /pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/app/layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
