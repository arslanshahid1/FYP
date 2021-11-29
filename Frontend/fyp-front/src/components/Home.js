import { useEffect, useState } from "react";
import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function LandingPage() {
    // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
    return (
        <>

            {showButton && (
                <button onClick={scrollToTop} className="btn btn-dark back-to-top">
                &#8673;
                </button>
            )}
            <div className="landing container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-12">
                            <img src="images/image6.jpg" width="100%" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-12 mt-5">
                            <h5>The best for couples</h5>
                            <h1 className="display-3 mt-3">Plan and book your wedding</h1>
                            <button className="btn btn-outline-dark py-3 px-4 mt-3">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

           

            <div className="advantages container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-12">
                            <h5 >Why Us</h5>
                            <h2 className="mb-5">Our Advantages</h2>
                            <h4>Save time</h4>
                            <p>The services provided by our wedding planners can save you a lot of time.</p>
                            <h4>Professional approach</h4>
                            <p>We will thoroughly plan every element of your wedding.</p>
                            <h4>Team of wedding experts</h4>
                            <p>Bridal employs the best wedding experts in Los Angeles, CA.</p>
                            <h4>Acceptable prices</h4>
                            <p>Our clients value our affordable pricing policy and great service.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="col-12">
                            <img src="images/image5.jpg" width="100%" alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="services container">
                <h2 className="text-center">Our Services</h2>
                <h6 className="text-center m-auto">
                From spacious halls to expansive indoor and outdoor spaces, we are equipped to accommodate banquets, receptions, weddings and official ceremonies.
                </h6>
                <div className="row my-5">
                    <div className="col-md-2 col-6 text-center service p-3 d-flex align-items-center flex-column justify-content-center">
                        <img src="images/Floral-Arrangement.svg" width="60px" alt="" srcset="" />
                        <h5>Flower Arrangement</h5>
                    </div>
                    <div className="col-md-2 col-6 text-center service p-3 d-flex align-items-center flex-column justify-content-center">
                        <img src="images/Catering.svg" width="60px" alt="" srcset="" />
                        <h5>Catering</h5>
                    </div>
                    <div className="col-md-2 col-6 text-center service p-3 d-flex align-items-center flex-column justify-content-center">
                        <img src="images/Wedding-Cake.svg" width="60px" alt="" srcset="" />
                        <h5>Wedding Cakes</h5>
                    </div>
                    <div className="col-md-2 col-6 text-center service p-3 d-flex align-items-center flex-column justify-content-center">
                        <img src="images/Car-Rental.svg" width="60px" alt="" srcset="" />
                        <h5>Car Rental</h5>
                    </div>
                    <div className="col-md-2 col-6 text-center service p-3 d-flex align-items-center flex-column justify-content-center">
                        <img src="images/Accomodation.svg" width="60px" alt="" srcset="" />
                        <h5>Accomodation</h5>
                    </div>
                    <div className="col-md-2 col-6 text-center service p-3 d-flex align-items-center flex-column justify-content-center">
                        <img src="images/Photography.svg" width="60px" alt="" srcset="" />
                        <h5>Photography</h5>
                    </div>
                </div>
            </div>

            <div className="event-types">
                <Slider {...settings}>
                    <div className="col event">
                        <div className="overlay"></div>
                        <img src="images/iftar.jpg"  alt="" srcset="" />
                        <div className="content text-center">
                            <h3>Iftaar</h3>
                            <p>Indulge in our delicious Iftar buffets during the month of Ramadan, with ample spaces in our banquets and restaurant to host Iftar dinners.</p>
                        </div>
                    </div>
                    <div className="col event">
                        <div className="overlay"></div>
                        <img src="images/family-events.jpg"  alt="" srcset="" />
                        <div className="content text-center">
                            <h3>Family Events</h3>
                            <p>Celebrate family milestones with an unforgettable experience in our venues, where you can choose your own personalized menu, setting, decor and group activites</p>
                        </div>
                    </div>
                    <div className="col event">
                        <div className="overlay"></div>
                        <img src="images/Musical_Nights.jpg"  alt="" srcset="" />
                        <div className="content text-center">
                            <h3>Musical Nights</h3>
                            <p>Host musical nights in one of our spacious and grand banquets for a lively night of music, joy and laughter.</p>
                        </div>
                    </div>
                    <div className="col event">
                        <div className="overlay"></div>
                        <img src="images/bday.jpg"  alt="" srcset="" />
                        <div className="content text-center">
                            <h3>Birthday Celebrations</h3>
                            <p>Celebrate your loved ones' birthdays in a magical outdoor or indoor setting.</p>                 
                       </div>
                    </div>
                    </Slider>
            </div>
                   
        </>
    )
}

export default LandingPage
