import React from 'react'
import BackToTop from './BackToTop'

function Menu() {
    return (
        <div className="menu container">
            <h2 className="text-center mb-0 mt-5 diamond"><img src="images/diamond.svg" width="20px" alt="" srcset="" /></h2>
            <h1 className="text-center mb-5 display-4">Menu Styles</h1>

            <div className="row family">
                <div className="col-md-7">
                    <img src="/images/familyStyle.webp" width="100%" alt="" />
                </div>
                <div className="col-md-5 mt-3 mt-md-0 d-flex flex-column align-items-center justify-content-center">
                    <h4>Family style gatherings</h4>
                    <p className="mt-3">Bringing family and friends together, family-style catering is quickly gaining popularity amongst banquet hall clients. Your guests will be greeted with a one of a kind appetizer and salad collection. Sharing the food helps guests become acquainted with one another and sets a social mood.</p>
                </div>
            </div>
            <div className="row table">
                <div className="col-md-7 order-md-2">
                    <img src="/images/tableService.webp" width="100%" alt="" />
                </div>
                <div className="col-md-5 mt-3 mt-md-0 order-md-1 d-flex flex-column align-items-center justify-content-center">
                    <h4>Table service</h4>
                    <p className="mt-3">Bringing specific focus on every dish, the table service is the custom-tailored approach to meet every person’s specific needs. Each plate is designed and cooked to perfection. The wide variety of dishes offered by Aurora’s chefs can be combined together to create endless plate combinations.</p>
                </div>
            </div>
            <div className="row buffet">
                <div className="col-md-7">
                    <img src="/images/buffet.webp" width="100%" alt="" />
                </div>
                <div className="col-md-5 mt-3 mt-md-0 d-flex flex-column align-items-center justify-content-center">
                    <h4>Buffet service</h4>
                    <p className="mt-3">The easiest and most cost-effective approach to hosting hundreds of guests. Our buffet is like no other. The food we serve is always the same quality, but the serving method changes. Due to the ease of serving a Buffet-Style menu, we are able to offer the same quality food as our other catering styles, but at a lower cost. Our buffet style is popular for all event types ranging from weddings to corporate events, making it the most convenient option.</p>
                </div>
            </div>

            <div className="menu-gallery">
                <h2 className="text-center mb-0 mt-5 diamond"><img src="images/diamond.svg" width="20px" alt="" srcset="" /></h2>
                <h1 className="text-center mb-5 display-4">Menu Gallery</h1>

                <div className="row">
                    <div className="col-sm-6 col-md-3 mt-3 mt-md-0" data-toggle="modal" data-target="#exampleModal">
                        <div className="menu1 col-12 px-0">
                            <div className="overlay"></div>
                            <img src="/images/entrees.webp" width="100%" alt="" />
                            <div className="content">
                                <h2>Entrees</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mt-3 mt-md-0" data-toggle="modal" data-target="#exampleModal">
                        <div className="menu1 col-12 px-0">
                            <div className="overlay"></div>
                            <img src="/images/starters.webp" width="100%" alt="" />
                            <div className="content">
                                <h2>Starters</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mt-3 mt-md-0" data-toggle="modal" data-target="#exampleModal">
                        <div className="menu1 col-12 px-0">
                            <div className="overlay"></div>
                            <img src="/images/salads.webp" width="100%" alt="" />
                            <div className="content">
                                <h2>Salads</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 mt-3 mt-md-0" data-toggle="modal" data-target="#exampleModal">
                        <div className="menu1 col-12 px-0">
                            <div className="overlay"></div>
                            <img src="/images/desserts.webp" width="100%" alt="" />
                            <div className="content">
                                <h2>Desserts</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
   
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      
      <div className="modal-body">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="images/entree1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/entree2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/entree3.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
 <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
      </div>
     
    </div>
  </div>
</div>


            <BackToTop/>
        </div>
    )
}

export default Menu
