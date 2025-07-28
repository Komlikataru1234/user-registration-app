import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Oops! The page you're looking for doesn't exist. 
        It might have been moved, deleted, or you entered the wrong URL.
      </p>
      
      <div style={{ marginTop: '30px' }}>
        <Link to="/" className="nav-link">
          🏠 Return to Home
        </Link>
      </div>
      
      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <p>Available pages:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;