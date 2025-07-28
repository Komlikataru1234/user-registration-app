import React from 'react';
import useFetch from '../hooks/useFetch';

const UserList = () => {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return (
      <div className="loading">
        <div>Loading users...</div>
        <div style={{ marginTop: '10px', fontSize: '14px' }}>
          Fetching data from JSONPlaceholder API
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h3 style={{ color: '#dc3545' }}>Error Loading Users</h3>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn btn-primary"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h3>No Users Found</h3>
        <p>No user data is available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="users-container">
      <h2>All Users ({users.length})</h2>
      <p>Data fetched from JSONPlaceholder API</p>
      
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
            <p><strong>City:</strong> {user.address.city}</p>
          </div>
        ))}
      </div>
      
    
    </div>
  );
};

export default UserList;