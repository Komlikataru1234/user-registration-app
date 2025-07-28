import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to User Registration App</h1>
      <p>
        This is a React application demonstrating user registration, profile management, 
        and user listing functionality. Navigate through the different sections using the links below.
      </p>
      
      <div className="nav-links">
        <Link to="/register" className="nav-link">
          Register New User
        </Link>
        <Link to="/users" className="nav-link">
          View All Users
        </Link>
        <Link to="/profile" className="nav-link">
          My Profile
        </Link>
      </div>
      
      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#e9f4ff', borderRadius: '8px' }}>
        <h2>Features:</h2>
        <ul>
          <li>User registration with form validation</li>
          <li>Profile management with local storage</li>
          <li>Fetch and display users from API</li>
          <li>React Router for navigation</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;