import React, { useState, useEffect } from 'react';
import { api_uri } from '../../config';
import './CreateEvent.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const CreateEvent = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [capacity, setCapacity] = useState('');
  const [deadline, setDeadline] = useState('');
  const [requirements, setRequirements] = useState('');
  const [image, setImage] = useState(null);
 

  // const fetchEvents = async () => {
  //   try {
  //     const response = await fetch(`${api_uri}/api/event/events`);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setEvents(data);
  //     } else {
  //       console.error('Failed to fetch events');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching events:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !date || !time || !location || !category || !capacity || !deadline || !requirements || !image) {
      alert('Please fill out all fields'); 
      return; 
    }

    try {
      const response = await fetch(`${api_uri}/api/event/events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          date,
          time,
          location,
          category,
          capacity,
          deadline,
          requirements,
          image
        })
      });
      if (response.ok) {
        
        
        navigate('/events');
      } else {
        console.error('Failed to create event');
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <>
    <Navbar/>
      <div className="event_container">
        <div className="event_main">
          <div className="event_grid"><h1>Create New Event</h1></div>
          <div className="event_form">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className='form-label'>Enter Title</label>
                <input className='form-control' type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title'/>
              </div>

              <div className="mb-3">
                <label htmlFor="description" className='form-label'>Enter Description</label>
                <input className='form-control' type="text" id='description' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter Description'/>
              </div>

              <div className="mb-3">
                <label htmlFor="date" className='form-label'>Enter Date</label>
                <input className='form-control' type="date" id='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Enter Date'/>
              </div>

              <div className="mb-3">
                <label htmlFor="time" className='form-label'>Enter Time</label>
                <input className='form-control' type="time" id='time' value={time} onChange={(e) => setTime(e.target.value)} placeholder='Enter Time'/>
              </div>

              <div className="mb-3">
                <label htmlFor="location" className='form-label'>Enter Location</label>
                <input className='form-control' type="text" id='location' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Enter Location'/>
              </div>

              <div className="mb-3">
                <label htmlFor="category" className='form-label'>Enter Category</label>
                <input className='form-control' type="text" id='category' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Enter Category'/>
              </div>

              <div className="mb-3">
                <label htmlFor="capacity" className='form-label'>Enter Capacity</label>
                <input className='form-control' type="Number" id='capacity' value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder='Enter Capacity'/>
              </div>

              <div className="mb-3">
                <label htmlFor="deadline" className='form-label'>Enter Deadline</label>
                <input className='form-control' type="date" id='deadline' value={deadline} onChange={(e) => setDeadline(e.target.value)} placeholder='Enter Deadline'/>
              </div>

              <div className="mb-3">
                <label htmlFor="requirements" className='form-label'>Enter Requirements</label>
                <input className='form-control' type="text" id='requirements' value={requirements} onChange={(e) => setRequirements(e.target.value)} placeholder='Enter Requirements'/>
              </div>

              <div className="mb-3">
                <label htmlFor="image" className='form-label'>Upload Image Url</label>
                <input className='form-control' type="url" id='image' value={image} onChange={(e) => setImage(e.target.value)} placeholder='Enter image url'/>
              </div>

              <button className='btn_event' type="submit">Create Event</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CreateEvent;
