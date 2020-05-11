import Head from "next/head";
import { useDynamicReducer, withLayout } from 'onekijs';
import React from 'react';
import SiteLayout from '../layout/siteLayout';

const IndexPage = () => {
  useDynamicReducer("layout.site", {
    "title": "Index page",
    "subTitle": "Subtitle of Index page"
  })

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
