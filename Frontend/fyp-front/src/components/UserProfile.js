import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

function UserProfile() {
  const userID = localStorage.getItem('id');
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    // axios.get(`http://localhost:4000/api/bookings/${userID}`).then((res) => {
    axios
      .get(`https://arslan-fyp.herokuapp.com/api/bookings/${userID}`)
      .then((res) => {
        let comingUserData = res.data;
        let arr = [];
        comingUserData.map((booking) => {
          return arr.push(booking);
        });
        setUserData([...arr]);
      });
  });

  return (
    <div className='container user-profile'>
      <h1 className='display-3 mt-3 title text-success'>Previous Bookings</h1>
      <div className='row mt-5'>
        {userData.map((booking) => (
          <div className='col-md-6'>
            <table class='table table-bordered  table-hover'>
              <tbody>
                <tr>
                  <th scope='row'>First Name</th>
                  <td>{booking.fname}</td>
                </tr>
                <tr>
                  <th scope='row'>Last Name</th>
                  <td>{booking.lname}</td>
                </tr>
                <tr>
                  <th scope='row'>Email</th>
                  <td>{booking.email}</td>
                </tr>
                <tr>
                  <th scope='row'>Phone #</th>
                  <td>{booking.phone}</td>
                </tr>
                <tr>
                  <th scope='row'>Event Type</th>
                  <td>{booking.eventType}</td>
                </tr>
                <tr>
                  <th scope='row'>Menu Style</th>
                  <td>{booking.menuStyle}</td>
                </tr>
                <tr>
                  <th scope='row'>No. of Guests</th>
                  <td>{booking.guests}</td>
                </tr>
                <tr>
                  <th scope='row'>Package Name</th>
                  <td>{booking.package}</td>
                </tr>
                <tr>
                  <th scope='row'>Event Date</th>
                  <td>{booking.eventDate}</td>
                </tr>
                <tr>
                  <th scope='row'>Event Time</th>
                  <td>{booking.eventTime}</td>
                </tr>
                <tr>
                  <th scope='row'>Booking status</th>
                  <td
                    style={
                      booking.bookingStatus
                        ? { backgroundColor: '#CCEABB' }
                        : { backgroundColor: '#ffa4a4' }
                    }
                  >
                    {booking.bookingStatus ? 'Confirmed' : 'Pending'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
