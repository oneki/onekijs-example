import React from "react";
import { layout, useReduxSelector } from "onekijs";
import Link from "next/link";

const SiteLayout = ({ children }) => {
  const title = useReduxSelector('layout.site.title', 'Hello world App');
  const subTitle = useReduxSelector('layout.site.subTitle');
  const style = { padding: "0 5px" };
  return (
    <>
      <div
        style={{
          backgroundColor: "#EEE",
          padding: "10px",
          marginBottom: "10px"
        }}
      >
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <h3>
          <Link href="/">
            <a style={style}>Index</a>
          </Link>
          |
          <Link href="/users">
            <a style={style}>Users</a>
          </Link>
        </h3>
      </div>
      <div>{children}</div>
    </>
  );
};

export default layout(SiteLayout);
