import React from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => (
  <div className="user-list">
    {users.map(user => (
      <UserCard key={user.id} nombreS={user.nombreS} imagenS={user.imagenS} />
    ))}
  </div>
);

export default UserList;
