import React, { useEffect } from 'react';
import BackToTop from './BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 150,
    });
  }, []);

  return (
    <div className='contact container'>
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
          <form>
            <div class='form-group'>
              <label for='name'>Name</label>
              <input
                type='text'
                class='form-control'
                id='name'
                placeholder='Please enter your name'
              />
            </div>
            <div class='form-group'>
              <label for='email'>Email address</label>
              <input
                type='email'
                class='form-control'
                id='email'
                placeholder='Please enter your e-mail'
              />
            </div>
            <div class='form-group'>
              <label for='phone'>Phone Number</label>
              <input
                type='tel'
                class='form-control'
                id='phone'
                placeholder='Please enter your contact number'
              />
            </div>
            <div class='form-group'>
              <label for='message'>Message</label>
              <textarea
                class='form-control'
                id='message'
                rows='5'
                placeholder='Please enter your message here...'
              ></textarea>
            </div>
            <button type='submit' className='btn btn-outline-dark px-5 py-3'>
              Send
            </button>
          </form>
        </div>
        <div className='col-md-6 mt-5 mt-md-0'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d54440.18102191064!2d74.2563591414064!3d31.482626583670044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d31.512985599999997!2d74.3047168!4m5!1s0x39190170da362073%3A0xe7263689fcc13d28!2stopaz%20banquet!3m2!1d31.451590399999997!2d74.2717791!5e0!3m2!1sen!2s!4v1638544868109!5m2!1sen!2s'
            width='100%'
            height='400px'
            allowfullscreen=''
            loading='lazy'
          ></iframe>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}

export default Contact;
