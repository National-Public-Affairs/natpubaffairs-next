/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
