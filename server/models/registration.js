const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  eventId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Event'
  },
  registrationDate: { type: Date, default: Date.now },
});

const registrationDetail = new mongoose.model('registration',registrationSchema)

module.exports = registrationDetail;