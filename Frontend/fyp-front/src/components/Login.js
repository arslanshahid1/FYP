import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../features/userSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({ setLoginUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { email: email, password: password };

    axios
      .post('http://localhost:5000/login', user)
      .then((res) => {
        if (res.data.message === 'Login successful') {
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(
            login({
              email: email,
              password: password,
              loggedIn: true,
            })
          );
          alert(res.data.message);
          // setEmail('');
          // setPassword('');
          navigate('/booking');
        } else if (res.data.message === 'Incorrect password') {
          alert('Incorrect password');
        } else {
          alert('User does not exist');
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className='signin mt-5 container'>
      <ToastContainer autoClose={3000} />
      <div className='row d-flex align-items-center'>
        <div className='col-sm-6 order-1  d-none d-sm-flex align-items-center'>
          <img src='/images/image4.jpg' width='100%' alt='' />
        </div>
        <div className='col-sm-6 order-2 signin-right d-flex align-items-center'>
          <div className='container'>
            <div className='row my-3'>
              <div className='col-6'>
                <h2>Sign in</h2>
              </div>
              <div className='col-6 text-right'>
                <a href='#' class='fa fa-facebook mr-2' aria-hidden='true'></a>
                <a href='#' class='fa fa-google' aria-hidden='true'></a>
              </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div class='form-group mb-2'>
                <input
                  type='email'
                  class='form-control p-4'
                  id='email'
                  placeholder='&#xf0e0; Email'
                  name='email'
                  value={email}
                  autoFocus
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className='validation'>*Required</div>
              </div>

              <div class='form-group mb-2'>
                <input
                  type='password'
                  class='form-control p-4'
                  id='password'
                  placeholder='&#xf023; Password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className='validation'>*Required</div>
              </div>
              <button
                type='submit'
                class='btn btn-primary my-3'
                disabled={!validateForm()}
              >
                Sign in
              </button>
              <div className='row my-3'>
                <div className='col-6'>
                  <div class='form-group form-check'>
                    <input
                      type='checkbox'
                      class='form-check-input'
                      id='exampleCheck1'
                    />
                    <label class='form-check-label' for='exampleCheck1'>
                      Remember me
                    </label>
                  </div>
                </div>
                <div className='col-6 text-right'>
                  <a href='##'>Forgot Password</a>
                </div>
              </div>
            </form>
            <p className='text-center'>
              Not a member? <Link to='/signup'>Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
