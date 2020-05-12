import React from "react";
import { layout, useI18nService } from "onekijs";
import Link from "next/link";

const SiteLayout = ({ children }) => {
  const style = { padding: "0 5px" };
  const i18nService = useI18nService();
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
        <h4><button onClick={() => i18nService.changeLocale('en')}>en</button> | <button onClick={() => i18nService.changeLocale('fr')}>fr</button></h4>
      </div>
      <div>{children}</div>
    </>
  );
};

export default layout(SiteLayout);
