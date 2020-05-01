import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';


export default () => {
  return (
    <div className={styles.container}>
      TOTO
      <Link href="/"><a className={styles.link}>Home page</a></Link>
      <Link href="/users"><a className={styles.link}>Users page</a></Link>
    </div>
  );
};

