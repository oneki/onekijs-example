import React from 'react';
import styles from './LinkButton.module.css';
import Link from 'next/link';

export default ({ type, href, as, onClick, children }) => {
  if (onClick) {
    return <a className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</a>;
  }
  
  return (
    <Link href={href} as={as}>
      <a className={`${styles.btn} ${styles[type]}`}>{children}</a>
    </Link>
  )
}