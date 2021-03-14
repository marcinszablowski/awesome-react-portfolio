import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    return <Component {...pageProps} />
  }
}

export default MyApp
