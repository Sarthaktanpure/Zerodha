import React from "react";

const Brikerage = () => {
  return (
    <div className="container py-5">

      {/* Account Opening Charges */}
      <div className="mb-5">
        <h2 className="fw-semibold mb-4">Charges for account opening</h2>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="border-bottom">
              <tr>
                <th className="text-muted fw-normal">Type of account</th>
                <th className="text-muted fw-normal text-end">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td className="text-end">
                  <span className="badge bg-success px-3 py-2">FREE</span>
                </td>
              </tr>

              <tr className="table-light">
                <td>Offline account</td>
                <td className="text-end">
                  <span className="badge bg-success px-3 py-2">FREE</span>
                </td>
              </tr>

              <tr>
                <td>NRI account (offline only)</td>
                <td className="text-end">₹ 500</td>
              </tr>

              <tr className="table-light">
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="text-end">₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* AMC Section */}
      <div className="mb-5">
        <h3 className="fw-semibold mb-3">
          Demat AMC (Annual Maintenance Charge)
        </h3>

        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">

            <div className="d-flex justify-content-between px-4 py-3 border-bottom text-muted small">
              <span>Value of holdings</span>
              <span>AMC</span>
            </div>

            <div className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
              <span>Up to ₹4 lakh</span>
              <span className="badge bg-success px-3 py-2">FREE</span>
            </div>

            <div className="d-flex justify-content-between px-4 py-3 bg-light border-bottom">
              <span>₹4 lakh - ₹10 lakh</span>
              <span>₹100 per year, charged quarterly*</span>
            </div>

            <div className="d-flex justify-content-between px-4 py-3">
              <span>Above ₹10 lakh</span>
              <span>₹300 per year, charged quarterly</span>
            </div>

          </div>
        </div>

        <p className="mt-3 text-muted small">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA, click here.
        </p>
      </div>

      {/* Charges Explained */}
      <div>
        <h2 className="fw-semibold mb-4">Charges explained</h2>

        <div className="row g-5">
          <div className="col-md-6">

            <div className="mb-4">
              <h6 className="fw-semibold">Securities/Commodities transaction tax</h6>
              <p className="text-muted small">
                Tax by the government when transacting on the exchanges. Charged as
                above on both buy and sell sides when trading equity delivery.
                Charged only on selling side when trading intraday or on F&O. When
                trading at Zerodha, STT/CTT can be a lot more than the brokerage we
                charge. Important to keep a tab.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">Transaction/Turnover Charges</h6>
              <p className="text-muted small">
                Charged by exchanges (NSE, BSE, MCX) on the value of your
                transactions. BSE has revised transaction charges in XC, XD, XT, Z
                and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD
                groups have been merged into a new group X w.e.f 01.12.2017) BSE has
                revised transaction charges in SS and ST groups to ₹1,00,000 per
                crore of gross turnover. BSE has revised transaction charges for
                group A, B and other non exclusive scrips (non-exclusive scrips from
                group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat
                rate basis w.e.f. December 1, 2022. BSE has revised transaction
                charges in M, MT, TS and MS groups to ₹275 per crore of gross
                turnover.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">Call & trade</h6>
              <p className="text-muted small">
                Additional charges of ₹50 per order for orders placed through a
                dealer at Zerodha including auto square off orders.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">Stamp charges</h6>
              <p className="text-muted small">
                Stamp charges by the Government of India as per the Indian Stamp Act
                of 1899 for transacting in instruments on the stock exchanges and
                depositories.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">NRI brokerage charges</h6>
              <p className="text-muted small">
                For a non-PIS account, 0.5% or ₹50 per executed order for equity and
                F&O (whichever is lower). For a PIS account, 0.5% or ₹200 per
                executed order for equity (whichever is lower). ₹500 + GST as yearly
                account maintenance charges (AMC) charges.
              </p>
            </div>

          </div>

          <div className="col-md-6">

            <div className="mb-4">
              <h6 className="fw-semibold">GST</h6>
              <p className="text-muted small">
                Tax levied by the government on the services rendered. 18% of
                (brokerage + SEBI charges + transaction charges)
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">SEBI Charges</h6>
              <p className="text-muted small">
                Charged at ₹10 per crore + GST by Securities and Exchange Board of
                India for regulating the markets.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">DP (Depository participant) charges</h6>
              <p className="text-muted small">
                ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
                charged on the trading account ledger when stocks are sold,
                irrespective of quantity. Female demat account holders (as first
                holder) will enjoy a discount of ₹0.25 per transaction on the CDSL
                fee. Debit transactions of mutual funds & bonds get an additional
                discount of ₹0.25 on the CDSL fee.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">Pledging charges</h6>
              <p className="text-muted small">₹30 + GST per pledge request per ISIN.</p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">AMC (Account maintenance charges)</h6>
              <p className="text-muted small">
                For BSDA demat account: Zero charges if the holding value is less
                than ₹4,00,000. To learn more about BSDA, Click here For non-BSDA
                demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To
                learn more about AMC, Click here
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">Corporate action order charges</h6>
              <p className="text-muted small">
                ₹20 plus GST will be charged for OFS / buyback / takeover /
                delisting orders placed through Console.
              </p>
            </div>

            <div className="mb-4">
              <h6 className="fw-semibold">Off-market transfer charges</h6>
              <p className="text-muted small">₹25 per transaction.</p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Brikerage;