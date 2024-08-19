import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
import { api_uri } from '../../config';
import EventCard from '../EventCard/EventCard'; // Import the EventCard component

const MyRegistrations = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    
    const fetchRegisteredEvents = async () => {
      const userId = sessionStorage.getItem('userId');
      try {
        // Fetch registered events for the current user from the backend API
        const response = await fetch(`${api_uri}/api/eventRegistration/myregistrations/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
             // Pass the user's access token
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setRegisteredEvents(data); // Update the state with the fetched registered events
        } else {
          console.error('Failed to fetch registered events');
        }
      } catch (error) {
        console.error('Error fetching registered events:', error);
      }
    };

    fetchRegisteredEvents();
  }, []);

  return (
    <>
      <Navbar />
      <div className="registrations-container">
        <h1>My Registrations</h1>
        <div className="registered-events">
          {registeredEvents.length === 0 ? (
            <p>No events registered.</p>
          ) : (
            <div className="event-card-container">
              {registeredEvents.map((event, index) => (
                <EventCard key={index} event={event} /> // Render each registered event as an EventCard
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyRegistrations;
