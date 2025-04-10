import React from "react";
import './Navs.css';

const Navs = () => {
  return (
    <>
      <div className="nav-header">
        <div className="container">
          <div className="content">
            <h2>dorsin</h2>
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Home">Services</a>
              </li>
              <li>
                <a href="#Home">Features</a>
              </li>
              <li>
                <a href="#Home">Pricing</a>
              </li>
              <li>
                <a href="#Home">Team</a>
              </li>
              <li>
                <a href="#Home">Blog</a>
              </li>
              <li>
                <a href="#Home">Contact</a>
              </li>
            </ul>
            <button>Try it Free</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navs;