import React from "react";
import './Pricing.css';

const Pricing = () => {
  return (
    <>
      <div className="pricing">
        <div className="container">
          <div className="pricing-content">
            <div className="header-section">
              <h1>OUR PRICING</h1>
              <span className="line"></span>
              <p>
                Call to action pricing table is really crucial to your for your
                business website. Make your bids stand-out
                <br /> with amazing options.
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <div className="top-sec">
                  <span className="span1">Economy</span>
                  <h3>$9.90</h3>
                  <span className="span2">Billing Per MONTH</span>
                </div>
                <div className="center-sec">
                  <div>
                    Bandwidth: <span>1GB</span>
                  </div>
                  <div>
                    Onlinespace: <span>50MB</span>
                  </div>
                  <div>
                    Support: <span>NO</span>
                  </div>
                  <div>
                    <span>1</span> Domain
                  </div>
                  <div>
                    <span>NO</span> Hidden Fees
                  </div>
                </div>
                <div className="bottom-sec">
                  <button>Join Now</button>
                </div>
              </div>
              <div className="card">
                <div className="top-sec">
                  <span className="span1">DELUXE</span>
                  <h3>$19.90</h3>
                  <span className="span2">Billing Per MONTH</span>
                </div>
                <div className="center-sec">
                  <div>
                    Bandwidth: <span>10GB</span>
                  </div>
                  <div>
                    Onlinespace: <span>500MB</span>
                  </div>
                  <div>
                    Support: <span>Yes</span>
                  </div>
                  <div>
                    <span>10</span> Domain
                  </div>
                  <div>
                    <span>NO</span> Hidden Fees
                  </div>
                </div>
                <div className="bottom-sec">
                  <button>Join Now</button>
                </div>
              </div>
              <div className="card">
                <div className="top-sec">
                  <span className="span1">ULTIMATE</span>
                  <h3>$29.90</h3>
                  <span className="span2">Billing Per MONTH</span>
                </div>
                <div className="center-sec">
                  <div>
                    Bandwidth: <span>100GB</span>
                  </div>
                  <div>
                    Onlinespace: <span>2 GB</span>
                  </div>
                  <div>
                    Support: <span>Yes</span>
                  </div>
                  <div>
                    <span>Unlimited</span> Domain
                  </div>
                  <div>
                    <span>NO</span> Hidden Fees
                  </div>
                </div>
                <div className="bottom-sec">
                  <button>Join Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;