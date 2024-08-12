// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RecordAttendance from './components/RecordAttendance';
import AdminDashboard from './components/AdminDashboard';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <h1>Attendance Tracking System</h1>
                <Routes>
                    <Route path="/" element={<Login />} /> {/* Home page route */}
                    <Route path="/record-attendance" element={<RecordAttendance />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
