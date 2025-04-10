import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-overlay">
        <div className="container" style={{margin: "200px auto"}}>
          <div className="row">
            <div className="col-lg-12">
              <h2>We help startups launch their <br/>products</h2>
              <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
              <form>
                <input type="email" placeholder="Email"></input>
                <button type="submit">subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
