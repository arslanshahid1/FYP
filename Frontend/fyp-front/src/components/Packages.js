import React, { useEffect } from 'react';
import BackToTop from './BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Packages() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 150,
    });
  }, []);
  return (
    <div className='packages container'>
      <h2 className='text-center mb-0 mt-5 diamond' data-aos='fade-down'>
        <img src='images/diamond.svg' width='20px' alt='' srcset='' />
      </h2>
      <h1 className='text-center mb-5 display-4' data-aos='fade-down'>
        Wedding Menu
      </h1>

      <div className='row'>
        <div className='col-sm-6 col-md-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>WM Package 1</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 700 Only</h6>
            <ul>
              <li>Chicken Korma / Chicken Karahi</li>
              <li>Chicken Biryani / Chicken Pulao</li>
              <li>Roghni Naan</li>
              <li>Raita</li>
              <li>Fresh green salad</li>
              <li>Dessert (1 from selection)</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>WM Package 2</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 900 Only</h6>
            <ul>
              <li>Chicken Korma / Chicken Achari</li>
              <li>Mutton Biryani / Mutton Pulao</li>
              <li>Roghni Naan</li>
              <li>Raita</li>
              <li>Fresh green salad</li>
              <li>Dessert (1 from selection)</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>WM Package 3</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 800 Only</h6>
            <ul>
              <li>Mutton Korma</li>
              <li>Chicken Biryani / Kashmiri Pulao</li>
              <li>Roghni Naan</li>
              <li>Raita</li>
              <li>Fresh green salad</li>
              <li>Dessert (1 from selection)</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>WM Package 4</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 850 Only</h6>
            <ul>
              <li>Mutton Karahi</li>
              <li>Chicken Biryani / Chicken Pulao</li>
              <li>Roghni Naan</li>
              <li>Raita</li>
              <li>Fresh green salad</li>
              <li>Dessert (1 from selection)</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>WM Package 5</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 1000 Only</h6>
            <ul>
              <li>Chicken Achari / Chicken Karahi</li>
              <li>Puri & Halwa Suji / Pathoora</li>
              <li>Channa Bhaji</li>
              <li>Roghni Naan</li>
              <li>Raita</li>
              <li>Fresh green salad</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
        <div className='col-sm-6 col-md-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>WM Package 6</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 1100 Only</h6>
            <ul>
              <li>Puri or Pathoora, Channa, Bhajji</li>
              <li>Halwa Sujji</li>
              <li>Chicken Sheekh Kebab / Chicken Tikka Boti</li>
              <li>Roghni Naan</li>
              <li>Raita</li>
              <li>Fresh green salad</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
      </div>

      <h2 className='text-center mb-0 mt-5 diamond' data-aos='fade-up'>
        <img src='images/diamond.svg' width='20px' alt='' srcset='' />
      </h2>
      <h1 className='mb-5 text-center display-4' data-aos='fade-up'>
        Dessert Selection
      </h1>
      <div className='row text-center d-flex'>
        <div
          className='col-6 col-sm-4 col-lg-2 my-1 d-flex flex-column  align-items-stretch'
          data-aos='zoom-in'
        >
          <div className='col-12 dessert p-3'>
            <h4>Fruit Trifle</h4>
          </div>
        </div>
        <div
          className='col-6 col-sm-4 col-lg-2 my-1 d-flex flex-column  align-items-stretch '
          data-aos='zoom-in'
        >
          <div className='col-12 dessert p-3'>
            <h4>Firni</h4>
          </div>
        </div>
        <div
          className='col-6 col-sm-4 col-lg-2 my-1 d-flex flex-column  align-items-stretch'
          data-aos='zoom-in'
        >
          <div className='col-12 dessert p-3'>
            <h4>Kulfa</h4>
          </div>
        </div>
        <div
          className='col-6 col-sm-4 col-lg-2 my-1 d-flex flex-column  align-items-stretch'
          data-aos='zoom-in'
        >
          <div className='col-12 dessert p-3'>
            <h4>Icecream</h4>
          </div>
        </div>
        <div
          className='col-6 col-sm-4 col-lg-2 my-1 d-flex flex-column  align-items-stretch'
          data-aos='zoom-in'
        >
          <div className='col-12 dessert p-3'>
            <h4>Falooda</h4>
          </div>
        </div>
        <div
          className='col-6 col-sm-4 col-lg-2 my-1 d-flex flex-column  align-items-stretch'
          data-aos='zoom-in'
        >
          <div className='col-12 dessert p-3'>
            <h4>Zarda</h4>
          </div>
        </div>
      </div>

      <h2 className='text-center mb-0 mt-5 diamond' data-aos='fade-down'>
        <img src='images/diamond.svg' width='20px' alt='' srcset='' />
      </h2>
      <h1 className='text-center mb-5 display-4' data-aos='fade-down'>
        Corporate Menu
      </h1>

      <div className='row'>
        <div className='col-sm-6 col-lg-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>CM Package 1</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 1500 Only</h6>
            <ul>
              <li>Prawn's Tempura</li>
              <li>Chicken Boti</li>
              <li>Chicken Seekh Kebab</li>
              <li>Mutton Qorma</li>
              <li>Chicken Ginger</li>
              <li>Mutton Pulao</li>
              <li>Assorted Salads</li>
              <li>Green Tea / Coffee / Tea</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
        <div className='col-sm-6 col-lg-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>CM Package 2</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 1600 Only</h6>
            <ul>
              <li>Deep fried prawns</li>
              <li>Mutton lamb chops</li>
              <li>Chicken cheese boti</li>
              <li>Mutton kunna</li>
              <li>Chicken karahi</li>
              <li>Chicken chowmein</li>
              <li>Assorted Salads</li>
              <li>Green Tea / Coffee / Tea</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
        <div className='col-sm-6 col-lg-4 mt-3 d-flex align-items-stretch' data-aos='zoom-in'>
          <div className='col-12 wm-proposal p-5'>
            <h3>CM Package 3</h3>
            <h6 className='font-weight-bold'>Price per head: Rs 1800 Only</h6>
            <ul>
              <li>Batter fried prawns</li>
              <li>Fish tikka</li>
              <li>Chicken boti (boneless)</li>
              <li>Mutton karahi</li>
              <li>Chicken jalfarezi</li>
              <li>Fried chicken</li>
              <li>Szchwan chicken st</li>
              <li>Fried chicken</li>
              <li>Assorted Salads</li>
              <li>Green Tea / Coffee / Tea</li>
            </ul>
            <button className='btn btn-dark'>Book Now</button>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}

export default Packages;
