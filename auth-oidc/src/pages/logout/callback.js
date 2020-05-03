import { useLogoutCallbackService } from "onekijs";
import React from "react";

export default React.memo(() => {
  useLogoutCallbackService('google');
  return null;
});
