import { usePost, useSetting } from "onekijs";
import React from "react";
import UserNew from "../../component/user/UserNew";
import MainLayout from "../../layout/mainLayout";
import UsersLayout from "../../layout/usersLayout";

export default () => {
  const [post, submitLoading] = usePost("/api/users", {
    // if the ajax POST request is successful, redirect to the /users page
    onSuccess: "/users",
  });

  return (
    <MainLayout>
      <UsersLayout>
        <UserNew onSubmit={post} submitLoading={submitLoading} />
      </UsersLayout>
    </MainLayout>
  );
};
