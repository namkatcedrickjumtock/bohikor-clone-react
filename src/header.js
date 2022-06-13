import React from "react";

const Header = () => {
  return (
    <header id="header" className="fixed-top  header-transparent">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="index.html">
            <img src="img/white-bohikor.png" alt="" className="img-fluid" />
          </a>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto " href="#hero">
                Features
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#features">
                Money Therapy
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#gallery">
                Bohikor Score
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#pricing">
                FAQs
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="https://bohikor.com/fireside/"
              >
                Fire side
              </a>
            </li>
            <li>
              <a
                className="getstarted scrollto py-3 px-5"
                href="https://play.google.com/store/apps/details?id=io.ikor.ikorfinance&hl=en-GB"
              >
                Download Bohikor
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle bg-light"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
