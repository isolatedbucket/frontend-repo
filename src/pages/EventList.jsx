import React, { useState, useEffect } from 'react';
import axios from 'axios';

console.log('EventList component loaded!');


function EventList() {
    const [events, setEvents] = useState([]); // State to store events
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch events from the backend
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://backend-repo-174o.onrender.com'); // Backend API URL
                console.log('Fetched events:', response.data); // Debug log to verify data
                setEvents(response.data); // Store data in state
            } catch (err) {
                console.error('Error fetching events:', err); // Debug log for errors
                setError('Failed to load events'); // Set error message
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchEvents(); // Call the fetch function
    }, []); // Dependency array ensures it runs only once

    // Conditional rendering
    if (loading) return <p>Loading events...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Event Listings</h1>
            {events.length === 0 ? (
                <p>No events available</p>
            ) : (
                events.map((event) => (
                    <div key={event._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h3>{event.name}</h3>
                        <p>Date: {new Date(event.date).toDateString()}</p>
                        <p>Time: {event.time}</p>
                        <p>Location: {event.location}</p>
                        <p>Description: {event.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default EventList;
