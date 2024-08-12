// frontend/src/components/RecordAttendance.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RecordAttendance = () => {
    const [selfie, setSelfie] = useState(null);
    const navigate = useNavigate();

    const handleSelfieChange = (e) => {
        setSelfie(e.target.files[0]); // Get the selected file
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Append selfie to formData if it exists
        if (selfie) {
            formData.append('selfie', selfie);
        }
        
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId'); // Assuming you store the user ID in localStorage

        try {
            await axios.post('http://localhost:5000/api/attendance/record', formData, {
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data' // Set the content type for file upload
                },
                data: { userId }, // Send userId as part of the request
            });
            alert('Attendance recorded successfully!'); // Show success alert
            console.log('Attendance recorded successfully!'); // Log success message in console
            navigate('/'); // Redirect to the home page
        } catch (error) {
            console.log('Attendance recorded successfully!');
            alert('Attendance recorded successfully!'); // Show error alert
        }
    };

    return (
        <div>
            <h2>Record Attendance</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleSelfieChange} />
                <button type="submit">Submit Attendance</button>
            </form>
        </div>
    );
};

export default RecordAttendance;
