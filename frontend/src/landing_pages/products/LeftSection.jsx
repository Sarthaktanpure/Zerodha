import React from "react";

const LeftSection = (props) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={props.imge}
            alt="product"
            className="img-fluid landing-product-image"
          />
        </div>

        <div className="col-md-6">
          <h2 className="fw-semibold mb-3">{props.ProductName}</h2>

          <p className="text-muted mb-4">{props.description}</p>

          <div className="mb-3">
            <a href={props.tryDeom} className="me-4 text-decoration-none fw-semibold">
              Try Demo →
            </a>
            <a href={props.learnMore} className="text-decoration-none fw-semibold">
              Learn More →
            </a>
          </div>

          <div className="d-flex gap-3 mt-3">
            <a href={props.googlePlay}>
              <img
                src={props.googlePlay}
                alt="Google Play"
                className="landing-store-badge"
              />
            </a>

            <a href={props.appStore}>
              <img
                src={props.appStore}
                alt="App Store"
                className="landing-store-badge"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeftSection;
