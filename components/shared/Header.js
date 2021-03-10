import React, {Component} from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/portfolios">
          <a className={styles.link}>Portfolios</a>
        </Link>
        <Link href="/blogs">
          <a className={styles.link}>Blogs</a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/cv">
          <a className={styles.link}>CV</a>
        </Link>
      </div>
    );
  }
}

export default Header;