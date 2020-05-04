import { useRouter } from "next/router";
import { useGet, withLayout } from "onekijs";
import React from "react";
import User from "../../../component/user";
import UsersLayout from "../../../layout/usersLayout";


const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const [user, loading] = useGet(id ? `/api/users/${id}` : null);
  return (
      <User user={user} loading={loading} />
  );
};

export default withLayout(UserPage, UsersLayout);
