import React from "react";

const Pricing = () => {
  return (
    <div className="container my-5 px-3 px-md-4">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">
            See Pricing <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-12 col-lg-1"></div>
        <div className="col-12 col-lg-7">
          <div className="row text-center">
            <div className="col-12 col-md-6 border p-4">
              <h1 className="mb-3"><i className="fas fa-rupee-sign"></i> 0</h1>
              <p>Free account opening</p>
            </div>
            <div className="col-12 col-md-6 border p-4">
              <h1 className="mb-3"><i className="fas fa-rupee-sign"></i> 0</h1>
              <p>Free account opening</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
