import { useGet, usePut } from "onekijs";
import React from "react";
import UserEdit from "../../../component/user/UserEdit";
import { useRouter } from "next/router";
import MainLayout from "../../../layout/mainLayout";
import UsersLayout from "../../../layout/usersLayout";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  // useGet sends a ajax GET request. Check useGet documentation for more info.
  const [user, loading] = useGet(`/api/users/${id}`);
  const [put, submitLoading] = usePut(`/api/users/${id}`, {
    onSuccess: `/users/${id}`, // redirect to /users/:userId if no error
  });

  return (
    <MainLayout>
      <UsersLayout>
        <UserEdit
          user={user}
          loading={loading}
          onSubmit={put}
          submitLoading={submitLoading}
        />
      </UsersLayout>
    </MainLayout>
  );
};
