import React from "react";
import Link from "next/link";

const UsersLayout = ({ children }) => {
  return (
    <>
      <h4>Users section (header common all user pages) | <Link href="/users"><a>List users</a></Link> | <Link href="/users/new"><a>Add a user</a></Link></h4>
      <div>{children}</div>
      
    </>
  );
};



export default UsersLayout;
