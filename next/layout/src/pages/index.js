import React, { useEffect } from 'react'
import Head from "next/head";
import { withLayout } from 'onekijs';
import SiteLayout from '../layout/siteLayout';
import { useLayoutReducer } from '../service/layoutService';

const IndexPage = () => {
  useLayoutReducer("site", {
    "title": "Index page",
    "subTitle": "Subtitle of Index page"
  });

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
