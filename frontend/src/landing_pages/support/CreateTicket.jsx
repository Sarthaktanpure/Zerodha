import React from "react";

const CreateTicket = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {/* LEFT SECTION */}
        <div className="col-md-8">
          <div className="accordion" id="supportAccordion">
            {/* Account Opening */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc1"
                >
                  Account Opening
                </button>
              </h2>

              <div
                id="acc1"
                className="accordion-collapse collapse show"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                    <p>Resident individual</p>
                    <p>Minor</p>
                    <p>Non Resident Indian (NRI)</p>
                    <p>Company, Partnership, HUF and LLP</p>
                    <p>Glossary</p>
                </div>
              </div>
            </div>

            {/* Your Zerodha Account */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc2"
                >
                  Your Zerodha Account
                </button>
              </h2>

              <div
                id="acc2"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted small">Your Profile</p>
                  <p className="text-muted small">Account modification</p>
                  <p className="text-muted small">
                    Client Master Report (CMR) and Depository Participant (DP)
                  </p>
                  <p className="text-muted small">Nomination</p>
                  <p className="text-muted small">
                    Transfer and conversion of securities
                  </p>
                </div>
              </div>
            </div>

            {/* Kite */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc3"
                >
                  Kite
                </button>
              </h2>

              <div
                id="acc3"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted small">IPO</p>
                  <p className="text-muted small">Trading FAQs</p>
                  <p className="text-muted small">
                    Margin Trading Facility (MTF) and Margins
                  </p>
                  <p className="text-muted small">Charts and orders</p>
                  <p className="text-muted small">Alerts and Nudges</p>
                  <p className="text-muted small">General</p>
                </div>
              </div>
            </div>

            {/* Funds */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc4"
                >
                  Funds
                </button>
              </h2>

              <div
                id="acc4"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted small">Add money</p>
                  <p className="text-muted small">Withdraw money</p>
                  <p className="text-muted small">Add bank accounts</p>
                  <p className="text-muted small">eMandates</p>
                </div>
              </div>
            </div>

            {/* Console */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc5"
                >
                  Console
                </button>
              </h2>

              <div
                id="acc5"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted small">Portfolio</p>
                  <p className="text-muted small">Corporate actions</p>
                  <p className="text-muted small">Funds statement</p>
                  <p className="text-muted small">Reports</p>
                  <p className="text-muted small">Profile</p>
                  <p className="text-muted small">Segments</p>
                </div>
              </div>
            </div>

            {/* Coin */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#acc6"
                >
                  Coin
                </button>
              </h2>

              <div
                id="acc6"
                className="accordion-collapse collapse"
                data-bs-parent="#supportAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted small">Mutual funds</p>
                  <p className="text-muted small">
                    National Pension Scheme (NPS)
                  </p>
                  <p className="text-muted small">Fixed Deposit (FD)</p>
                  <p className="text-muted small">
                    Features on Coin Payments and Orders General
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (unchanged, already good) */}
        <div className="col-md-4">
          <div className="card mb-4 border-0 shadow-sm">
            <div
              className="card-body"
              style={{ borderLeft: "4px solid orange" }}
            >
              <ul className="mb-0">
                <li>
                  <a href="#">Offer for sale (OFS) – May 2026</a>
                </li>
                <li>
                  <a href="#">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light fw-semibold">Quick links</div>

            <div className="list-group list-group-flush">
              <a href="#" className="list-group-item list-group-item-action">
                1. Track account opening
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                2. Track segment activation
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                3. Intraday margins
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                4. Kite user manual
              </a>
              <a href="#" className="list-group-item list-group-item-action">
                5. Learn how to create a ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
