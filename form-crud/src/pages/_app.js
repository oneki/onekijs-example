import { NextApp } from "onekijs";
import React from "react";
import settings from "../settings";

const MyApp = (props) => {
  return (
    <NextApp {...props} settings={settings} />
  );
};

export default MyApp;
