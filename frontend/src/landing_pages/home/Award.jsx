import React from "react";
import largestBroker from ".././../assets/images/largestBroker.svg";
import pressLogos  from ".././../assets/images/pressLogos.png"
const Award = () => {
  return (
    <div className="container my-5 px-3 px-md-4">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-6 text-center">
          <img src={largestBroker} alt="Broker Image" className="landing-responsive-image" />
        </div>
        <div className="col-12 col-lg-6 p-3 p-md-4">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ millions Zerodha clients contribute to over 15% of all volumes in
            India daily by trading and investing in: </p>
            <div className="row">
              <div className="col-12 col-sm-6 mt-4">
                <ul>
                  <li>
                    Futures and Options
                  </li>
                  <li>
                    Commodity derivatives 
                  </li>
                  <li>
                    Currency derivatives
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 mt-4">
                <ul>
                  <li>
                    Stocks & IPOs
                  </li>
                  <li>
                    Direct mutual funds
                  </li>
                  <li>
                    Bond & Government Securities
                  </li>
                </ul>
              </div>
              <img className="landing-responsive-image" src={pressLogos} alt="pressLogo" />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Award;
