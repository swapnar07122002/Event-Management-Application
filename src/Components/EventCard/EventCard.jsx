import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  const { _id, title, date, time, location, category, capacity, deadline, image } = event;
  
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedDeadline = new Date(deadline).toLocaleDateString();
 
  return (
    <Link to ={`/events/${_id}`} className="event-card-link"> 
      <div className="event-card"> 
        <div className="event-card-content"> 
          <h3>{title}</h3>
          {/* <p>Description: {description}</p> */}
          <p>Date: {formattedDate}</p>
          <p>Time: {time}</p>
          <p>Location: {location}</p>
          <p>Category: {category}</p>
          {/* <p>Capacity: {capacity}</p> */}
          {/* <p>Deadline: {formattedDeadline}</p> */}
          {/* <p>Requirements: {requirements}</p> */}
        </div>

        <div className='card-img-wrapper'>
        {image && <img src={image} alt={title} />}
        </div>
    </div>
    </Link>   
  );
};

export default EventCard;
