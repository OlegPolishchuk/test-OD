import '@/styles/globals.css';
import { ReactElement } from 'react';

import type { AppProps } from 'next/app';

import { Layout } from '@/components';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
