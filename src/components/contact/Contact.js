import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="header-section">
              <h1>GET IN TOUCH</h1>
              <span className="line"></span>
              <p>
                We thrive when coming up with innovative ideas but also
                understand that a smart concept should be
                <br /> supported with faucibus sapien odio measurable results.
              </p>
            </div>
            <div className="main-content">
              <div className="part-one">
                <h4>Office Address 1:</h4>
                <span>4461 Cedar Street Moro, AR 72368</span>
                <h4>Office Address 2:</h4>
                <span>2467 Swick Hill Street New Orleans, LA 70171</span>
                <h4>Working Hours:</h4>
                <span>9:00AM To 6:00PM</span>
              </div>
              <div className="part-two">
                <form>
                  <input type="text" placeholder="Your Name*"></input>
                  <input type="email" placeholder="Your Email*"></input>
                  <input type="text" placeholder="Your Subject.."></input>
                  <textarea placeholder="Your Message..."></textarea>
                </form>
                <div className="btn-div">
                  <button>Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;