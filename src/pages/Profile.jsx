import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData');
    
    if (savedUserData) {
      try {
        const parsedUserData = JSON.parse(savedUserData);
        setUserData(parsedUserData);
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('userData');
      }
    }
    
    setIsLoading(false);
  }, []);

  useEffect(() => {
  
    if (!isLoading && !userData) {
      navigate('/register');
    }
  }, [isLoading, userData, navigate]);

  const handleLogout = () => {
    setUserData(null);
  };

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading profile...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>No Profile Found</h2>
        <p>You haven't registered yet. Please register to create your profile.</p>
        <Link to="/register" className="nav-link">Register Now</Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" className="nav-link">← Back to Home</Link>
      </div>
      
      <ProfileCard userData={userData} onLogout={handleLogout} />
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/users" className="nav-link">View All Users</Link>
      </div>
    </div>
  );
};

export default Profile;