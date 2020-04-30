import { useGet } from "onekijs";
import React from "react";
import MainLayout from "../../layout/mainLayout";
import UsersLayout from "../../layout/usersLayout";
import UserList from "../../component/user/UserList";

export default () => {
  // call useGet to retrieve the list of users
  const [users, loading] = useGet('/api/users');

  // Display a loading indicator while the request is pending
  if (loading) return <div>Loading ...</div>;
  
  return (
    <MainLayout>
      <UsersLayout>
        <UserList users={users} loading={loading} />
      </UsersLayout>
    </MainLayout>
  );
};
