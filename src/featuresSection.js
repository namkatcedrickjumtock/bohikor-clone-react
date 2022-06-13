import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="container py-4">
    <div className="row no-gutters">
      <h3 className="text-dark fw-bold py-3">Why Bohikor?</h3>
      <div className="col-md-3  py-5">
        <h4 className=" text-dark"> <img id="iconFeatures" src="img/track.png" alt="" className="img-fluid"/> Spending
       & Income
          Tracker
        </h4>
        <p>Bohikor app has a very intuitive and simple-to-use expense tracking feature.</p>
      </div>
      <div className="col-md-3 py-5">
        <h4 className="text-dark"> <img id="iconFeatures" src="img/awards.png" alt="" className="img-fluid"/> 
               Challenges & <br/> Awards
        </h4>
        <p>Bohikor has a strategy that enhances good money practices.</p>
      </div>
      <div className="col-md-3 py-5">
        <h4 className=" text-dark"> <img id="iconFeatures" src="img/grow.png" alt="" className="img-fluid"/> Grow your
        knowledge
        </h4>
        <p>Bohikor has a fast-growing library of resources to guide you in wealth generation.</p>
      </div>
      <div className="col-md-3 py-5">
        <h4 className=" text-dark"> <img id="iconFeatures" src="img/report.png" alt="" className="img-fluid" /> Budgets
          & Reports
        </h4>
        <p>A beautiful reporting screen that shows you an overview of your financial standing.</p>
      </div>
    </div>
  </section>
  );
};

export default FeaturesSection;
