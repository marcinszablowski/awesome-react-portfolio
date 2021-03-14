import React from 'react';
import axios from 'axios';
import Link from 'next/link';

import BaseLayout from "../components/layouts/BaseLayout";

class Portfolios extends React.Component {
  //Fetch data to initial props using Axios
  //💡When getInitialProps is called id _app.js this getInitialProps is not called
  static async getInitialProps() {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = await res.data;
      return {posts: data};
    } catch {
      console.error("Could not fetch the data.");
    }
  };

  render() {
    const postsData = this.props.posts;
    return (
      <BaseLayout>
        <h1>Portfolios</h1>
        <ul>
          {postsData.map(post => (
            <li
              key={post.id}
              style={{'fontSize': '20px'}}
            >
              <Link as={`/portfolios/${post.id}`} href={`/portfolios/[id]`}>
                <a>
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </BaseLayout>
    );
  }
};

export default Portfolios;