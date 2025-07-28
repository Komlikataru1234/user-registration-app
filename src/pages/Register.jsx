import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/" className="nav-link">← Back to Home</Link>
      </div>
      
      <RegisterForm />
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Already have an account? <Link to="/profile">View Profile</Link></p>
      </div>
    </div>
  );
};

export default Register;