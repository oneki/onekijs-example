import Link from 'next/link';
import React from 'react';

export default () => {
  return (
    <div>
      <div>
        <div className="max-w-3xl mx-auto px-8">
          <nav>
            <div className="py-4 flex-shrink-0 flex items-center">
              <Link href="/">
                <img className="h-8 w-8 cursor-pointer" src="/logo.svg" alt="" />
              </Link>
              <Link href="/">
                <a className="ml-8 font-medium text-gray-900">Home</a>
              </Link>
              <Link href="/users">
                <a className="ml-8 font-medium text-gray-900">
                  Users (client rendered)
                </a>
              </Link>
              <Link href="/ssrusers">
                <a className="ml-8 font-medium text-gray-900">
                  Users (server rendered)
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

