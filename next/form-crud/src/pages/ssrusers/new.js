import { usePost, withLayout } from "onekijs";
import React from "react";
import UserNew from "../../component/user/UserNew";
import SsrUsersLayout from "../../layout/usersLayout/SsrUsersLayout";

const NewUserPage = () => {
  const [post, submitLoading] = usePost("/api/users", {
    // if the ajax POST request is successful, redirect to the /users page
    onSuccess: "/ssrusers",
  });

  return (
    <UserNew onSubmit={post} submitLoading={submitLoading} />
  );
};

export default withLayout(NewUserPage, SsrUsersLayout);
