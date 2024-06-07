import React, { useEffect, useState } from 'react';
import UserList from './UseList';

const SocialPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://6661452a63e6a0189fe91108.mockapi.io/api/Gym/social')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="social-page">
      <h1>Social</h1>
      <h2>personas conectadas</h2>
      <UserList users={users} />
    </div>
  );
};

export default SocialPage;
