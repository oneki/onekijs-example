import React from 'react'
import Head from "next/head";
import { withLayout } from 'onekijs';
import MainLayout from '../layout/mainLayout/MainLayout';

const IndexPage = () => {
  return (
    <div>
      <p>This example shows a form login page.</p>
      <p>The admin page is protected and you must be logged in to display it</p>  
    </div>
  );
}

export default withLayout(IndexPage, MainLayout);
