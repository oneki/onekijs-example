import { useGet } from "onekijs";
import React from "react";
import User from "../../../component/user";
import MainLayout from "../../../layout/mainLayout/MainLayout";
import UsersLayout from "../../../layout/usersLayout";
import { useRouter } from "next/router";

export default () => {
  // call useGet to retrieve the list of users
  const router = useRouter();
  const { id } = router.query;
  const [user, loading] = useGet(`/api/users/${id}`);

  return (
    <MainLayout>
      <UsersLayout>
        <User user={user} loading={loading} />
      </UsersLayout>
    </MainLayout>
  );
};
