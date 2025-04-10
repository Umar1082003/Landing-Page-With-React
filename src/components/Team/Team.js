import React from "react";
import './Team.css';
import imgOne from '../../assets/img-1 (1).jpg'
import imgTwo from '../../assets/img-2 (1).jpg'
import imgThree from '../../assets/img-3.jpg'
import imgFour from '../../assets/img-4.jpg'

const Team = () => {
  return (
    <>
      <div className="team">
        <div className="container">
          <div className="team-content">
            <div className="header-section">
              <h1>BEHIND THE PEOPLE</h1>
              <span className="line"></span>
              <p>
                It is a long established fact that create category leading brand
                experiences a reader will be distracted by<br/> the readable content
                of a page when looking at its layout.
              </p>
            </div>
            <div className="main-content">
              <div className="box">
                <img src={imgOne} alt="person1" />
                <h2>Frank Johnson</h2>
                <span>CEO</span>
              </div>
              <div className="box">
                <img src={imgTwo} alt="person2" />
                <h2>Elaine Stclair</h2>
                <span>DESIGNEER</span>
              </div>
              <div className="box">
                <img src={imgThree} alt="person3" />
                <h2>Wanda Arthur</h2>
                <span>DEVELOPER</span>
              </div>
              <div className="box">
                <img src={imgFour} alt="person4" />
                <h2>Joshua Stemple</h2>
                <span>MANAGER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;