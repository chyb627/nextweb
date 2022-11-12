import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import '../styles/index.css';
import wrapper from '../store/configureStore';

const YoungbinWeb = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>YoungbinWeb</title>
      </Head>
      <Component />
    </>
  );
};

YoungbinWeb.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(YoungbinWeb);
