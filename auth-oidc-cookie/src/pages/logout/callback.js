import { useLogoutCallbackService } from "onekijs";
import React from "react";

export default React.memo(() => {
  useLogoutCallbackService('cognito');
  return null;
});
