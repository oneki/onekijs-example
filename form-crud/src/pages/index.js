import React from 'react'
import Head from "next/head";
import { useSetting } from 'onekijs';
import MainLayout from '../layout/mainLayout';

export default function Main() {
  const appName = useSetting('appName');
  const welcomeMsg = useSetting('welcomeMsg');
  return (
    <MainLayout>
      <Head>
        <title>{appName}: Index</title>
      </Head>
      <div>{welcomeMsg}</div>
    </MainLayout>
  );
}
