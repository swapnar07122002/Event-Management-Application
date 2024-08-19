import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard/EventCard';
import { api_uri } from '../../config';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './FindEvents.css'

const FindEvents = () => {
  const [filterDate, setFilterDate] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [noEventsMessage, setNoEventsMessage] = useState('');

  const handleSearch = async () => {

    if (filterDate.trim() === '' || filterCategory.trim() === '') {
      alert('Please enter both date and category');
      return; // Exit early if both fields are not filled
    }

    console.log('Search button clicked');
    console.log('Filter Date:', filterDate);
    console.log('Filter Category:', filterCategory);
    try {
      // Check if both filterDate and filterLocation are not empty
      if (filterDate.trim() !== '' && filterCategory.trim() !== '') {
        const response = await fetch(`${api_uri}/api/event/filter?date=${filterDate}&category=${filterCategory}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Data from API:', data);
          if (data.length === 0) {
            setFilteredEvents([]);
            setNoEventsMessage('No events available');
          } else {
            setFilteredEvents(data);
          }
        } else {
          console.error('Failed to fetch filtered events');
        }
      }
    } catch (error) {
      console.error('Error fetching filtered events:', error);
    }
  };
  

  return (
    <>
    <Navbar/>
    <div className="filtered-events">
      <h2>Filtered Events</h2>
      <div className="search-form">
        <input className='search-input' type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
        <input className='search-input' type="text" placeholder="Enter category" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} />
        <button className='search-btn' onClick={handleSearch}>Search</button>
      </div>
      <div className="event-list">
      {filteredEvents.length === 0 && <p>{noEventsMessage}</p>}
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FindEvents;
