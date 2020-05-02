import Link from 'next/link';
import React from "react";
import { FiEdit, FiEye } from 'react-icons/fi';
import DeleteButton from "../deleteButton";

const UserList = ({ type, users, loading, onDelete }) => {

  const baseUrl = (type === 'ssr') ? '/ssrusers' : '/users';

  if (loading) {
    return (
      <div>Loading ...</div>
    )
  }

  if (users) {
    return (
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-2/5 px-4 py-2">First name</th>
            <th className="w-2/5 px-4 py-2">Name</th>
            <th className="w-1/5 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={`key-${user.id}`} className={index%2 === 0 ? '' : 'bg-gray-100'}>
              <td className="border px-4 py-2"><Link href={`${baseUrl}/[id]`} as={`${baseUrl}/${user.id}`}><a>{user.firstname}</a></Link></td>
              <td className="border px-4 py-2"><Link href={`${baseUrl}/[id]`} as={`${baseUrl}/${user.id}`}><a>{user.name}</a></Link></td>
              <td className="border px-4 py-2">
                <Link href={`${baseUrl}/[id]`} as={`${baseUrl}/${user.id}`}><a><FiEye className="mr-3 inline-block text-green-600"/></a></Link>
                <Link href={`${baseUrl}/[id]/edit`} as={`${baseUrl}/${user.id}/edit`}><a><FiEdit className="mr-3 inline-block text-blue-600"/></a></Link>
                <DeleteButton className="mr-3 inline-block text-red-600 cursor-pointer" url={`/api/users/${user.id}`} onSuccess={onDelete}/>               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return null;
};

export default UserList;