import React, { useState } from 'react';
import axios from 'axios';
import './css/signupPageCss.css'

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber || !username || !password) {
      alert('All fields are required.');
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      phoneNumber,
      username,
      password,
    };

    try {
      const result = await axios.post('http://localhost:3001/signup', user);
      alert(result.data.message);
    } catch (error) {
      console.error('There was an error!', error);

      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        alert(`Error: ${error.response.data}. Status Code: ${error.response.status}`);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in Node.js
        console.log(error.request);
        alert('No response received. Please check your network connection.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        alert(`An error occurred: ${error.message}`);
      }
    }
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className='formFields'
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className='formFields'
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          className='formFields'
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className='formFields'
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <input
          className='formFields'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className='formFields'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className='signupBtn'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
