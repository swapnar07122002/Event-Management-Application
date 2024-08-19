import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api_uri } from '../../config';
import EventCard from '../EventCard/EventCard';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './EventsPage.css';


const EventsPage = () => {
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


  const handleEdit = (event) => {
    setEditingEvent(event);
    setEditingEventId(event._id);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`${api_uri}/api/event/events/${editingEvent._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editingEvent)
      });
      if (response.ok) {
        // Fetch the updated events after successful update
        fetchEvents();
        // Clear the editing state
        setEditingEvent(null);
      } else {
        console.error('Failed to update event'); 
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleChange = (e) => {
    setEditingEvent({ ...editingEvent, [e.target.name]: e.target.value });
  };

  const handleDelete = async (eventId) => {

    const confirmDelete = window.confirm('Are you sure you want to delete this event?');

    if (confirmDelete){
      try {
        const response = await fetch(`${api_uri}/api/event/events/${eventId}`, {
          method: 'DELETE'
        });
        if (response.ok) { 
          fetchEvents();
          
        } else {
          console.error('Failed to delete event');
        }
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  return (
    <>
    <Navbar/>
    <div className="event_list_container">
      <h2>Events</h2>
      <ul className="event-card-container">
        {events.map((event) => (
          <li key={event._id}>
            <EventCard event={event} />
            
            <button className='edit-btn' onClick={() => handleEdit(event)}>Edit</button>
            <button className='edit-btn' onClick={() => handleDelete(event._id)}>Delete</button>
            {editingEventId === event._id && (
                <div className="edit-modal">
                  {/* Edit form */}
                  {/* Edit form/modal */}
                  {editingEvent && (
                      <div className="edit-modal">
                        <h2>Edit Event</h2>
                        <form onSubmit={(e) => {
                          e.preventDefault();
                          handleUpdate();
                        }}>
                          <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" value={editingEvent.title} onChange={handleChange} />
                          </div>
                          
                          <div>
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" name="description" value={editingEvent.description} onChange={handleChange} />
                          </div>

                          <div>
                            <label htmlFor="time">Time</label>
                            <input type="time" id="time" name="title" value={editingEvent.title} onChange={handleChange} />
                          </div>

                          <div>
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" name="date" value={editingEvent.date} onChange={handleChange} />
                          </div>

                          <div>
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" name="location" value={editingEvent.location} onChange={handleChange} />
                          </div>

                          <div>
                            <label htmlFor="category">Category</label>
                            <input type="text" id="category" name="category" value={editingEvent.category} onChange={handleChange} />
                          </div>

                          <div>
                            <label htmlFor="capacity">Capacity</label>
                            <input type="number" id="capacity" name="capacity" value={editingEvent.capacity} onChange={handleChange} />
                          </div>

                          <div>
                            <label htmlFor="deadline">Deadline</label>
                            <input type="date" id="deadline" name="deadline" value={editingEvent.deadline} onChange={handleChange} />
                          </div>

                          <div>
                            <label htmlFor="requirements">Requirements</label>
                            <input type="text" id="requirements" name="requirements" value={editingEvent.requirements} onChange={handleChange} />
                          </div>

                          <div>
                              <label htmlFor="image" className='form-label'>Upload Image Url</label>
                              <input type="url" id='image' name='image' value={editingEvent.image} onChange={handleChange}/>
                            </div>

                          <button type="submit">Save Changes</button>
                          <button onClick={() => setEditingEvent(null)}>Cancel</button>
                        </form>
                      </div>
                    )}
                </div>
              )}
          </li>
        ))}
      </ul>
    </div>


    <Link to='/createEvent'>
        <button className='create-btn'>Create a new Event</button>
    </Link>

    
    <Footer/>
    </>
  );
};

export default EventsPage;
