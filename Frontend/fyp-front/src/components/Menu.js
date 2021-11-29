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


            <BackToTop/>
        </div>
    )
}

export default Menu
