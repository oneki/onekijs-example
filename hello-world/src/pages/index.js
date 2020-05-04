import React from 'react'
import Head from "next/head";
import { useSetting, withLayout } from 'onekijs';
import MainLayout from '../layout/MainLayout';

const IndexPage = () => {
  const appName = useSetting('appName');
  const welcomeMsg = useSetting('welcomeMsg');
  return (
    <>
      <Head>
        <title>{appName}: Index</title>
      </Head>
      <div>{welcomeMsg}</div>
    </>
  );
}

export default withLayout(IndexPage, MainLayout);
