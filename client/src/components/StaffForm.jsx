import React, { useState } from 'react';
import axios from 'axios';

const StaffForm = () => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/staff/create', { name, contact });
            alert('Staff added successfully');
            setName('');
            setContact('');
        } catch (error) {
            console.error(error);
            alert('Error adding staff');
        }
    };

    return (
        <div>
            <h2>Add New Staff</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                <button type="submit">Add Staff</button>
            </form>
        </div>
    );
};

export default StaffForm;
