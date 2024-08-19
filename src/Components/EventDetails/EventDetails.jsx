import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import "./EventDetails.css";
import { Link, useParams } from "react-router-dom";
import { api_uri } from '../../config';


const EventDetails = () => {
  const { id } = useParams();
  const [filteredEvent, setFilteredEvent] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${api_uri}/api/event/events/${id}`);
        if (response.ok) {
          const data = await response.json(); 
          setFilteredEvent(data);
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

   

    fetchEvent();
    
    
    const userLoggedIn = sessionStorage.getItem('name');
    setIsLoggedIn(!!userLoggedIn);
    
    checkRegistration();
    
    
    
  }, [id]);

  const checkRegistration = async () => {
    try {
      const userId = sessionStorage.getItem('userId');
      if (!userId) {
        setIsRegistered(false);
        return;
      }
      const response = await fetch(`${api_uri}/api/eventRegistration/registered/${userId}`);
      if (response.ok) {
        const registeredEvents = await response.json();
        setIsRegistered(registeredEvents.includes(id));
      } else {
        setIsRegistered(false);
      }
    } catch (error) {
      console.error('Error checking registration:', error);
    }
  };

  
  const handleRegister = async () => {
    if (!isLoggedIn) {
      alert('Please login first to register.');
      return;
    }

    if (!filteredEvent) {
      console.error('Event details not available.');
      return;
    }

    if (!filteredEvent.registeredUsers || !Array.isArray(filteredEvent.registeredUsers)) {
      console.error('Invalid registeredUsers data.');
      return;
    }

    if (filteredEvent.registeredUsers.length >= filteredEvent.capacity) {
      alert('Event capacity limit has been reached. Cannot register.');
      return;
    }

    try {

      const userId = sessionStorage.getItem('userId');
      const response = await fetch(`${api_uri}/api/eventRegistration/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId,eventId: id}),
      });

      if (response.ok) {
        // Update UI or show success message
        alert('Successfully registered for the event.');
        setIsRegistered(true);
      } else {
        alert('Failed to register for the event.');
      }
    } catch (error) {
      console.error('Error registering for the event:', error);
      alert('Failed to register for the event. Please try again later.');
    }
  };
 

  if (!filteredEvent) {
    return <div>Loading...</div>; 
  }

  const formattedDate = new Date(filteredEvent.date).toLocaleDateString();
  const formattedDeadline = new Date(filteredEvent.deadline).toLocaleDateString();

  return (
    <>
    <div className="event-details-container"> 
      <Navbar/>
      <div className="event-details-wrapper">
        <img src={filteredEvent.image} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.title}</h3>
          <div className="small-details">
            <p className="date">
            <i className="fa-solid fa-calendar-days"></i>
              <span className="font-weight-med">{formattedDate}</span>
              
            </p>
            <p className="location font-weight-med">
            <i className="fa-solid fa-location-dot"></i>
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">{filteredEvent.description}</span>
          </p>
          <p className="description">
          <span className="description-heading">Capacity: </span>
          <span className="description-heading-para">{filteredEvent.capacity}</span>
          </p>
          <p className="description">
          <span className="description-heading">Deadline: </span>
          <span className="description-heading-para">{formattedDeadline}</span>
          </p>
          <p className="description">
          <span className="description-heading">Requirements: </span>
          <span className="description-heading-para">{filteredEvent.requirements}</span>
          </p>
          {!isLoggedIn ? (
            <button className='register-btn' onClick={handleRegister}>Register</button>
          ) : (
            <>
              {isRegistered ? (
                <p>Registered</p>
              ) : (
                <button className='register-btn' onClick={handleRegister}>Register</button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default EventDetails;