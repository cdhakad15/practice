import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ScheduleList = () => {
    const [scheduleList, setScheduleList] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await axios.get('http://localhost:3000/schedule/allData');
                setScheduleList(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSchedules();
    }, []);



    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this staff?')) {
            try {
                await axios.delete(`http://localhost:3000/schedule/delete/${id}`);
                setScheduleList(scheduleList.filter(schedule => schedule._id !== id));
                alert('Staff deleted successfully');
                // Optionally, you can redirect to the staff list page or perform any other action after deletion
            } catch (error) {
                console.error(error);
                alert('Error deleting staff');
            }
        }
    };


    return (
       <div>
        <h2>Schedule List</h2>
        <ul>
            {scheduleList.map(schedule => (
                <li key={schedule._id}>
                    {schedule.staff} - {schedule.day} - {schedule.startTime} to {schedule.endTime}
                    <button className='ml-5' 
                    onClick={() => handleDelete(schedule._id)}>Delete</button>
            

                </li>
            ))}
        </ul>
    </div>

    );
};

export default ScheduleList;
