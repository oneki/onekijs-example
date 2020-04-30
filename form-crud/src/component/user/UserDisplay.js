import React from 'react';
import Link from 'next/link';

const UserDisplay = ({ user, loading }) => {
  if (loading) {
    return <div>Loading ...</div>
  }

  if (user) {
    return (
      <div>
        <h3>User details</h3>
        <p><b>Id: </b><span>{user.id}</span></p>
        <p><b>First name: </b><span>{user.firstname}</span></p>
        <p><b>Name: </b><span>{user.name}</span></p>

        <p><Link href="/users/[id]/edit" as={`/users/${user.id}/edit`}><a>Edit</a></Link></p>
      </div>
    );
  }

  return null;
};

export default UserDisplay;
