import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Francesco Stella | Technical Architect and Senior Web Engineer</title>
        <meta name="description" content="Technical Architect and Senior Web Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <div className={styles.thirteen}>
            <h1>Francesco Stella</h1>
            <h3>Technical Architect <br/> Senior Web Engineer</h3>
              <p>
                Visit my <a href="https://francesco.work/"><b>portfolio</b></a>
              </p>
          </div>
        </div>
      </main>
    </>
  );
}
