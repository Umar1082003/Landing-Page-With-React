import React from "react";
import "./Features.css";
import onlineWorld from "../../assets/online-world (1).svg";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="container">
          <div className="features-content">
            <div className="text-sec">
              <h3>
                A digital web design studio creating modern & engaging online{" "}
                <br />
                experiences
              </h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the{" "}
                <br />
                Semantics, a large language ocean. A small river named Duden{" "}
                <br />
                flows by their place and supplies it with the necessary
                regelialia.
              </p>
              <ul>
                <li>We put a lot of effort in design.</li>
                <li>The most important ingredient of successful website.</li>
                <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                <li>Submit Your Organization.</li>
              </ul>
              <button>
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className="img-sec">
              <img src={onlineWorld} alt="macbook"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
