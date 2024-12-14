import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Replace with your live backend URL
const apiUrl = "https://backend-repo-174o.onrender.com/events";

function EventList() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events from the API
    axios.get(apiUrl)
      .then(response => {
        setEvents(response.data);
        console.log('Events fetched successfully:', response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setError('Failed to load events. Please try again later.');
      });
  }, []);

  return (
    <div className="event-list-container">
      <h1>Event Listings</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : events.length === 0 ? (
        <p>No events available.</p>
      ) : (
        events.map(event => (
          <div key={event._id} className="event-card">
            <h2>{event.name}</h2>
            <p className="event-info">Date: {new Date(event.date).toDateString()}</p>
            <p className="event-info">Time: {event.time}</p>
            <p className="event-info">Location: {event.location}</p>
            <p className="event-info">Description: {event.description}</p>
            <div className="event-details">
              <div>Capacity: {event.capacity}</div>
              <div>Available Seats: {event.availableSeats}</div>
            </div>
            <button className="button">RSVP</button>
          </div>
        ))
      )}
    </div>
  );
}

export default EventList;
