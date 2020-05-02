import React from 'react'
import Link from 'next/link';
import { useRouter, toRelativeUrl } from 'onekijs';

const LoginPage = () => {

  const router = useRouter();
  sessionStorage.setItem('onekijs.from', toRelativeUrl(router.previousLocation));

  return (
    <div>
      <Link href="/login/google"><a>Login with Google</a></Link> | 
      <Link href="/login/cognito"><a>Login with Cognito (Browser only)</a></Link>
    </div>
  );
}

export default LoginPage;