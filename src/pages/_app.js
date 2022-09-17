import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const YoungbinWeb = ({ Component }) => {
  return (
    <>
      <Head>
        <title>YoungbinWeb</title>
      </Head>
      <Component />
    </>
  );
};

YoungbinWeb.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default YoungbinWeb;
