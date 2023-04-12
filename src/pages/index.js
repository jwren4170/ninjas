import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Ninja List &nbsp;| &nbsp;Home</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          laboriosam hic qui ullam rem tempore! Qui, veritatis praesentium.
          Voluptatum natus quae dolore eveniet in dignissimos delectus assumenda
          veritatis maiores distinctio.
        </p>
        <br />
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          laboriosam hic qui ullam rem tempore! Qui, veritatis praesentium.
          Voluptatum natus quae dolore eveniet in dignissimos delectus assumenda
          veritatis maiores distinctio.
        </p>
        <Link className={styles.btn} href='/ninjas'>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}