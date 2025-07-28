import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ userData, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userData');
    if (onLogout) {
      onLogout();
    }
    navigate('/');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      
      <div className="profile-info">
        <strong>Full Name:</strong> {userData.fullName}
      </div>
      
      <div className="profile-info">
        <strong>Email:</strong> {userData.email}
      </div>
      
      <div className="profile-info">
        <strong>Registered:</strong> {formatDate(userData.registeredAt)}
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <button 
          onClick={handleLogout}
          className="btn btn-secondary"
        >
          Logout & Clear Profile
        </button>
      </div>
      
      <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#d4edda', borderRadius: '5px' }}>
        <p style={{ margin: 0, color: '#155724' }}>
          ✓ Registration successful! Your profile has been saved locally.
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;