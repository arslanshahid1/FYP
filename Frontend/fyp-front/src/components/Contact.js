import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import BackToTop from './BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const navigate = useNavigate();
  const options = {
    autoClose: 3000,
    pauseOnHover: true,
    onClose: () => navigate('/'),
  };

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const datetime = new Date().toLocaleString();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;
    const messageTime = datetime;

    const contactData = { name, email, phone, message, messageTime };
    console.log(contactData);

    // axios.post('http://localhost:4000/api/contacts', contactData).then(() => {
    axios
      .post('https://arslan-fyp.herokuapp.com/api/contacts', contactData)
      .then(() => {
        toast.success(
          'Thank you for contacting us. We will get back to you soon.',
          options
        );
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 150,
    });
  }, []);

  return (
    <div className='contact container'>
      <ToastContainer />

      <h2 className='text-center mb-0 mt-5 diamond'>
        <img
          src='images/diamond.svg'
          width='20px'
          alt=''
          srcSet=''
          data-aos='fade-down'
        />
      </h2>
      <h1 className='text-center mb-5 display-4' data-aos='fade-down'>
        Reach out to us
      </h1>

      <p className='text-center ' data-aos='fade-up'>
        Our friendly staff is happy to set up an appointment and answer any
        questions that you may have. We can be reached by phone, text or email
        and will generally respond within 24 hours. We know that this may be one
        of the most important days of a person’s life and want to make sure
        every question you have is answered and everything is to your liking. We
        look forward to speaking with you soon!
      </p>

      <div className='row mt-5' data-aos='fade-up'>
        <div className='col-md-6'>
          <form onSubmit={submitHandler}>
            <div class='form-group'>
              <label for='name'>Name</label>
              <input
                type='text'
                class='form-control'
                id='name'
                placeholder='Please enter your name'
                ref={nameRef}
                required
              />
            </div>
            <div class='form-group'>
              <label for='email'>Email address</label>
              <input
                type='email'
                class='form-control'
                id='email'
                placeholder='Please enter your e-mail'
                ref={emailRef}
                required
              />
            </div>
            <div class='form-group'>
              <label for='phone'>Phone Number</label>
              <input
                type='tel'
                class='form-control'
                id='phone'
                placeholder='Please enter your contact number'
                ref={phoneRef}
                required
              />
            </div>
            <div class='form-group'>
              <label for='message'>Message</label>
              <textarea
                class='form-control'
                id='message'
                rows='5'
                placeholder='Please enter your message here...'
                ref={messageRef}
                required
              ></textarea>
            </div>
            <button type='submit' className='btn btn-outline-dark px-5 py-3'>
              Send
            </button>
          </form>
        </div>
        <div className='col-md-6 mt-5 mt-md-0'>
          <iframe
            title='map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.494739936157!2d74.26948833593885!3d31.45165855766268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190170da362073%3A0xe7263689fcc13d28!2sTopaz%20Event%20Complex!5e0!3m2!1sen!2s!4v1655133485297!5m2!1sen!2s'
            width='600'
            height='450'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}

export default Contact;
