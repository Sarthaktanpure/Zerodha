import React from "react";
import FundHouse from ".././../assets/images/zerodhaFundhouse.png";
import StreakLogo from ".././../assets/images/streakLogo.png";
import SensibleLogo from '.././../assets/images/sensibullLogo.svg';
import SmallCaseLogo from '.././../assets/images/smallcaseLogo.png';
import TijoriLogo from '.././../assets/images/tijori.svg';
import DittoLogo from '.././../assets/images/dittoLogo.png';
const Universe = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col-3 m-4">
          <div className="cart p-4">
            <img src={FundHouse} alt="FundHouse" className="landing-responsive-image" /> <br /><br />
            <p style={{fontSize:"0.7rem"}} className="text-muted p-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="cart p-4">
            <img src={StreakLogo} alt="FundHouse" className="landing-responsive-image" /> <br /><br />
            <p style={{fontSize:"0.7rem"}} className="text-muted p-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>

        {/* Col -2 */}

        <div className="col-3 m-4">
          <div className="cart p-4">
            <img src={SensibleLogo} alt="FundHouse" className="landing-responsive-image" /> <br /><br />
            <p style={{fontSize:"0.7rem"}} className="text-muted p-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="cart p-4">
            <img src={SmallCaseLogo} alt="FundHouse" className="landing-responsive-image" /> <br /><br />
            <p style={{fontSize:"0.7rem"}} className="text-muted p-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>

        {/* col-3 */}

        <div className="col-3 m-4">
          <div className="cart p-4">
            <img src={TijoriLogo} alt="FundHouse" className="landing-responsive-image" /> 
            <p style={{fontSize:"0.7rem"}} className="text-muted p-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="cart p-4">
            <img src={DittoLogo} alt="FundHouse" className="landing-responsive-image" /> <br /><br />
            <p style={{fontSize:"0.7rem"}} className="text-muted p-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Universe;
