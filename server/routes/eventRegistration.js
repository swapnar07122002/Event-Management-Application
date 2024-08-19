const express = require('express');
const router = express.Router();
const registrationDetail = require('../models/registration');
const Event = require('../models/eventdata');



// Route for registering for an event
router.post('/register', async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    // Check if the user is already registered for the event
    const existingRegistration = await registrationDetail.findOne({ userId, eventId });
    if (existingRegistration) {
      return res.status(400).json({ message: 'User is already registered for this event' });
    }

    // Check if the event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if the event has reached its capacity
    if (event.registeredUsers.length >= event.capacity) {
      return res.status(400).json({ message: 'Event has reached its capacity' });
    }

    // Create a new registration document
    const newRegistration = new registrationDetail({ userId, eventId });
    await newRegistration.save();

    // Update the event's registeredUsers array
    event.registeredUsers.push(userId);
    await event.save();

    res.status(201).json({ message: 'Successfully registered for the event' });
  } catch (error) {
    console.error('Error registering for event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



router.get('/registered/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const registrations = await registrationDetail.find({ userId }).select('eventId');
    const registeredEvents = registrations.map(registration => registration.eventId);
    res.status(200).json(registeredEvents);
  } catch (error) {
    console.error('Error fetching registered events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/myregistrations/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    // Find registrations for the given user
    const registrations = await registrationDetail.find({ userId });

    // Extract event IDs from registrations
    const eventIds = registrations.map(registration => registration.eventId);

    // Fetch event details for the extracted event IDs
    const events = await Event.find({ _id: { $in: eventIds } });

    res.status(200).json(events);
  } catch (error) {
    console.error('Error fetching registered events:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;
