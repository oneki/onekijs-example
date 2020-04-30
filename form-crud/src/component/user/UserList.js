import React from "react";
import Link from 'next/link';

const UserList = ({ users, loading }) => {
  if (loading) {
    return (
      <div>Loading ...</div>
    )
  }

  if (users) {
    return (
      <ul>
        {users.map((user) => (
          <li key={`key-${user.id}`}>
            <Link href="/users/[id]" as={`/users/${user.id}`}>
              <a>
                {user.firstname} {user.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return null;
};

export default UserList;