import React from "react";
import pricing0 from "../../assets/images/pricing0.svg";
import intrady from "../../assets/images/intradayTrades.svg";
import pricingMF from "../../assets/images/pricingMF.svg";
const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center m-5">
        <h3>Charges</h3>
        <p className="text-muted fs-5">List of all charges and taxes</p>
      </div>

      <div className="row">
        <div className="col-4">
          <div className="img p-5">
            <img src={pricing0} />
          </div>
          <div className="desc text-center">
            <h4>Free equity delivery</h4>
            <p className="mt-3">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="img p-5">
            <img src={intrady} />
          </div>
          <div className="desc text-center">
            <h4>Intraday and F&O trades</h4>
            <p className="mt-3">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="img p-5">
            <img src={pricingMF} />
          </div>
          <div className="desc text-center">
            <h4>Free direct MF</h4>
            <p className="mt-3">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
