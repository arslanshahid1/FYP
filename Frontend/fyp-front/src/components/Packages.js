import React, { useEffect } from 'react';
import BackToTop from './BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { packagesDetails, desserts, corporateMenu } from './packagesDetails';

function Packages() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 150,
    });
  }, []);
  return (
    <div className='packages container'>
      {/* ---------------------Wedding Menu ---------------- */}
      <h2 className='text-center mb-0 mt-5 diamond' data-aos='fade-down'>
        <img src='images/diamond.svg' width='20px' alt='' srcSet='' />
      </h2>
      <h1 className='text-center mb-0 display-4' data-aos='fade-down'>
        Wedding Menu
      </h1>
      <div className='row'>
        {packagesDetails.map((packageDetail) => (
          <div
            className='col-sm-6 col-md-4 mt-3 mt-sm-5 d-flex '
            data-aos='zoom-in'
          >
            <div className='col-12 d-flex flex-column justify-content-between  wm-proposal p-5'>
              <h3>{packageDetail.title}</h3>
              <h6 className='font-weight-bold'>
                Price per head: Rs {packageDetail.price} Only
              </h6>
              <ul>
                {packageDetail.dishes.map((dish) => (
                  <li>{dish}</li>
                ))}
              </ul>
              <button className='btn btn-dark'>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* ------------------------ Desserts ---------------- */}
      <h2 className='text-center mb-0 mt-5 diamond' data-aos='fade-up'>
        <img src='images/diamond.svg' width='20px' alt='' srcSet='' />
      </h2>
      <h1 className='mb-5 text-center display-4' data-aos='fade-up'>
        Dessert Selection
      </h1>
      <div className='row text-center d-flex'>
        {desserts.map((dessert) => (
          <div
            className='col-6 col-sm-4 col-lg-2 my-1 d-flex flex-column  align-items-stretch'
            data-aos='zoom-in'
          >
            <div className='col-12 dessert p-3'>
              <h4>{dessert}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* --------------------- Corporate Menu ------------------------- */}
      <h2 className='text-center mb-0 mt-5 diamond' data-aos='fade-down'>
        <img src='images/diamond.svg' width='20px' alt='' srcSet='' />
      </h2>
      <h1 className='text-center mb-5 display-4' data-aos='fade-down'>
        Corporate Menu
      </h1>

      <div className='row'>
        {corporateMenu.map((corporate) => (
          <div className='col-sm-6 col-lg-4 mt-3 d-flex' data-aos='zoom-in'>
            <div className='col-12 d-flex flex-column justify-content-between  wm-proposal p-5'>
              <h3>{corporate.title}</h3>
              <h6 className='font-weight-bold'>
                Price per head: Rs {corporate.price} Only
              </h6>
              <ul>
                {corporate.dishes.map((dish) => (
                  <li>{dish}</li>
                ))}
              </ul>
              <button className='btn btn-dark'>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <BackToTop />
    </div>
  );
}

export default Packages;
