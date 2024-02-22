import React, { useState } from 'react';
import axios from 'axios';

const ScheduleForm = () => {
    const [staffId, setStaffId] = useState('');
    const [day, setDay] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
           const res=  await axios.post('http://localhost:3000/schedule/create', { staff:staffId, day, startTime, endTime });
            console.log(res);
            alert('Schedule added successfully');
            setStaffId('');
            setDay('');
            setStartTime('');
            setEndTime('');
        } catch (error) {
            console.error(error);
            alert('Error adding schedule');
        }
    };

    return (
        <div>
            <h2>Add New Schedule</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Staff ID" value={staffId} onChange={(e) => setStaffId(e.target.value)} />
                <input type="text" placeholder="Day" value={day} onChange={(e) => setDay(e.target.value)} />
                <input type="text" placeholder="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
                <input type="text" placeholder="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                <button type="submit">Add Schedule</button>
            </form>
        </div>
    );
};

export default ScheduleForm;
