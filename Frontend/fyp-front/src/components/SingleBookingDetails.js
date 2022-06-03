import React, { useState } from 'react';
import axios from 'axios';

function SingleBookingDetails() {
  const saved = JSON.parse(localStorage.getItem('booking'));
  // const saved = localStorage.getItem('booking');
  const [isConfirm, setConfirm] = useState(saved.bookingStatus);

  const confirmClickHandler = () => {
    axios.put(`http://localhost:4000/api/bookings/${saved._id}`).then(() => {
      setConfirm(true);
    });
  };

  return (
    <div className='container mt-5'>
      <table class='table col-6 table-bordered'>
        <tbody>
          <tr>
            <th scope='row'>Name</th>
            <td>{saved.fname + ' ' + saved.lname}</td>
          </tr>
          <tr>
            <th scope='row'>Email</th>
            <td>{saved.email}</td>
          </tr>
          <tr>
            <th scope='row'>Phone Number</th>
            <td>{saved.phone}</td>
          </tr>
          <tr>
            <th scope='row'>Event Type</th>
            <td>{saved.eventType}</td>
          </tr>
          <tr>
            <th scope='row'>Menu Style</th>
            <td>{saved.menuStyle}</td>
          </tr>
          <tr>
            <th scope='row'>Guests</th>
            <td>{saved.guests}</td>
          </tr>
          <tr>
            <th scope='row'>Event Date</th>
            <td>{saved.eventDate}</td>
          </tr>
          <tr>
            <th scope='row'>Event Time</th>
            <td>{saved.eventTime}</td>
          </tr>
          <tr>
            <th scope='row'>Booking status</th>
            <td
              style={
                isConfirm
                  ? { backgroundColor: '#CCEABB' }
                  : { backgroundColor: '#ffa4a4' }
              }
            >
              {isConfirm ? 'Confirmed' : 'Pending'}
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button
                className='btn btn-primary w-100 p-2'
                onClick={confirmClickHandler}
              >
                Confirm Booking
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SingleBookingDetails;
