import React from "react";
import Logo from "../assets/images/Logo.svg";
import "../App.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-light pt-5 px-5 border-top">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {/* Logo Section */}
        <div className="col">
          <img
            src={Logo}
            alt="Logo"
            className="mb-3 footer-logo"
          />
          <p className="text-muted small">
            © 2010 - 2026, Zerodha Broking Ltd.
          </p>

          <ul className="list-unstyled d-flex gap-3 mt-3">
            <li>
              <i className="fa-brands fa-x-twitter"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>

        {/* Column Template */}
        {[
          {
            title: "Account",
            links: [
              "Open demat account",
              "Minor demat account",
              "NRI demat account",
              "HUF demat account",
              "Commodity",
              "Dematerialisation",
              "Fund transfer",
              "MTF",
            ],
          },
          {
            title: "Support",
            links: [
              "How to file a complaint?",
              "Contact us",
              "Status of your complaints",
              "Bulletin",
              "Circular",
              "Z-Connect blog",
              "Downloads",
            ],
          },
          {
            title: "Company",
            links: [
              "About",
              "Philosophy",
              "Press & media",
              "Careers",
              "Zerodha Cares (CSR)",
              "Zerodha.tech",
              "Open source",
              "Referral program",
            ],
          },
          {
            title: "Quick Links",
            links: [
              "Upcoming IPOs",
              "Brokerage charges",
              "Market holidays",
              "Economic calendar",
              "Calculators",
              "Markets",
              "Sectors",
              "Gift Nifty",
            ],
          },
        ].map((section, index) => (
          <div className="col" key={index}>
            <p className="fw-semibold">{section.title}</p>
            {section.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="d-block text-decoration-none text-muted mb-2 small footer-link"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="row mt-5 border-top p-3">
        <div className="col footer-description">
          <p>
            {" "}
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF{" "}
          </p>{" "}
          <p>
            {" "}
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances{" "}
          </p>{" "}
          <a href="">
            {" "}
            Smart Online Dispute Resolution | Grievances Redressal
            Mechanism{" "}
          </a>{" "}
          <p>
            {" "}
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.{" "}
          </p>{" "}
          <p>
            {" "}
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.{" "}
          </p>{" "}
          <p>
            {" "}
            India's largest broker based on networth as per NSE. NSE broker
            factsheet{" "}
          </p>{" "}
          <p>
            {" "}
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.{" "}
          </p>{" "}
          <p>
            {" "}
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.{" "}
          </p>{" "}
          <br />{" "}
          <p>
            {" "}
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
