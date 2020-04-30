import React, { useCallback, useState } from "react";
import Link from 'next/link';
import LinkButton from "../linkButton";

const UserList = ({ users, loading, onDelete, deleteLoading }) => {
  const [deleteId, setDeleteId] = useState(null);


  if (loading) {
    return (
      <div>Loading ...</div>
    )
  }


  if (users) {
    return (
      <>
        {deleteId && <div>POPUP HERE !!!</div>}
        <ul>
          {users.map((user) => (
            <li key={`key-${user.id}`} style={{marginTop: "15px"}}>
              <Link href="/users/[id]" as={`/users/${user.id}`}>
                <a>
                  {user.firstname} {user.name}
                </a>
              </Link>
              <LinkButton type="edit" href="/users/[id]/edit" as={`/users/${user.id}/edit`}>Edit</LinkButton>
              <LinkButton type="remove" onClick={() => onDelete(user.id)}>{deleteLoading ? "Deleting...": "Delete"}</LinkButton>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return null;
};

export default UserList;