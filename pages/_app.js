import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

import '../styles/main.scss';

//Component responsible for rendering all the other pages
class MyApp extends React.Component {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {pageProps};
  }

  render() {
    const {Component, pageProps} = this.props;
    return (
      <>
        <Head>
          <title>Next Portfolio</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
