import React from "react";
import education from ".././../assets/images/education.svg";

const Education = () => {
  return (
    <div className="container my-5 px-3 px-md-4">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-4 text-center">
          <img src={education} alt="education" className="landing-responsive-image" />
        </div>
        <div className="col-12 col-lg-1"></div>
        <div className="col-12 col-lg-7 mt-0 mt-lg-5">
          <h1 className="fs-2 mb-4 text-muted">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#">
            Versility
            <i className="fa-solid fa-arrow-right" />
          </a>
          <p className="text-muted mt-4 mb-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#">
            TredingQ&A
            <i className="fa-solid fa-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
