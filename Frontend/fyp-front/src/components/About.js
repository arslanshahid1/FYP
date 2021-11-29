import React from 'react'
import BackToTop from './BackToTop'

function About() {
    return (
        <div className="about container">
            <h2 className="text-center mb-0 mt-5 diamond"><img src="images/diamond.svg" width="20px" alt="" srcset="" /></h2>
            <h1 className="text-center mb-5 display-4">Our Story</h1>
            <img src="images/our-story.webp" width="100%" alt="" srcset="" />
            <p className=" mt-3">Aurora began in 2018 where it was purchased from former Flamingo owners and renovated. The venue went under an extensive inside and out renovation which lasted approximately 3 years. With the help of expert interior designers, architects, and sound engineers we were able to create the perfect hall. Something that was versatile enough to change and make unique, but something which was composed of many details, whether it be physical decor or technological. We made sure to create something that exceeds the expectations of our most demanding customers, yet be extremely simple to plan events in.</p>

            <h2 className="text-center mb-0 mt-5 diamond"><img src="images/diamond.svg" width="20px" alt="" srcset="" /></h2>
            <h1 className="text-center mb-5 display-4">Our Values</h1>

            <div className="row values d-flex justify-content-center">
                <div className="col-sm-6 col-md-4 my-2 text-center">
                    <div className="col-12">
                        <img src="/images/value1.svg" width="80px" alt="" />
                        <h3 className="my-3">Commitment to customers</h3>
                        <p>Customers are the lifeblood of any business. This fact is reflected</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 my-2 text-center">
                    <div className="col-12">
                        <img src="/images/value2.svg" width="80px" alt="" />
                        <h3 className="my-3">Quality</h3>
                        <p>Quality means paying attention to small details and doing a great job even when no one may see it</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 my-2 text-center">
                    <div className="col-12">
                        <img src="/images/value3.svg" width="80px" alt="" />
                        <h3 className="my-3">Innovation</h3>
                        <p>We are committed to being the best and staying the best, by coming up with fresh ideas to accommodate our customer’s ever changing needs.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 my-2 text-center">
                    <div className="col-12">
                        <img src="/images/value4.svg" width="80px" alt="" />
                        <h3 className="my-3">Passion</h3>
                        <p>Passion breeds quality, because when you love what you do, it becomes easier to do your job well.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4 my-2 text-center">
                    <div className="col-12">
                        <img src="/images/value5.svg" width="80px" alt="" />
                        <h3 className="my-3">Trust</h3>
                        <p>We believe in building relationships with our customers. The bedrock to long lasting relationships is trust.</p>
                    </div>
                </div>
            </div>
            <BackToTop/>
        </div>
    )
}

export default About
