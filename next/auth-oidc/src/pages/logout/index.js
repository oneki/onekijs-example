import { useLogoutService } from "onekijs";
import React from "react";

export default React.memo(() => {
  useLogoutService();
  return null;
});
