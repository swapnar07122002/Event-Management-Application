const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  time: String,
  location: String,
  category: String,
  capacity: Number,
  deadline: Date,
  requirements: String,
  image: String ,
  registeredUsers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // Assuming you have a User model
  }]
});


const eventDetail = mongoose.model('event', eventSchema);

module.exports = eventDetail;
