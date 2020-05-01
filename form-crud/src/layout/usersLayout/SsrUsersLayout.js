import React from "react";
import Link from "next/link";
import MainLayout from "../mainLayout";
import { layout } from 'onekijs';

const SsrUsersLayout = ({ children }) => {
  return (
    <>
      <h4>Server Side Rendered Users section | <Link href="/ssrusers"><a>List users</a></Link> | <Link href="/ssrusers/new"><a>Add a user</a></Link></h4>
      <div>{children}</div>
      
    </>
  );
};


export default layout(SsrUsersLayout, MainLayout);
