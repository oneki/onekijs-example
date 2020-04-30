import React from 'react'
import styles from './Header.module.css';
import LoggedUser from './LoggedUser';
import Link from 'next/link';


export default () => {
  return (
    <div className={styles.container}>
      <Link href="/"><a className={styles.link}>Home page</a></Link>
      <Link href="/admin"><a className={styles.link}>Admin page</a></Link>
      <LoggedUser />
    </div>
  );
};

