import React from "react";
import Link from "next/link";

export default () => {
  return (
    <div>
      <p>This is very basic example. Check the files
        <ul>
          <li><b>package.json</b>: to see the dependencies</li>
          <li><b>_app.js</b>: to find how the application is bootstrapped</li>
        </ul>
      </p>
      <p>
        This simple example bootstraps:
        <ul>
          <li><b>A router</b>: Go to <Link href="/users">Users page</Link></li>
          <li><b>A Redux store</b></li>
        </ul>
      </p>
    </div>
  );
};
