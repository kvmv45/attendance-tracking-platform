// frontend/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('guard'); // Default role
    const [error, setError] = useState(''); // State to hold error messages
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register', { username, password, role });
            console.log('Registration response:', response.data); // Use the response
            alert('Registration successful! Please log in.');
            navigate('/'); // Redirect to login after successful registration
        } catch (error) {
            console.error('Registration failed:', error);
            setError('Registration failed. Please try again.'); // Set error message
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="guard">Guard</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;