import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="d-flex align-items-between">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6" >
            <h1 className="text-white text-3 fw-bold"> Track your spending and build better money Habits.</h1>
            <h5 className="text-white py-3">
              Bohikor helps you budget and manage your money in a fun way,
              designing the life you want from your mobile phone.
              <p className="my-2 text-info py-2 fw-bold">
                Join the Journey today!
              </p>
            </h5>

            <p className="text-white fw-bold">coming soon</p>
            <div className="container mb-4" id="dwn-btn">
              <a href="www.googleplay.com" className="download-btn">
                <img
                  src="img/google.png"
                  alt=""
                  className="img-fluid animate__animated animate__bounceInRight"
                />
              </a>
              <a href="www.googleplay.com" className="download-btn">
                <img
                  src="img/appstore.png" id="Appleimg"
                  alt=""
                  className="img-fluid animate__animated animate__bounceInLeft "
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="img/Bohikor-2x.png"
              alt=""
              className="img-fluid animate__animated animate__bounce "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
