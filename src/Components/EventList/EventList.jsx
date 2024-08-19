import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_uri } from '../../config';
import EventCard from '../EventCard/EventCard';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './EventList.css';


const EventList = () => {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editingEventId, setEditingEventId] = useState(null);
  
  
  const fetchEvents = async () => {
    try {
      const response = await fetch(`${api_uri}/api/event/events`);
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        console.error('Failed to fetch events');
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);


  return (
    <>
    <Navbar/>
    <div className="event_list_container">
      <h2>Events</h2>
      <ul className="event-card-container">
        {events.map((event) => (
          <li key={event._id}>
            <EventCard event={event} /> 
          </li>
        ))}
      </ul>
    </div>    
    <Footer/>
    </>
  );
};

export default EventList;
