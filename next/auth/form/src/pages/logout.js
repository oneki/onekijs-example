import React from 'react'
import { useLogoutService } from 'onekijs';


export default React.memo(() => {
  useLogoutService();
  return null;
});