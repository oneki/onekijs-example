import { useLogoutService } from "onekijs";
import React from "react";

export default React.memo(() => {
  useLogoutService('cognito');
  return null;
});
