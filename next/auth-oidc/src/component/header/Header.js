import React from "react";
import styles from "./Header.module.css";
import LoggedUser from "./LoggedUser";
import Link from "next/link";

export default () => {
  return (
    <div>
      <div>
        <div className="max-w-3xl mx-auto px-8">
          <nav>
            <div className="py-4 flex-shrink-0 content-between flex items-center">
              <Link href="/">
                <img
                  className="h-8 w-8 cursor-pointer"
                  src="/logo.svg"
                  alt=""
                />
              </Link>
              <Link href="/">
                <a className="ml-8 font-medium text-gray-900">Home</a>
              </Link>
              <Link href="/admin">
                <a className="ml-8 font-medium text-gray-900">Admin</a>
              </Link>
              <LoggedUser />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};
