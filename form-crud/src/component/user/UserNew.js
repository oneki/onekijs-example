import React from 'react';
import UserForm from './UserForm';

const UserNew = ({ onSubmit, submitLoading }) => {


  return (
    <UserForm type="create" onSubmit={onSubmit} loading={submitLoading} />
  );

};

export default UserNew;
