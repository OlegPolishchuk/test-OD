import React, { ReactElement } from 'react';

import Head from 'next/head';

import { Footer } from '@/components/layout/footer/Footer';
import { Header } from '@/components/layout/header/Header';

interface Props {
  children: ReactElement;
}
export const Layout = ({ children }: Props): ReactElement => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>html:</style>
      </Head>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </>
  );
};
