var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: Number,
  eventType: String,
  menuStyle: String,
  guests: Number,
  package: String,
  date: String,
  time: String,
  userId: String,
});

var Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
