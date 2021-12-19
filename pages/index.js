import Head from 'next/head';
import Featured from '../component/Featured';
/* import Image from 'next/image'; */
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Best pizza shop in the town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page</h1>
      <Featured/>
    </div>
  );
}
