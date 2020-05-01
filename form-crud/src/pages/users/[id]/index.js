import { useGet, withLayout, useLocation, useParams } from "onekijs";
import React from "react";
import User from "../../../component/user";
import UsersLayout from "../../../layout/usersLayout";
import { useRouter } from "next/router";


// export async function getServerSideProps(context) {
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

const UserPage = () => {
  // call useGet to retrieve the list of users
  // const location = useLocation();
  const { id } = useParams();
  console.log("id", id);
  
  const [user, loading] = useGet(id ? `/api/users/${id}` : null);
  return (
      <User user={user} loading={loading} />
  );
  // return <div></div>
};

export default withLayout(UserPage, UsersLayout);
