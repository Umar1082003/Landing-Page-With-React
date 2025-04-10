import React from "react";
import './WorkProgress.css';

const WorkProgress = () => {
  return (
    <>
      <div className="workProgress">
        <div className="container">
          <div className="work-content">
            <div className="header-section">
              <h1>WORK PROGRESS</h1>
              <span className="line"></span>
              <p>
                It is a long established fact that create category leading brand
                experiences a reader will be distracted by
                <br /> the readable content of a page when looking at its
                layout.
              </p>
            </div>
            <div className="main-content">
              <div className="item">
                <i className="fa-solid fa-pen-fancy"></i>
                <h3>Tell us what you need</h3>
                <p>The Big Oxmox advised her not to do so.</p>
              </div>
              <span className="l">
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <div className="item">
                <i className="fa-solid fa-id-card"></i>
                <h3>Get free quotes</h3>
                <p>Little Blind Text didn’t listen.</p>
              </div>
              <span className="l">
                <i className="fa-solid fa-angle-right"></i>
              </span>
              <div className="item">
                <i className="fa-solid fa-bullseye"></i>
                <h3>Deliver high quality product</h3>
                <p>When she reached the first hills.</p>
              </div>
              <button>
                Get Started <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="getStarted-content">
          <div className="overlay">
            <div className="content">
              <h2>Let`s Get Started</h2>
              <span className="line"></span>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the
                <br /> blind texts.
              </p>
              <button>
                Get Started <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkProgress;