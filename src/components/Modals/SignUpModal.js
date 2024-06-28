import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpModal = () => {
  const navigate = useNavigate();

  const handleShow = () => {
    navigate('/signUp');
  };

  return (
    <p onClick={handleShow} style={{ cursor: 'pointer', color: 'silver' }}>
      Sign Up
    </p>
  );
};

export default SignUpModal;
