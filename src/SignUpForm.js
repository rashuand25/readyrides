import React, { useState } from 'react';
import axios from 'axios';

const SignUpForm = () => {
  const [firstname, setFirstname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [isEmailTaken, setIsEmailTaken] = useState(false);

  const checkUsername = async (username) => {
    try {
      const response = await axios.get(`http://localhost:3001/check-username/${username}`);
      setIsUsernameTaken(response.data.exists);
    } catch (error) {
      console.error('Error checking username', error);
    }
  };

  const checkEmail = async (email) => {
    try {
      const response = await axios.get(`http://localhost:3001/check-email/${email}`);
      setIsEmailTaken(response.data.exists);
    } catch (error) {
      console.error('Error checking email', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !username || !password || !email) {
      alert('All fields are required.');
      return;
    }

    await checkUsername(username);
    if (isUsernameTaken) {
      alert('Username is already taken. Please choose a different one.');
      return;
    }

    await checkEmail(email);
    if (isEmailTaken) {
      alert('Email is already taken. Please choose a different one.');
      return;
    }

    const user = {
      firstname,
      username,
      password,
      email
    };

    try {
      const result = await axios.post('http://localhost:3001/signup', user);
      alert(result.data.message); // Assuming the API returns a message in the data
    } catch (error) {
      console.error('There was an error!', error);
      alert('An error occurred while signing up.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstname}
        onChange={e => setFirstname(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
          setIsEmailTaken(false); // Reset the email taken state on change
        }}
        required
        onBlur={() => checkEmail(email)}
      />
      {isEmailTaken && <div className="error">Email is already taken.</div>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => {
          setUsername(e.target.value);
          setIsUsernameTaken(false); // Reset the username taken state on change
        }}
        required
        onBlur={() => checkUsername(username)}
      />
      {isUsernameTaken && <div className="error">Username is already taken.</div>}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
