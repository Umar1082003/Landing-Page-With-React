import React from "react";
import './Services.css';

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <div className="services-content">
            <div className="header-section">
              <h1>OUR SERVICES</h1>
              <p>
                We craft digital, graphic and dimensional thinking, to create
                category leading brand experiences that <br />
                have meaning and add a value for our clients.
              </p>
            </div>
            <div className="main-content">
              <div className="items">
                <div className="item">
                  <i className="fa-solid fa-gem"></i>
                  <h4>Digital Design</h4>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Moltin gives you the
                    platform.
                  </p>
                </div>
                <div className="item">
                  <i className="fa-solid fa-display"></i>
                  <h4>Strategy Solutions</h4>
                  <p>
                    Credibly brand standards compliant users without extensible
                    services. Anibh euismod tincidunt ut laoreet.
                  </p>
                </div>
                <div className="item">
                  <i className="fa-solid fa-hippo"></i>
                  <h4>Unlimited Colors</h4>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean necessary regelialia.
                  </p>
                </div>
                <div className="item">
                  <i className="fa-solid fa-atom"></i>
                  <h4>Awesome Support</h4>
                  <p>
                    It is a paradisematic country, in which roasted parts of
                    sentences fly into your mouth leave for the far World.
                  </p>
                </div>
                <div className="item">
                  <i className="fa-regular fa-newspaper"></i>
                  <h4>Truly Multipurpose</h4>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
                <div className="item">
                  <i className="fa-solid fa-plane-up"></i>
                  <h4>Easy to customize</h4>
                  <p>
                    Question Marks and devious Semikoli, but the Little Blind
                    Text didn’t listen. She packed her seven versalia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;