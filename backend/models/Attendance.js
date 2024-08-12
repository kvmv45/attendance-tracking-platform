// backend/models/Attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
    selfie: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
