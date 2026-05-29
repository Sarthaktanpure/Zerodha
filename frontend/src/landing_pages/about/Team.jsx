import React from "react";
import NithinKamath from ".././../assets/images/nithinKamath.jpg";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 p-3 p-md-5 mt-3 mt-md-4 d-flex justify-content-center">
          <div className="team-avatar mt-5">
            <img src={NithinKamath} alt="im" className="team-avatar-image" />
          </div>
        </div>
        <div className="col-12 col-md-7 mb-5">
          <h1 className="fs-3 mb-4 mb-md-5 p-0 p-md-4">People</h1>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking
            industry.{" "}
          </p>{" "}
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>{" "}
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link to="/" style={{ fontSize: "1rem", textDecoration: "none" }}>
              Homepage
            </Link>{" "}
            / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
