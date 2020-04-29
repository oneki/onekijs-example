import React from 'react'
import Head from "next/head";
import { useSetting } from 'onekijs';

export default function Main() {
  const appName = useSetting('appName');
  return (
    <>
      <Head>
        <title>{appName}: Index</title>
      </Head>
      <div>Hello World !</div>
    </>
  );
}
