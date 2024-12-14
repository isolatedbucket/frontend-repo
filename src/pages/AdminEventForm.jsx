import React, { useState } from 'react';
import axios from 'axios';

function AdminEventForm() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        location: '',
        description: '',
        capacity: 0,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://your-backend-url.com/admin/events', formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            alert('Event created successfully!');
        } catch (err) {
            alert('Event creation failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Event Name" onChange={handleChange} required />
            <input name="date" type="date" onChange={handleChange} required />
            <input name="location" type="text" placeholder="Location" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} required />
            <input name="capacity" type="number" placeholder="Capacity" onChange={handleChange} required />
            <button type="submit">Create Event</button>
        </form>
    );
}

export default AdminEventForm;
