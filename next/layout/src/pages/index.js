import React from 'react'
import Head from "next/head";
import { withLayout } from 'onekijs';
import SiteLayout from '../layout/siteLayout';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <div>This is the index page {null}</div>
    </>
  );
}

export default withLayout(IndexPage, SiteLayout);
