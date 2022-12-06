import React from 'react';
import App, { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import '../styles/index.css';
import wrapper from '../store/configureStore';

const YoungbinWeb = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>YoungbinWeb</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(YoungbinWeb);
