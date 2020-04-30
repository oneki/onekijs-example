import React from 'react'
import Head from "next/head";
import { secure } from 'onekijs';
import MainLayout from '../../layout/mainLayout';

const AdminPage = () =>  {
  return (
    <MainLayout>
      <Head>
        <title>Admin</title>
      </Head>
      <h3>Congratulations! You have access to admin page because you are logged in !</h3>
    </MainLayout>
  );
}

export default secure(AdminPage);