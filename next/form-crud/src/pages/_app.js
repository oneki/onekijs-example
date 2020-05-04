import { NextApp } from "onekijs";
import React from "react";
import settings from "../settings";
import '../css/tailwind.css';

const MyApp = (props) => {
  return (
    <NextApp {...props} settings={settings} />
  );
};

export default MyApp;
