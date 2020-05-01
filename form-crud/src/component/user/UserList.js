import React, { useCallback, useState } from "react";
import Link from 'next/link';
import LinkButton from "../linkButton";

const UserList = ({ type, users, loading, onDelete }) => {

  const baseUrl = (type === 'ssr') ? '/ssrusers' : '/users';

  if (loading) {
    return (
      <div>Loading ...</div>
    )
  }


  if (users) {
    return (
      <>
        <ul>
          {users.map((user) => (
            <li key={`key-${user.id}`} style={{marginTop: "15px"}}>
              <Link href={`${baseUrl}/[id]`} as={`${baseUrl}/${user.id}`}>
                <a>
                  {user.firstname} {user.name}
                </a>
              </Link>
              <LinkButton type="edit" href={`${baseUrl}/[id]/edit`} as={`${baseUrl}/${user.id}/edit`}>Edit</LinkButton>
              <LinkButton type="remove" onClick={() => onDelete(user.id)}>Delete</LinkButton>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return null;
};

export default UserList;