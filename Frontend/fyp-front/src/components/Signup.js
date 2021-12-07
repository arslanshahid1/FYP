import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='signin mt-5 container'>
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
                <a href='#' class='fa fa-facebook mr-2' aria-hidden='true'></a>
                <a href='#' class='fa fa-google' aria-hidden='true'></a>
              </div>
            </div>
            <form action='#'>
              <div class='form-group mb-2'>
                <input
                  type='text'
                  class='form-control p-4'
                  id='staticEmail2'
                  placeholder='&#xF007; Name'
                />
              </div>
              <div class='form-group mb-2'>
                <input
                  type='email'
                  class='form-control p-4'
                  id='staticEmail2'
                  placeholder='&#xf0e0; Email'
                />
              </div>
              <div class='form-group mb-2'>
                <input
                  type='password'
                  class='form-control p-4'
                  id='staticEmail2'
                  placeholder='&#xf023; Password'
                />
              </div>
            </form>
            <button type='submit' class='btn btn-primary my-3'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
