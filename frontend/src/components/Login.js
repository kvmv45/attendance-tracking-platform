// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('guard'); // Default role
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);

            // Redirect based on role
            if (response.data.role === 'admin') {
                navigate('/admin-dashboard'); // Redirect to admin dashboard
            } else {
                navigate('/record-attendance'); // Redirect to attendance page
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
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
                <div>
                    <label>
                        <input
                            type="radio"
                            value="guard"
                            checked={role === 'guard'}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        Guard
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="admin"
                            checked={role === 'admin'}
                            onChange={(e) => setRole(e.target.value)}
                        />
                        Admin
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
