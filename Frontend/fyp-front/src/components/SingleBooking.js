import React from 'react';
import { useNavigate } from 'react-router-dom';

function SingleBooking({ booking, num }) {
  const navigate = useNavigate();

  const seeDetails = () => {
    console.log(booking);
    localStorage.setItem('booking', JSON.stringify(booking));
    navigate('/singlebookingdetails');
  };

  return (
    <>
      <tr>
        <th scope='row'>{num}</th>
        <td>{booking.fname}</td>
        <td>{booking.email}</td>
        <td>{booking.phone}</td>
        <td>12-03-2022</td>
        <td>
          <button className='btn btn-primary' onClick={seeDetails}>
            See Details
          </button>
        </td>
      </tr>
    </>
  );
}

export default SingleBooking;
