import React from "react";
import './Footer.css';
import paymentImg from '../../assets/payment.png';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="f-one">
            <div>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-google-plus"></i>
              <i className="fa-brands fa-xbox"></i>
            </div>
            <div>
              <i className="fa-solid fa-phone"></i>+91 123 4556 789
            </div>
            <div>
              <i className="fa-regular fa-envelope-open"></i>Support@info.com
            </div>
          </div>
        </div>
        <div className="f-two">
          <div className="container">
            <div className="f-two-content">
              <div>
                <h4>DORSIN</h4>
                <div>
                  <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Information</h4>
                <div>
                  <ul>
                    <li>Terms & Condition</li>
                    <li>About us</li>
                    <li>Jops</li>
                    <li>Bookmarks</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Support</h4>
                <div>
                  <ul>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>Disscusion</li>
                  </ul>
                </div>
              </div>
              <div>
                <h4>Subscribe</h4>
                <p>
                  In an ideal world this text wouldn’t exist, a client would
                  acknowledge the importance of having web copy before the
                  design starts.
                </p>
                <input type="email" placeholder="Email"></input>
              </div>
            </div>
          </div>
        </div>
        <div className="f-three">
          <div className="container">
            <div className="f-three-content">
              <p>2025 © Dorsin - Themesbrand</p>
              <img src={paymentImg} alt="#"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;