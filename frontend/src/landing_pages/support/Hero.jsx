import React from "react";

const Hero = () => {
  return (
    <div className="bg-light border-bottom py-4">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-semibold">Support Portal</h3>
          <button className="btn btn-primary">My tickets</button>
        </div>

        <input
          type="text"
          className="form-control"
          placeholder="Eg: How do I open my account, How do I activate F&O..."
        />
      </div>
    </div>
  );
};

export default Hero;
