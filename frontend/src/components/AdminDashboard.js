// frontend/src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);

    useEffect(() => {
        const fetchAttendanceRecords = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('http://localhost:5000/api/attendance', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setAttendanceRecords(response.data);
            } catch (error) {
                console.error('Error fetching attendance records:', error);
            }
        };

        fetchAttendanceRecords();
    }, []);

    return (
        <div>
            <h2>Attendance Records</h2>
            <table>
                <thead>
                    <tr>
                        <th>Guard Name</th>
                        <th>Selfie</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record) => (
                        <tr key={record._id}>
                            <td>{record.userId.username}</td>
                            <td>
                                <img src={`http://localhost:5000/${record.selfie}`} alt="Selfie" style={{ width: '100px' }} />
                            </td>
                            <td>{new Date(record.date).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
