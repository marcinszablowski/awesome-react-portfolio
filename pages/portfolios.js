import React from 'react';
import axios from 'axios';

import BaseLayout from "../components/layouts/BaseLayout";

class Portfolios extends React.Component {
  //Fetch data to initial props using Axios
  static async getInitialProps() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = await res.data;

    return {posts: data};
  };

  render() {
    const postsData = this.props.posts;
    return (
      <BaseLayout>
        <h1>Portfolios</h1>
        <ul>
          {postsData.map(post => (
            <li key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </BaseLayout>
    );
  }
};

export default Portfolios;