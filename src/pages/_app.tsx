import { ThemeProvider } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.css';

import { GlobalStyles } from '../styles/globals';
import { theme } from '../styles/theme';
import Head from 'next/head';

import 'reflect-metadata';

// eslint-disable-next-line
export default function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Notingg - Ganhe dinheiro com suas postagens</title>
      </Head>
      <ThemeProvider theme={theme.darkTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
