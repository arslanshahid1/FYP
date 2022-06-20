import React, { useState, useEffect } from 'react';
import SingleBooking from './SingleBooking';
import { Link } from 'react-router-dom';

import axios from 'axios';

function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  let num = 1;
  const getData = () => {
    axios
      // .get('http://localhost:4000/api/bookings')
      .get('https://arslan-fyp.herokuapp.com/api/bookings')
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, []);

  return (
    <div className='container admin-bookings'>
      <div className='d-flex justify-content-between my-3'>
        <h1 className='title'>Bookings</h1>
        <Link
          to='/admin'
          className='btn btn-outline-info d-flex align-items-center ml-2'
        >
          Go to dashboard
        </Link>
      </div>

      {bookings.length === 0 ? (
        <p>No bookings yet</p>
      ) : (
        <div>
          <table class='table table-bordered table-striped '>
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

export default AdminBookings;
