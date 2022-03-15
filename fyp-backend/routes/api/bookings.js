const express = require('express');
let router = express.Router();
var Bookings = require('../../models/bookings');

//get all bookings
router.get('/', async (req, res) => {
  //pagination
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);

  let bookings = await Bookings.find().skip(skipRecords).limit(perPage);
  return res.send(bookings);
});

//get single booking
router.get('/:id', async (req, res) => {
  try {
    let booking = await Bookings.findById(req.params.id);
    if (!booking)
      return res.status(400).send('Booking with given id does not exist');
    return res.send(booking);
  } catch (error) {
    return res.status(400).send('Invalid ID');
  }
});

//update single booking
router.put('/:id', async (req, res) => {
  let booking = await Bookings.findById(req.params.id);
  booking.name = req.body.name;
  booking.email = req.body.email;
  await booking.save();
  return res.send(booking);
});

//delete single booking
router.delete('/:id', async (req, res) => {
  let booking = await Bookings.findByIdAndDelete(req.params.id);
  return res.send(booking);
});

//insert a booking
router.post('/', async (req, res) => {
  const {
    fname,
    lname,
    email,
    phone,
    eventType,
    menuStyle,
    guests,
    package,
    date,
    time,
  } = req.body;
  let booking = new Bookings();
  booking.fname = fname;
  booking.lname = lname;
  booking.email = email;
  booking.phone = phone;
  booking.eventType = eventType;
  booking.menuStyle = menuStyle;
  booking.guests = guests;
  booking.package = package;
  booking.date = date;
  booking.time = time;
  await booking.save();
  return res.send(booking);
});

module.exports = router;
