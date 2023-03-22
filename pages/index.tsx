import React from 'react';
import Head from 'next/head';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import WelcomeReel from '@/components/Home/Video/WelcomeReel';
import TextOverlay from '@/components/Home/TextOverlay/TextOverlay';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>National Public Affairs</title>
        <meta
          name="description"
          content="NPA. Your campaign doesn't stop. Neither do we."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TextOverlay />
        <WelcomeReel width={width} height={height} />
      </main>
    </>
  );
}
