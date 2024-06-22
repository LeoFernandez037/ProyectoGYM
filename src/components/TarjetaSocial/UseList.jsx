import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => (
  <div className="user-list">
    {users.map((user) => (
      <UserCard key={user.id} nombreS={user.nombre} imagenS={user.imagen} />
    ))}
  </div>
);

export default UserList;
