import React from 'react'
import Head from "next/head";
import { secure } from 'onekijs';
import MainLayout from '../../layout/mainLayout';
import { withLayout } from 'onekijs';

const AdminPage = () =>  {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
      <h3>Congratulations! You have access to admin page because you are logged in !</h3>
    </>
  );
}

// export default secure(AdminPage);

export default secure(withLayout(AdminPage, MainLayout));