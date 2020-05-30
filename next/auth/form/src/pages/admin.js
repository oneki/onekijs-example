import { withLayout, secure } from 'onekijs';
import React from 'react';
import MainLayout from '../layout/mainLayout/MainLayout';

const AdminPage = () => {
  return (
    <div>This is the (protected) admin page</div>
  );
}

export default secure(withLayout(AdminPage, MainLayout));
