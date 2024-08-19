const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
  name: String,
  email: String,
  phone:Number,
  password: String
})

const userDetail = new mongoose.model('user',userschema)

module.exports = userDetail;