import { useRouter } from "next/router";
import { useGet, usePut, withLayout, useParams } from "onekijs";
import React from "react";
import UserEdit from "../../../component/user/UserEdit";
import UsersLayout from "../../../layout/usersLayout";

const EditUserPage = () => {
  // const router = useRouter();
  const { id } = useParams();

  // useGet sends a ajax GET request. Check useGet documentation for more info.
  const [user, loading] = useGet(id ? `/api/users/${id}` : null);
  const [put, submitLoading] = usePut(`/api/users/${id}`, {
    onSuccess: `/users/${id}`, // redirect to /users/:userId if no error
  });

  return (
    <UserEdit
      user={user}
      loading={loading}
      onSubmit={put}
      submitLoading={submitLoading}
    />
  );
};

export default withLayout(EditUserPage, UsersLayout);