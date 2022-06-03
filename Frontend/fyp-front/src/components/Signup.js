import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();

  const options = {
    autoClose: 3000,
    hideProgressBar: false,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
  };
  const options1 = {
    autoClose: 2000,
    hideProgressBar: false,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
    onClose: () => navigate('/login'),
  };

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const register = () => {
    const { name, email, password } = user;
    if (name && email && password) {
      axios
        .post('http://localhost:4000/api/users/register', user)
        .then((res) => {
          if (res.data.message === 'User with given email already exists.')
            toast.error(res.data.message, options);
          else {
            toast.success('Registered successfully', options1);
          }
        });
    } else {
      toast.error('Please fill all inputs', options);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className='signin mt-5 container'>
      <ToastContainer autoClose={5000} />
      <div className='row d-flex align-items-center'>
        <div className='col-sm-6 order-1  d-none d-sm-flex align-items-center'>
          <img src='/images/image5.jpg' width='100%' alt='' />
        </div>
        <div className='col-sm-6 order-2 signin-right d-flex align-items-center'>
          <div className='container'>
            <div className='row my-3'>
              <div className='col-6'>
                <h2>Create Account!</h2>
              </div>
              <div className='col-6 text-right'>
                <a href='##' class='fa fa-facebook mr-2' aria-hidden='true'></a>
                <a href='##' class='fa fa-google' aria-hidden='true'></a>
              </div>
            </div>
            <form action='#'>
              <div class='form-group mb-2'>
                <input
                  type='text'
                  class='form-control p-4'
                  id='staticEmail2'
                  placeholder='&#xF007; Name'
                  name='name'
                  value={user.name}
                  onChange={handleChange}
                  required
                  autoFocus
                />
                <div className='validation'>*Required</div>
              </div>
              <div class='form-group mb-2'>
                <input
                  type='email'
                  class='form-control p-4'
                  id='staticEmail2'
                  placeholder='&#xf0e0; Email'
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                  required
                />
                <div className='validation'>*Required</div>
              </div>
              <div class='form-group mb-2'>
                <input
                  type='password'
                  class='form-control p-4'
                  id='staticEmail2'
                  placeholder='&#xf023; Password'
                  name='password'
                  value={user.password}
                  onChange={handleChange}
                  required
                />
                <div className='validation'>*Required</div>
              </div>
            </form>
            <button
              type='submit'
              class='btn btn-primary my-3'
              onClick={register}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
