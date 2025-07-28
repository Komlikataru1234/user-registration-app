import React from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList';

const Users = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" className="nav-link">← Back to Home</Link>
        <Link to="/profile" className="nav-link">My Profile</Link>
      </div>
      
      <UserList />
    </div>
  );
};

export default Users;