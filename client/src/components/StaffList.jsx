import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffList = () => {
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        const fetchStaff = async () => {
            try {
                const response = await axios.get('http://localhost:3000/staff/allData');
                setStaffList(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStaff();
    }, []);

    return (
        <div>
            <h2>Staff List</h2>
            <ul>
                {staffList.map(staff => (
                    <li key={staff._id}>{staff.name} - {staff.contact}</li>
                ))}
            </ul>
        </div>
    );
};

export default StaffList;
