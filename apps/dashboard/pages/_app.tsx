import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { Button } from '@ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to dashboard!</title>
      </Head>
      <main className="appp">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
