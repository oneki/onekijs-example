import React from "react";
import Link from "next/link";

const UserDisplay = ({ user, loading, type }) => {
  const baseUrl = (type === 'ssr') ? '/ssrusers' : '/users';

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (user) {
    return (
      <div>
        <div className="pt-6 pb-8 sm:pt-8">
          <p className="text-xl text-gray-700">User details</p>
          <div className="mt-6">
            <div className="flex">
              <div className="w-1/4 bg-gray-200 h-8 text-right pr-2 font-bold">
                Id
              </div>
              <div className="w-3/4  h-8 ml-2">{user.id}</div>
            </div>
            <div className="flex">
              <div className="w-1/4 bg-gray-200 h-8 text-right pr-2 font-bold">
                Name
              </div>
              <div className="w-3/4  h-8 ml-2">{user.name}</div>
            </div>
            <div className="flex">
              <div className="w-1/4 bg-gray-200 h-8 text-right pr-2 font-bold">
                First name
              </div>
              <div className="w-3/4  h-8 ml-2">{user.firstname}</div>
            </div>
            <div className="border-t-2 border-gray-100 px-0 py-5 flex justify-end mt-5">
              <Link href={`${baseUrl}/[id]/edit`} as={`${baseUrl}/${user.id}/edit`}>
                <button
                  type="button"
                  className="ml-4 px-6 py-3 leading-none font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900"
                >
                  Edit
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default UserDisplay;

/*<div>
        <h3>User details</h3>
        <p><b>Id: </b><span>{user.id}</span></p>
        <p><b>First name: </b><span>{user.firstname}</span></p>
        <p><b>Name: </b><span>{user.name}</span></p>

        <p><Link href="/users/[id]/edit" as={`/users/${user.id}/edit`}><a>Edit</a></Link></p>
      </div>*/
