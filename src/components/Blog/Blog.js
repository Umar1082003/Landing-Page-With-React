import React from "react";
import './Blog.css';
import img1 from '../../assets/img-1 (2).jpg';
import img2 from '../../assets/img-2 (2).jpg';
import img3 from '../../assets/img-3 (1).jpg';

const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <div className="blog-content">
            <div className="header-section">
              <h1>BLOG</h1>
              <span className="line"></span>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean class<br/> at a euismod mus ipsum
                vel ex finibus semper luctus quam.
              </p>
            </div>
            <div className="main-content">
              <div className="box">
                <img src={img1} alt="#"></img>
                <span>UI & UX Designer</span>
                <h2>Doing a cross country road trip</h2>
                <p>
                  She packed her seven versalia, put her initial into the belt
                  and made herself on the way..
                </p>
                <button>
                  Read More
                </button>
              </div>
              <div className="box">
                <img src={img2} alt="#"></img>
                <span>Digital Marketing</span>
                <h2>New exhibition at our Museum</h2>
                <p>
                  Pityful a rethoric question ran over her cheek, then she
                  continued her way.
                </p>
                <button>
                  Read More
                </button>
              </div>
              <div className="box">
                <img src={img3} alt="#"></img>
                <span>Travelling</span>
                <h2>Why are so many people..</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <button>
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;