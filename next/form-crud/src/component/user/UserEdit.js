import React from 'react';
import UserForm from './UserForm';

const UserEdit = ({ user, loading, onSubmit, submitLoading }) => {
  if (loading) {
    return <div>Loading ...</div>
  }

  if (user) {
    return (
      <UserForm user={user} onSubmit={onSubmit} loading={submitLoading} />
    );
  }

  return null;
};

export default UserEdit;
