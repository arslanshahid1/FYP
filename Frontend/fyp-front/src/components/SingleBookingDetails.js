import React from 'react';

function SingleBookingDetails() {
  const saved = JSON.parse(localStorage.getItem('booking'));
  // const saved = localStorage.getItem('booking');

  return (
    <div className='container mt-5'>
      {/* {saved} */}
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
            <td>{saved.date}</td>
          </tr>
          <tr>
            <th scope='row'>Event Time</th>
            <td>{saved.time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SingleBookingDetails;
