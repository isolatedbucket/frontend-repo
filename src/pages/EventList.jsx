import React, { useState, useEffect } from 'react';
import axios from 'axios';

console.log('EventList component loaded!');


function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the API
    axios.get('http://localhost:5000/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="event-list-container">
      <h1>Event Listings</h1>
      {events.length === 0 ? (
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
