import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import WelcomeAnimation from '@/components/WelcomeAnimation/WelcomeAnimation';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

{/* <Image
  src="/vercel.svg"
  alt="Vercel Logo"
  className={styles.vercelLogo}
  width={100}
  height={24}
  priority
/> */}

export default function Home() {
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
        
      </main>
    </>
  )
}
