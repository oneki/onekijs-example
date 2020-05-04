import React from "react";
import { layout } from "onekijs";
import Link from "next/link";

const SiteLayout = ({ children }) => {
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
        <h1>Hello world App</h1>
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
