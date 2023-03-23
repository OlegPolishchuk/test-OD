import '@/styles/globals.css';
import { ReactElement } from 'react';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

import { Layout } from '@/components';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
