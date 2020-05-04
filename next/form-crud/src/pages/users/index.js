import { useDelete, useGet, withLayout } from "onekijs";
import React, { useCallback } from "react";
import UserList from "../../component/user/UserList";
import UsersLayout from "../../layout/usersLayout";

const UsersPage = () => {
  // call useGet to retrieve the list of users
  const [users, loading, refresh] = useGet('/api/users');

  return (
    <UserList users={users} loading={loading} onDelete={refresh} />
  );
};

export default withLayout(UsersPage, UsersLayout);
