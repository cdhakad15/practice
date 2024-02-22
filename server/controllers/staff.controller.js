import Staff from "../model/staff.model.js";

// Create new staff

export const createStaff = async (req, res) => {
    try {
        const { name, contact } = req.body;
        const newStaff = new Staff({ name, contact });
        await newStaff.save();
        res.status(201).json(newStaff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all staff
export const getAllStaff = async (req, res) => {
    try {
        const staff = await Staff.find();
        res.json(staff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get staff by ID
export const getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);
        if (!staff) return res.status(404).json({ message: 'Staff not found' });
        res.json(staff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update staff
export const updateStaff = async (req, res) => {
    try {
        const { name, contact } = req.body;
        const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, { name, contact }, { new: true });
        if (!updatedStaff) return res.status(404).json({ message: 'Staff not found' });
        res.json(updatedStaff);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete staff
export const deleteStaff = async (req, res) => {
    try {
        const staff = await Staff.findByIdAndDelete(req.params.id);
        if (!staff) return res.status(404).json({ message: 'Staff not found' });
        res.json({ message: 'Staff deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
