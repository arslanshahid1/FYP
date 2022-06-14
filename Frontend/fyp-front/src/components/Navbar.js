import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // });

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 550) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };

  const handleLogout = (e) => {
    localStorage.removeItem('id');
    dispatch(logout());
  };

  let x = ['navbar'];
  if (scrolled) {
    x.push('scrolled');
  }
  return (
    // <div className={x.join(' ')}>
    <nav className='navbar navbar-expand-lg navbar-light   '>
      <div className={`{x.join(' ')} container`}>
        <Link className='navbar-brand' to='/'>
          Bridal
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/menu'>
                Menu
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/packages'>
                Packages
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact Us
              </Link>
            </li>
          </ul>

          {user ? (
            <div className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='##'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-expanded='false'
              >
                Profile
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link className='dropdown-item' to='/profile'>
                  Your Profile
                </Link>
                <Link
                  className='dropdown-item'
                  to='/'
                  onClick={(e) => handleLogout(e)}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link
              to='/login'
              className='btn btn-outline-dark my-2 mr-2 my-sm-0 px-4 py-2'
            >
              Login
            </Link>
          )}

          <Link to='/booking' className='btn btn-dark my-2 my-sm-0 px-4 py-2'>
            Book Now
          </Link>
        </div>
      </div>
    </nav>
    // </div>
  );
}

export default Navbar;
