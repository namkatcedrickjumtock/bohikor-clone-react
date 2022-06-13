import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
        <div className="footer-top" >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 footer-contact">
                <img src="img/logo.png" alt=""/>
                <p>About...</p>
                <div className="social-links mt-3">
                  <a href="as" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="as" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  <a href="as" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="as" className="instagram"><i className="bx bxl-instagram"></i></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-8 footer-links " id="footer-leftCol">
                <h4>Address</h4>
                <ul>
                  <li><b>Global Office</b></li>
                  <li><a href="ds">651 N Broad St, Suite 206, Middletown, New Castle, DE</a></li>
                  <li><b>Africa</b></li>
                  <li><a href="ds">1st Trust Bank Building,
                      Great Soppo Buea branch, P.O BOX 138,
                      SW, Cameroon.</a></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
      </footer>
    );
}

export default Footer;
