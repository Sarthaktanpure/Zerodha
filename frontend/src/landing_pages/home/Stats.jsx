import React from "react";
import ecosystem from ".././../assets/images/ecosystem.png";
const Stats = () => {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <h1 className="fs-2">Trust with Confidence</h1>
          <div className="m-3 p-2">
            <h2 className="fs-4">Customer-first always</h2>
            <p className="text-muted">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>
          <div className="m-3 p-2">
            <h2 className="fs-4">No spam or gimmicks</h2>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like. Our
              philosophies.
            </p>
          </div>
          <div className="m-3 p-2">
            <h2 className="fs-4">The Zerodha universe</h2>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>
          <div className="m-3 p-2">
            <h2 className="fs-4">Do better with money</h2>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img src={ecosystem} className="landing-responsive-image" alt="ecosystem" />
          <div className="text-center p-2 ">
            <a href="#" className="p-5" style={{textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
            <a href="##" style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
