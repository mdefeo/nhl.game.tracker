// pages/_app.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { AppPropsWithLayout } from '@/types';

const NHLStatTracker: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
};

export default NHLStatTracker;
