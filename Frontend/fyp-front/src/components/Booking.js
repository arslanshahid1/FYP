import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import BackToTop from './BackToTop';

function Booking() {
  const navigate = useNavigate();

  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const eventTypeRef = useRef();
  const menuStyleRef = useRef();
  const guestsRef = useRef();
  const packageRef = useRef();
  const eventDateRef = useRef();
  const eventTimeRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const fname = fnameRef.current.value;
    const lname = lnameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const eventType = eventTypeRef.current.value;
    const menuStyle = menuStyleRef.current.value;
    const guests = guestsRef.current.value;
    const packageInput = packageRef.current.value;
    const eventDate = eventDateRef.current.value;
    const eventTime = eventTimeRef.current.value;

    const bookingdata = {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      eventType: eventType,
      menuStyle: menuStyle,
      guests: guests,
      packageInput: packageInput,
      eventDate: eventDate,
      eventTime: eventTime,
    };

    fetch(
      'https://fyp-booking-form-default-rtdb.firebaseio.com/bookings.json',
      {
        method: 'POST',
        body: JSON.stringify(bookingdata),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <div className='booking container'>
      <h2 className='text-center mb-0 mt-5 diamond'>
        <img src='images/diamond.svg' width='20px' alt='' srcSet='' />
      </h2>
      <h1 className='text-center mb-5 display-4'>Book an event now!</h1>

      <form onSubmit={submitHandler}>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label for='fname'>First Name</label>
            <input
              type='text'
              className='form-control'
              id='fname'
              ref={fnameRef}
              required
            />
          </div>
          <div className='form-group col-md-6'>
            <label for='lname'>Last Name</label>
            <input
              type='text'
              className='form-control'
              id='lname'
              ref={lnameRef}
              required
            />
          </div>
        </div>
        <div className='form-row mt-md-3'>
          <div className='form-group col-md-6'>
            <label for='email'>E-mail</label>
            <input
              type='email'
              className='form-control'
              id='email'
              placeholder='Please enter your email'
              ref={emailRef}
              required
            />
          </div>
          <div className='form-group col-md-6'>
            <label for='phone'>Phone Number</label>
            <input
              type='tel'
              className='form-control'
              id='phone'
              placeholder='03XX-XXXXXXX'
              ref={phoneRef}
              required
            />
          </div>
        </div>
        <div className='form-row mt-md-3'>
          <div className='form-group col-md-4'>
            <label for='event'>Event Type</label>
            <select id='event' className='form-control' ref={eventTypeRef}>
              <option selected>Wedding</option>
              <option>Birthday Celebration</option>
              <option>Musical Nights</option>
              <option>Corporate Meetings</option>
            </select>
          </div>
          <div className='form-group col-md-4'>
            <label for='menu'>Menu Style</label>
            <select id='menu' className='form-control' ref={menuStyleRef}>
              <option selected>Table service</option>
              <option>Family style gathering</option>
              <option>Buffet service</option>
            </select>
          </div>
          <div className='form-group col-md-4'>
            <label for='people'>Number of guests</label>
            <input
              type='number'
              className='form-control'
              id='guests'
              ref={guestsRef}
              required
            />
          </div>
        </div>
        <div className='form-row mt-md-3'>
          <div className='form-group col-md-4'>
            <label for='package'>
              Select Package
              <small> (See details in packages section)</small>
            </label>
            <select id='package' className='form-control' ref={packageRef}>
              <option selected>WM-package1</option>
              <option>WM-package2</option>
              <option>WM-package3</option>
              <option>WM-package4</option>
              <option>WM-package5</option>
              <option>WM-package6</option>
              <option>CM-package1</option>
              <option>CM-package2</option>
              <option>CM-package3</option>
            </select>
          </div>
          <div className='form-group col-md-4'>
            <label for='date'>Event date</label>
            <input
              type='date'
              className='form-control'
              id='date'
              ref={eventDateRef}
              required
            />
          </div>
          <div className='form-group col-md-4'>
            <label for='package'>Time Slot</label>
            <select id='timing' className='form-control' ref={eventTimeRef}>
              <option selected>Afternoon (1pm - 4pm)</option>
              <option>Night (7pm - 10pm)</option>
            </select>
          </div>
        </div>

        <button type='submit' className='btn btn-outline-dark w-100 mt-3 py-3'>
          Submit
        </button>
      </form>

      <BackToTop />
    </div>
  );
}

export default Booking;
