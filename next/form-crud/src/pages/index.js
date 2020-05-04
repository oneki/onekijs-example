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
      <h1 className="text-2xl text-gray-900 font-semibold">CRUD example</h1>
      <p>
        This example shows how to create / read / update / delete a user
      </p>
    </MainLayout>
  );
}
