import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import GeneralContext from "./GeneralContext";
import { api } from "../lib/api";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    api.post("/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div
      className="buy-window-backdrop"
      role="presentation"
      onClick={handleCancelClick}
    >
      <div
        className="buy-window-card"
        id="buy-window"
        role="dialog"
        aria-modal="true"
        aria-labelledby="buy-window-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="buy-window-header">
          <div>
            <p className="buy-window-kicker">Place order</p>
            <h3 id="buy-window-title">
              Buy {uid || "Stock"} <span>Regular</span>
            </h3>
          </div>

          <button
            type="button"
            className="buy-window-close"
            onClick={handleCancelClick}
            aria-label="Close buy window"
          >
            x
          </button>
        </div>

        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
              />
            </fieldset>

            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required INR 140.65</span>
          <div>
            <Link className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </Link>
            <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
