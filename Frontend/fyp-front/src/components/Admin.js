import React, { useState, useEffect } from 'react';
import SingleBooking from './SingleBooking';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <>
      <div className='container'>
        <h1 className='display-3 mt-sm-5'>Admin Panel</h1>
        <div className='row admin-panel d-flex align-items-center  mt-3'>
          <div className='col-sm-6 my-2'>
            <div className='admin-button'>
              <Link to='/admin-bookings'>See bookings</Link>
            </div>
          </div>
          <div className='col-sm-6 my-2'>
            <div className='admin-button'>
              <Link to='/admin-messages'>See messages</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
