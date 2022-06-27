import React from 'react';

const LastFooter = () => {
    return (
        <div id="lastFooter">
      <footer className="d-flex justify-content-around text-white">
        <div className="container pt-4">
          <a className="btn btn-link btn-floating text-decoration-none" href="#!" role="button">About</a>
          <a className="btn btn-link btn-floating text-decoration-none" href="#!" role="button">Privacy</a>
          <a className="btn btn-link btn-floating text-decoration-none" href="./Terms.html" >Terms</a>
          <a className="btn btn-link btn-floating text-decoration-none" href="#!" role="button">Contact Us</a>
          <a className="btn btn-link btn-floating text-decoration-none" href="#!" role="button">Features</a>
        </div>
      </footer>
      <div className="container  text- p-3  d-block">
          <a className="text-" href="sa"> Copyright © 2022, Bohikor</a>
        </div>
    </div>
    );
}

export default LastFooter;
