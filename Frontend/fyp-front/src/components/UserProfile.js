import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useEffect, useState } from 'react';

function UserProfile() {
  const user = useSelector(selectUser);
  const userID = localStorage.getItem('id');
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:4000/api/bookings/${userID}`).then((res) => {
      let comingUserData = res.data;
      setUserData({ ...comingUserData });
    });
  }, []);

  return (
    <div className='container'>
      <h1 className='display-3'>User Profile</h1>
      <p>{user ? userID : ''}</p>
      <p>{userData.fname}</p>
      <p>{userData.lname}</p>
    </div>
  );
}

export default UserProfile;
