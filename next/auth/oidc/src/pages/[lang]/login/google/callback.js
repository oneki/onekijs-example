import { useLoginCallbackService } from "onekijs";
import React from "react";

export default React.memo(() => {
  useLoginCallbackService('google');
  return null;
});
