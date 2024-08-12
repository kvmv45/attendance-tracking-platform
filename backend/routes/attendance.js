// backend/routes/attendance.js
const express = require('express');
const multer = require('multer');
const Attendance = require('../models/Attendance');
const upload = multer({ dest: 'uploads/' }); // Specify the destination for uploaded files

const router = express.Router();

// Record attendance
router.post('/record', upload.single('selfie'), (req, res) => {
    const userId = req.body.userId; // Ensure userId is sent in the request body
    const attendanceRecord = new Attendance({
        userId,
        selfie: req.file.path, // Save the path of the uploaded file
    });

    attendanceRecord.save()
        .then(() => res.status(201).send('Attendance recorded'))
        .catch(err => {
            console.error('Error recording attendance:', err);
            res.status(500).send('Error recording attendance');
        });
});

module.exports = router;
