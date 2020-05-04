import { withLayout } from "onekijs";
import React from "react";
import User from "../../../component/user";
import SsrUsersLayout from "../../../layout/usersLayout/SsrUsersLayout";
import { findById } from '../../api/users/db';


export async function getServerSideProps(context) {
  const { id } = context.params;
  const user = findById(id);
  return {
    props: { user, id }, // will be passed to the page component as props
  }
}

const UserPage = ({ user, id}) => {
  return (
      <User type="ssr" user={user} loading={false} />
  );
};

export default withLayout(UserPage, SsrUsersLayout);
