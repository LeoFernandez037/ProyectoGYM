import React from 'react';
import Avatar from './Avatar';
import Text from './Text5';

const UserCard = ({ nombreS, imagenS }) => (
  <div className="user-card">
    <Avatar src={imagenS} alt={nombreS} />
    <Text className="user-name">{nombreS}</Text>
  </div>
);

export default UserCard;
