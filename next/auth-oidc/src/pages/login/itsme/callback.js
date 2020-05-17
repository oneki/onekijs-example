import { useLoginCallbackService, useOnekiRouter } from "onekijs";
import React from "react";
import { useEffect } from "react";

export default React.memo(() => {
  const [error] = useLoginCallbackService('itsme');
  const router = useOnekiRouter();

  // Redirect to login page if there is an error
  useEffect(() => {
    if (error) {
      router.push('/login');
    }
  }, [error])

  return null;

  // Example below show how to handle error directly in this page
  // if (!error) {
  //   return null;
  // }
  
  // return (
  //   <div>An error occured:
  //     <ul>
  //       <li><b>Error code</b>: {error.code}</li>
  //       <li><b>Error message</b>: {error.message}</li>
  //     </ul>
  //   </div>
  // )

});
