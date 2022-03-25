import React, { useState, useEffect } from 'react';
import SingleBooking from './SingleBooking';
import axios from 'axios';

function Admin() {
  const [bookings, setBookings] = useState([]);
  let num = 1;
  const getData = () => {
    axios
      .get('http://localhost:4000/api/bookings')
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, []);

  return (
    <div className='container'>
      <h1 className='display-2'>Admin Panel</h1>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <div className='row'>
          {/* <div className='col-md-6'> */}
          <table class='table table-bordered'>
            <thead class='thead-dark'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone No.</th>
                <th scope='col'>Booking date</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <SingleBooking key={index} booking={booking} num={num++} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin;
