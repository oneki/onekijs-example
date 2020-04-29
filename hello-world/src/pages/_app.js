import { NextApp } from "onekijs";
import React from "react";
import settings from "../settings";

const MyApp = ({Component, pageProps}) => {

  return (
    <NextApp settings={settings}>
      <div
        style={{
          backgroundColor: "#EEE",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <Component {...pageProps} />
      </div>
    </NextApp>
  );
};

export default MyApp;
