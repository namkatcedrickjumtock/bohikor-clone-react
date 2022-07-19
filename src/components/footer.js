import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
        <div className="footer-top mt-5 py-5" >
          <div className="container">
            <div className="row d-flex justify-content-around">
              <div className="col-lg-3 col-md-4 footer-contact">
                <img src="img/logo.png" alt=""/>
                <p>About...</p>
                <div className="social-links mt-3">
                  <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                </div>
              </div>
              <div className="col-lg-4  col-md-8 footer-links float-right" id='leftsidefooter'>
                <h4 className='text-primary'>Address</h4>
                  <li><h4>Global Office</h4></li>
                  <li><a href="ds">651 N Broad St, Suite 206, Middletown, New Castle, DE</a></li>
                  <li><h4>Africa</h4></li>
                  <li><a href="ds">1st Trust Bank Building,
                      Great Soppo Buea branch, P.O BOX 138,
                      SW, Cameroon.</a></li>
              </div>
            </div>
          </div>
          </div>
      </footer>
    );
}

export default Footer;
