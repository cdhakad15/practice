// models/Schedule.js

import mongoose from 'mongoose';
import staffModel from './staff.model.js';
const scheduleSchema = new mongoose.Schema({
    staff: 
    { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Staff', 
        required: true },

    day: 
    { type: String, 
        required: true },

    startTime: 
    { type: String, 
        required: true },

    endTime: 
    { type: String, 
        required: true }
});


export default mongoose.model("Schedule", scheduleSchema);

