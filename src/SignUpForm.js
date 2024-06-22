import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber || !username || !password) {
      alert('All fields are required.');
      return;
    }

    const user = {
      phoneNumber,
      username,
      password,
      email,
    };

    try {
      const result = await axios.post('http://localhost:3001/signup', user);
      alert(result.data.message);
    } catch (error) {
      console.error('There was an error!', error);
      alert('An error occurred while signing up.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="tel"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
