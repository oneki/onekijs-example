import { usePut, withLayout } from "onekijs";
import React from "react";
import UserEdit from "../../../component/user/UserEdit";
import SsrUsersLayout from "../../../layout/usersLayout/SsrUsersLayout";
import { findById } from '../../api/users/db';



export async function getServerSideProps(context) {
  const { id } = context.params;
  const user = findById(id);
  return {
    props: { user, id }, // will be passed to the page component as props
  }
}

const EditUserPage = ({ user, id }) => {
  // const router = useRouter();
  const [put, submitLoading] = usePut(`/api/users/${id}`, {
    onSuccess: `/ssrusers/${id}`, // redirect to /users/:userId if no error
  });

  return (
    <UserEdit
      user={user}
      loading={false}
      onSubmit={put}
      submitLoading={submitLoading}
    />
  );
};

export default withLayout(EditUserPage, SsrUsersLayout);