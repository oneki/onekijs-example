import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';


export default () => {
  return (
    <div className={styles.container}>
      <Link href="/"><a className={styles.link}>Home page</a></Link>
      <Link href="/users"><a className={styles.link}>Users page (Client Rendered)</a></Link>
      <Link href="/ssrusers"><a className={styles.link}>Users page (Server Rendered)</a></Link>
    </div>
  );
};

