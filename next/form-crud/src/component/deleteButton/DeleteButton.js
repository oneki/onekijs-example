import { useDelete } from 'onekijs';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

export default ({ url, onSuccess, className }) => {

  const [del, loading] = useDelete(url, { onSuccess });
  
  return (
    <FiTrash2 className={className} onClick={() => del()} />
  )
}