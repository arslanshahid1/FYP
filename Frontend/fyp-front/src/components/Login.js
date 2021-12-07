import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='signin mt-5 container'>
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
            <form>
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
              <button type='submit' class='btn btn-primary my-3'>
                Sign in
              </button>
              <div className='row my-3'>
                <div className='col-6'>
                  <div class='form-group form-check'>
                    <input type='checkbox' class='form-check-input' id='exampleCheck1' />
                    <label class='form-check-label' for='exampleCheck1'>
                      Remember me
                    </label>
                  </div>
                </div>
                <div className='col-6 text-right'>
                  <a href=''>Forgot Password</a>
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
