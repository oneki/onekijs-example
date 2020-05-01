import { useDelete, withLayout } from "onekijs";
import React, { useCallback } from "react";
import UserList from "../../component/user/UserList";
import SsrUsersLayout from "../../layout/usersLayout/SsrUsersLayout";
import { list } from '../api/users/db';


export async function getServerSideProps(context) {
  const users = list();
  return {
    props: { users }, // will be passed to the page component as props
  }
}

const UsersPage = ({ users }) => {
  // call useGet to retrieve the list of users
  const [del, deleteLoading] = useDelete('/api/users/:id');

  const onDelete = useCallback((id) => {
      del({ params: {id} })
    }, [del]
  )
  
  return (
    <UserList type="ssr" users={users} loading={false} onDelete={onDelete} />
  );
};

export default withLayout(UsersPage, SsrUsersLayout);
