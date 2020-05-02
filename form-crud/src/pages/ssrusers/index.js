import { useDelete, withLayout } from "onekijs";
import React, { useCallback } from "react";
import UserList from "../../component/user/UserList";
import SsrUsersLayout from "../../layout/usersLayout/SsrUsersLayout";
import { list } from '../api/users/db';
import Router from 'next/router';


export async function getServerSideProps(context) {
  const users = list();
  return {
    props: { users }, // will be passed to the page component as props
  }
}

const UsersPage = ({ users }) => {
  return (
    <UserList type="ssr" users={users} loading={false} onDelete={Router.reload} />
  );
};

export default withLayout(UsersPage, SsrUsersLayout);
