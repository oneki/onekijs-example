import { useDelete, useGet, withLayout } from "onekijs";
import React, { useCallback } from "react";
import UserList from "../../component/user/UserList";
import UsersLayout from "../../layout/usersLayout";

const UsersPage = () => {
  // call useGet to retrieve the list of users
  const [users, loading] = useGet('/api/users');
  const [del, deleteLoading] = useDelete('/api/users/:id');

  const onDelete = useCallback((id) => {
      del({ params: {id} })
    }, [del]
  )
  
  return (
    <UserList users={users} loading={loading} onDelete={onDelete} deleteLoading={deleteLoading}/>
  );
};

export default withLayout(UsersPage, UsersLayout);
