import React from "react";

const Hero = () => {
  return (
    <div className="container m-5 text-center">
      <div className="row p-5">
        <h1 className="fs-2 text-muted">Zerodha Products</h1>
        <p className="fs-4">Sleek, modern, and intuitive trading platforms</p>
        <p>
          Check out our{" "}
          <a href="#" style={{textDecoration:"none",fontSize:"1rem"}}>
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>  
        </p>
      </div>
    </div>
  );
};

export default Hero;
