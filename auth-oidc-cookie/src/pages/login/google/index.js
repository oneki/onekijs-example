import { useLoginService } from "onekijs";
import React from "react";

export default React.memo(() => {
  useLoginService('google');
  return null;
});
