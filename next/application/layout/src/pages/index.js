import React from 'react'
import Head from "next/head";
import { withLayout } from 'onekijs';
import SiteLayout from '../layout/siteLayout';

const IndexPage = () => {
  return (
    <div>
      <p>This example shows how to use a common layout in several pages.</p>
      <p>Please note that the layout is not unmount/mount during a transition between pages, so it keeps its state</p>  
    </div>
  );
}

export default withLayout(IndexPage, SiteLayout);
