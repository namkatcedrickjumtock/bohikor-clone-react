import React from "react";

const Header = () => {
  return (
    <header id="header" className="fixed-top shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <a href="index.html">
            <img src="img/white-bohikor.png" alt="" className="img-fluid" />
          </a>
        </div>
        <nav id="navbar" className="navbar">
          <ul id="ul-content">
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
                className="getstarted scrollto py-3"
                href="https://play.google.com/store/apps/details?id=io.ikor.ikorfinance&hl=en-GB"
              >
                Download Bohikor
              </a>
            </li>
          </ul>
        <button  className="btn btn-outline-primary mx-3 d-lg-none d-xl-block d-md-none d-lg-block d-xl-none d-xxl-block" id="menu-btn"> <i class="bi bi-list text-white fw-bold"></i></button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
