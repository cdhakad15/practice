
import Schedule from '../model/schedule.model.js';

// Create new schedule
export const createSchedule = async (req, res) => {
    try {
        const { staff, day, startTime, endTime } = req.body;
        
        const newSchedule = new Schedule({ staff, day, startTime, endTime });
        await newSchedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all schedules
export const getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.json(schedules);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get schedule by ID
export const getScheduleById = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.json(schedule);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update schedule
export const updateSchedule = async (req, res) => {
    try {
        const { staff, day, startTime, endTime } = req.body;
        const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, { staff, day, startTime, endTime }, { new: true });
        if (!updatedSchedule) return res.status(404).json({ message: 'Schedule not found' });
        res.json(updatedSchedule);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete schedule
export const deleteSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findByIdAndDelete(req.params.id);
        if (!schedule) return res.status(404).json({ message: 'Schedule not found' });
        res.json({ message: 'Schedule deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
