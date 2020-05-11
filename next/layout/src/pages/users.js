import React from 'react'
import Head from "next/head";
import { withLayout } from 'onekijs';
import SiteLayout from '../layout/siteLayout';
import { useLayoutReducer } from '../service/layoutService';

const UsersPage = () => {
  useLayoutReducer("site", {
    "title": "Users page",
    "subTitle": "Subtitle of Users page"
  });  
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div>This is the users page</div>
    </>
  );
}

export default withLayout(UsersPage, SiteLayout);
