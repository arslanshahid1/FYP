import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminContactUs() {
  const [messages, setMessages] = useState([]);
  let num = 1;
  const getData = () => {
    axios
      // .get('http://localhost:4000/api/contacts')
      .get('https://arslan-fyp.herokuapp.com/api/contacts')
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, []);

  return (
    <div className='container admin-messages '>
      <div className=' d-flex flex-column flex-md-row justify-content-between my-3'>
        <h1 className='title'>Message from users</h1>
        <Link
          to='/admin'
          className='btn btn-outline-info d-flex align-items-center ml-md-2'
        >
          Go to dashboard
        </Link>
      </div>
      {messages.length === 0 ? (
        <p>No Messages yet</p>
      ) : (
        <div>
          <table class='table table-bordered table-striped '>
            <thead class='thead-dark '>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone No.</th>
                <th scope='col'>Message time</th>
                <th scope='col' className='col-sm-4'>
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr>
                  <th scope='row'>{num++}</th>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.phone}</td>
                  <td>{message.messageTime}</td>
                  <td>{message.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminContactUs;
