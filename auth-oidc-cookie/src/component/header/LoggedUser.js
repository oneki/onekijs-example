import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { useSecurityContext } from 'onekijs';

const LoggedUser = () => {
  const [email, emailLoading] = useSecurityContext("email");
  
  if (emailLoading) return null;

  return (
    <div className={styles.login}>
      {email && (
        <div>{email} <Link href="/logout"><a className={styles.link}>Logout</a></Link></div>
      )}
      {!email && (
        <div><Link href="/login"><a className={styles.link}>Login</a></Link></div>
      )}
    </div>
  )
}

export default LoggedUser;