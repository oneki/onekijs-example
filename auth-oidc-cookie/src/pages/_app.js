import { NextApp } from "onekijs";
import React from "react";
import settings from "../settings";

const MyApp = ({Component, pageProps}) => {

  return (
    <NextApp settings={settings}>
      <Component {...pageProps} />
    </NextApp>
  );
};

export default MyApp;
