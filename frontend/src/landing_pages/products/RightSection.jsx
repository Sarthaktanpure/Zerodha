import React from "react";

const RightSection = (props) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center flex-md-row-reverse">

        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={props.image}
            alt="product"
            className="img-fluid landing-product-image"
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">{props.ProductName}</h2>

          <p className="text-muted mb-4">{props.description}</p>

          <a href={props.learnMore} className="text-decoration-none fw-semibold">
            Learn More →
          </a>
        </div>

      </div>
    </div>
  );
};

export default RightSection;
