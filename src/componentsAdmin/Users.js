import React, { useContext } from 'react'
import { ApiContext } from '../contexts/ApiContext';
import User from './User';

function Users() {
  const { userList } = useContext(ApiContext);
  return (
    <div className='row'>
    {userList.map((user) => {
      return <User user={user} key={user.id} />;
    })}
  </div>
  )
}

export default Users