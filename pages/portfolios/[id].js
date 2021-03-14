import React, {Component} from 'react';
import axios from "axios";
import {withRouter} from "next/router";

import BaseLayout from "../../components/layouts/BaseLayout";

class Portfolio extends Component {

  static async getInitialProps({query}) {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      const data = await res.data;
      return {post: data}
    } catch(e) {
      console.error(`Could not fetch the data. ${e}`);
    }
  }

  render() {
    const { post } = this.props;

    return (
      <BaseLayout>
        <h1>Portfolio Page</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);