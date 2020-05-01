import React from "react";
import Link from "next/link";
import MainLayout from "../mainLayout";
import { layout } from 'onekijs';

const UsersLayout = ({ children }) => {
  return (
    <>
      <h4>Client rendered Users section | <Link href="/users"><a>List users</a></Link> | <Link href="/users/new"><a>Add a user</a></Link></h4>
      <div>{children}</div>
      
    </>
  );
};


export default layout(UsersLayout, MainLayout);
