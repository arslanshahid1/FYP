import React from "react";
import BackToTop from "./BackToTop";

function Booking() {
  return (
    <div className="booking container">
      <h2 className="text-center mb-0 mt-5 diamond">
        <img src="images/diamond.svg" width="20px" alt="" srcset="" />
      </h2>
      <h1 className="text-center mb-5 display-4">Book an event now!</h1>

      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="fname">First Name</label>
            <input type="text" className="form-control" id="fname" />
          </div>
          <div className="form-group col-md-6">
            <label for="lname">Last Name</label>
            <input type="text" className="form-control" id="lname" />
          </div>
        </div>
        <div className="form-row mt-md-3">
          <div className="form-group col-md-6">
            <label for="email">E-mail</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Please enter your email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="03XX-XXXXXXX"
            />
          </div>
        </div>
        <div className="form-row mt-md-3">
          <div className="form-group col-md-4">
            <label for="event">Event Type</label>
            <select id="event" className="form-control">
              <option selected>Wedding</option>
              <option>Birthday Celebration</option>
              <option>Musical Nights</option>
              <option>Corporate Meetings</option>
            </select>
          </div>
          <div className="form-group col-md-4">
          <label for="menu">Menu Style</label>
            <select id="menu" className="form-control">
              <option selected>Table service</option>
              <option>Family style gathering</option>
              <option>Buffet service</option>
            </select>
          </div>
          <div className="form-group col-md-4">
            <label for="people">Number of people</label>
            <input type="number" className="form-control" id="people" />
          </div>
        </div>
        <div className="form-row mt-md-3">
          <div className="form-group col-md-6">
           
            <label for="package">
              Select Package
              <small> (See details in packages section)</small>
            </label>
            <select id="package" className="form-control">
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
          <div className="form-group col-md-6">
            <label for="date">Event date</label>
            <input type="date" className="form-control" id="date" />
          </div>
        </div>

        <button type="submit" className="btn btn-outline-dark w-100 mt-3 py-3">
          Submit
        </button>
      </form>

      <BackToTop />
    </div>
  );
}

export default Booking;
