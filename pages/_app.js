import React from 'react';
import '../styles/globals.css';
import Countries from '../src/Countries/Countries';

function MyApp({ pageProps }) {
  return <Countries {...pageProps} />;
}

export default MyApp;
