import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            alert('All fields are required.')
            return;
        }
        else {
            try {
                const response = await axios.post('http://localhost:3001/login', { username, password });
                if (response.data.success) {
                    alert('Login Successful!');
                    history.push('/success'); // navigate to success page
                } else {
                    alert('Incorrect username or password. Please try again.');
                }
            } catch (error) {
                alert('An error occurred while logging in')
                console.error('An error occurred while logging in:', error);
            }
        }

        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default LoginForm;
